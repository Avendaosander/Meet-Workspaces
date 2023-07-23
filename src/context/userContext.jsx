import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const UserContext = createContext()

export function UserProvider ({ children }) {
   const [user, setUser] = useState(null)

   useEffect(() => {
      const userLS = localStorage.getItem('User')
      if (userLS) {
         setUser(JSON.parse(userLS))
      }
   }, [])

   return (
      <UserContext.Provider value={{
         user,
         setUser,
      }}>
         {children}
      </UserContext.Provider>
   )
}

UserProvider.propTypes = {
   children: PropTypes.node.isRequired
}
