import PropTypes from 'prop-types'

const POSITIONS = {
   buttom: 'left-1/2 top-full transform -translate-x-1/2 translate-y-4',
   top: 'left-1/2 right-full transform -translate-x-1/2 -translate-y-16',
   left: 'top-1/2 right-full transform -translate-x-2 -translate-y-1/2',
   right: 'top-1/2 left-full transform translate-x-2 -translate-y-1/2'
}

function TooltipCustom({ children, position, width }) {
   return (
      <span className={`hidden group-hover:block bg-blue-950 text-sky-50 text-sm text-center rounded py-1 px-2 absolute ${POSITIONS[position]} transition-opacity duration-300 z-[60] ${width || 'w-auto'}`}>
         {children}
      </span>
   )
}

TooltipCustom.propTypes = {
   children: PropTypes.node,
   position: PropTypes.string.isRequired,
   width: PropTypes.string
}

export default TooltipCustom