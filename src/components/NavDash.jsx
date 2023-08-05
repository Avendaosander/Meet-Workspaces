import { BsPersonWorkspace } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa6'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import TooltipCustom from './TooltipCustom'

function NavDash({ dashboard, setDashboard }) {
	const {t} = useTranslation(['navDash'])
   return (
      <section className='fixed top-0 h-screen left-0 flex items-center'>
         <div className='my-auto flex flex-col items-center justify-center gap-5 bg-cyan-200 text-sky-900 text-xl rounded-r-xl px-2 py-5 ring-1 ring-sky-700/50'>
            <button className='relative group' onClick={() => setDashboard('workspaces')} disabled={dashboard === 'workspaces'}>
               <BsPersonWorkspace className='hover:scale-125 group-disabled:opacity-50 group-disabled:hover:scale-100'/>
               <TooltipCustom position='right' width='w-[17ch]'>
                  {t('tooltip_workpsace')}
               </TooltipCustom>
            </button>
            <button className='relative group' onClick={() => setDashboard('users')} disabled={dashboard === 'users'}>
               <FaUsers className='hover:scale-125 group-disabled:opacity-50 group-disabled:hover:scale-100'/>
               <TooltipCustom position='right'>
                  {t('tooltip_users')}
               </TooltipCustom>
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