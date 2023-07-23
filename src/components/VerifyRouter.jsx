import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

function VerifyRouter({ hasUser, children, redirectTo = '/workspaces'}) {
   if (hasUser) return <Navigate to={redirectTo}/> 
   return (
      <>
         {children ? children : <Outlet/>}
      </>
   )
}

VerifyRouter.propTypes = {
   hasUser: PropTypes.bool.isRequired,
   children: PropTypes.node,
   redirectTo: PropTypes.string
}

export default VerifyRouter