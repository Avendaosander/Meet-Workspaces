import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl, { Marker } from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import SearchResult from './SearchResult'
import { useQuery } from '@apollo/client'
import { GET_WORKSPACES } from '../graphql/workspaces'
import { toastError } from '../utils/toasts'
import { findWorkspaceByValue, truncatedText } from '../logic/funciones'
const { VITE_MAP_ACCESS_TOKEN } = import.meta.env
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

mapboxgl.accessToken = VITE_MAP_ACCESS_TOKEN

function Map({ getWorkspace, setDetails }) {
	const {t} = useTranslation(['map'])
	const mapContainer = useRef()
	const map = useRef()
	const marker = useRef()
	const popup = useRef()
	const [resultsVisible, setResultsVisible] = useState(false)
	const [place, setPlace] = useState('')
	const [results, setResults] = useState([])
	const [center, setCenter] = useState([-65.801997444749, 7.61957014788959])
	const { error, data } = useQuery(GET_WORKSPACES);

	if (error?.message) {
		toastError(error?.message)
	}

	const handleChange = e => {
		setPlace(e.target.value)
		const peticion = findWorkspaceByValue(data.getWorkspaces, e.target.value)
		setResults(peticion)
		setResultsVisible(true)
	}

	const positionInitial = () => {
		map.current.flyTo({ center, zoom: 15 })
	}

	const search = async e => {
		e.preventDefault()
		if (place.trim() === '') return

		const peticion = findWorkspaceByValue(data.getWorkspaces, place)

		setResults(peticion)
		setResultsVisible(true)
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			setCenter([coords.longitude, coords.latitude])
		})
	}, [])

	useEffect(() => {
		if (map.current) return // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: center,
			minZoom: 2,
			maxZoom: 20,
			zoom: 9
		})
		map.current.addControl(new mapboxgl.NavigationControl())
	}, [center, map, mapContainer])

	useEffect(() => {
		map?.current.flyTo({
			center,
			zoom: 15
		})
		if (map) {
			if (popup.current) {
				popup.current.remove()
			}
			popup.current = new mapboxgl.Popup({
				className: 'text-blue-950 text-sm',
				maxWidth: '300px',
				closeButton: false,
				closeOnMove: true
			})
				.setLngLat(center)
				.setHTML(
					`<strong>${t('my_location_strong')}</strong>\n<p>${t('my_location_text')}</p>`
				)
				.addTo(map.current)

			if (marker.current) {
				marker.current.remove()
			}
			marker.current = new Marker({ color: '#0e7490' })
				.setLngLat(center)
				.addTo(map.current)
				.setPopup(popup.current)
		}
	}, [center, map, marker])

	useEffect(() => {
		if (data?.getWorkspaces) {
			data.getWorkspaces.map(workspace => {
				const popup = new mapboxgl.Popup({
					className: 'text-blue-950 text-sm',
					maxWidth: '300px',
					closeButton: false,
					closeOnMove: true
				})
					.setLngLat([workspace.lat, workspace.lon])
					.setHTML(
						`<strong>${workspace.title}</strong>\n<p>${truncatedText(workspace.description)}</p>`
					)
	
				const hola=new Marker({ color: '#0369a1' })
					.setLngLat([workspace.lat, workspace.lon])
					.addTo(map.current)
					.setPopup(popup)
					.on('click', () => {console.log('hola')})
	
				hola.getElement().addEventListener('click', () => {
					getWorkspace({
						variables: { 
							id:workspace._id
						}
					})
					setDetails(true)
				})
	
			})
		}
	},[data, getWorkspace, setDetails])

	return (
		<div className='font-Laila h-full '>
			<section className='absolute top-5 left-5 z-10 md: w-auto'>
				<form
					className='relative flex items-center w-60 md:w-[400px] mx-auto md:mx-0'
					onSubmit={search}
				>
					<input
						type='text'
						name='search_text'
						placeholder={t('placeholder_text')}
						value={place}
						onChange={handleChange}
						onFocus={() => setResultsVisible(true)}
						onBlur={() => setResultsVisible(false)}
						className='bg-sky-50 w-full py-1 px-3 text-sm rounded-xl ring-1 ring-sky-700 focus:ring-2 outline-none placeholder:text-blue-950/80'
					/>
					<button className='absolute right-2 hover:scale-125'>
						<BsSearch />
					</button>
				</form>
				{results.length && resultsVisible && place ? (
					<div className='mt-2 bg-cyan-50 w-60 md:w-[400px] rounded-lg text-blue-950'>
						{results.map(place => (
							<SearchResult
								key={place._id}
								place={place}
								map={map}
								marker={marker}
								popup={popup}
								setResultsVisible={setResultsVisible}
							/>
						))}
					</div>
				) : (
					place &&
					resultsVisible && (
						<div className='mt-2 bg-cyan-50 w-60 md:w-[400px] rounded-lg text-blue-950'>
							<div className='px-5 py-2 border-b border-sky-700 last-of-type:border-0'>
								<strong>{t('not_results_strong')}</strong>
								<p>{t('not_results_text')} {place}</p>
							</div>
						</div>
					)
				)}
			</section>
			<div
				ref={mapContainer}
				className='absolute top-0 bottom-0 left-0 right-0'
			/>
			<button
				className='absolute right-5 bottom-5 p-2 bg-cyan-700 text-sky-50 rounded-lg hover:scale-110'
				onClick={positionInitial}
			>
				{t('my_location_button')}
			</button>
		</div>
	)
}

Map.propTypes = {
	getWorkspace: PropTypes.func.isRequired,
	setDetails: PropTypes.func.isRequired
}

export default Map
