import { BsPersonWorkspace } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa6'
import PropTypes from 'prop-types'

function NavDash({ dashboard, setDashboard }) {
   return (
      <section className='fixed top-0 h-screen left-0 flex items-center'>
         <div className='my-auto flex flex-col items-center justify-center gap-5 bg-cyan-200 text-sky-900 text-xl rounded-r-xl px-2 py-5 ring-1 ring-sky-700/50'>
            <button className='relative group/workspace' onClick={() => setDashboard('workspaces')} disabled={dashboard === 'workspaces'}>
               <BsPersonWorkspace className='hover:scale-125 group-disabled/workspace:opacity-50 group-disabled/workspace:hover:scale-100'/>
               <span className="hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute top-1/2 left-full transform translate-x-2 -translate-y-1/2 transition-opacity duration-300 w-[17ch]">
               Espacios de Trabajo
               </span>
            </button>
            <button className='relative group/user' onClick={() => setDashboard('users')} disabled={dashboard === 'users'}>
               <FaUsers className='hover:scale-125 group-disabled/user:opacity-50 group-disabled/user:hover:scale-100'/>
               <span className="hidden group-hover/user:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute top-1/2 left-full transform translate-x-2 -translate-y-1/2 transition-opacity duration-300 ">
               Usuarios
               </span>
            </button>
         </div>
      </section>
   )
}

NavDash.propTypes = {
   dashboard: PropTypes.string.isRequired,
   setDashboard: PropTypes.func.isRequired
}

export default NavDash