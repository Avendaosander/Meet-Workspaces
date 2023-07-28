import PropTypes from 'prop-types'
import { Marker, Popup } from 'mapbox-gl'

function SearchResult({ place, map, marker, popup, setResultsVisible }) {
	const { place_name, text, center } = place

	const marcarLugar = () => {
		if (!map.current) return

		if (marker.current) {
			marker.current.remove()
		}
		setResultsVisible(false)
		marker.current = new Marker()
		if (popup.current) {
			popup.current.remove()
		}
		popup.current = new Popup({
			className: 'text-blue-950 text-sm',
			maxWidth: '300px',
			closeButton: false,
			closeOnMove: true
		})
			.setLngLat(center)
			.setHTML(
				`<strong>Titulo del espacio de trabajo</strong>\n<p>Descripcion truncada del espacio de trabajo</p>`
			)
			.addTo(map.current)

		marker.current
			.setLngLat(center)
			.addTo(map.current)
			.setPopup(popup.current)
		map?.current.flyTo({ center, zoom: 14 })
	}

	return (
		<div
			className='px-5 py-2 border-b border-sky-700 last-of-type:border-0 hover:bg-black/10 first-of-type:rounded-t-lg last-of-type:rounded-b-lg cursor-pointer'
			onClick={marcarLugar}
		>
			<strong>{place_name}</strong>
			<p>{text}</p>
		</div>
	)
}

SearchResult.propTypes = {
	place: PropTypes.object.isRequired,
	map: PropTypes.object.isRequired,
	marker: PropTypes.object.isRequired,
	popup: PropTypes.object.isRequired,
	setResultsVisible: PropTypes.func.isRequired
}

export default SearchResult
