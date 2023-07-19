import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProtectedRouter({ isAllowed, children, redirectTo = '/login'}) {
   if (!isAllowed) return <Navigate to={redirectTo}/> 
   return (
      <>
         {children ? children : <Outlet/>}
      </>
   )
}

ProtectedRouter.propTypes = {
   isAllowed: PropTypes.bool.isRequired,
   children: PropTypes.node,
   redirectTo: PropTypes.string
}

export default ProtectedRouter