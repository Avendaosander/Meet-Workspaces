import PropTypes from 'prop-types'

function SearchResult({ place, map, setResultsVisible }) {
	const { title, address, lat, lon } = place

	const marcarLugar = () => {
		if (!map.current) return
		setResultsVisible(false)
		map?.current.flyTo({ center: [lat, lon], zoom: 14 })
	}

	return (
		<div
			className='px-5 py-2 border-b border-sky-700 last-of-type:border-0 hover:bg-black/10 first-of-type:rounded-t-lg last-of-type:rounded-b-lg cursor-pointer'
			onClick={marcarLugar}
		>
			<strong>{title}</strong>
			<p>{address}</p>
		</div>
	)
}

SearchResult.propTypes = {
	place: PropTypes.object.isRequired,
	map: PropTypes.object.isRequired,
	marker: PropTypes.object.isRequired,
	setResultsVisible: PropTypes.func.isRequired
}

export default SearchResult
