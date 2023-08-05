import LOGO from '../assets/Logo-Home.webp'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { NavLink } from 'react-router-dom'
import { FaMapMarkedAlt, FaUserAlt } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import SwitchLang from './SwitchLang'
import { useTranslation } from 'react-i18next'
import TooltipCustom from './TooltipCustom'

function Nav() {
	const { user, setUser } = useContext(UserContext)
	const {t} = useTranslation(['nav'])

	const logout = () => {
		setUser(null)
		localStorage.removeItem('User')
	}
	
	return (
		<nav className='bg-sky-700 text-sky-50 h-20 flex justify-between items-center px-5'>
			<NavLink to={'/'} className={'relative group'}>
				<img
					src={LOGO}
					alt='Logo Meet Workspace'
					className='w-[50px] h-[50px] aspect-square hover:scale-125'
				/>
				<TooltipCustom position='right' width='w-[14ch]'>
					{t('button_homepage')}
				</TooltipCustom>
			</NavLink>
			{!user ? (
				<section className='flex items-center gap-2 sm:gap-5 text-sm sm:text-xl font-semibold'>
					<NavLink
						to={'/login'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600'
								: 'rounded-lg px-2 hover:bg-sky-600'
						}
					>
						{t('text_login')}
					</NavLink>
					<NavLink
						to={'/register'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600'
								: 'rounded-lg px-2 hover:bg-sky-600'
						}
					>
						{t('text_register')}
					</NavLink>
					<button className='rounded-lg py-1.5 px-2 hover:bg-sky-600 relative group'>
						<SwitchLang/>
                  <TooltipCustom position='left' width='w-[17ch]'>
							{t('button_translate')}
                  </TooltipCustom>
					</button>
				</section>
			) : (
				<section className='flex items-center gap-2 min-500:gap-5 sm:gap-1 min-900:gap-5 font-semibold'>
					<NavLink
						to={'/workspaces'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
						}
					>
						<FaMapMarkedAlt className='min-500:text-xl sm:text-2xl'/>
						<span className='hidden sm:block text-sm md:text-lg '>{t('text_workspaces')}</span>
						<TooltipCustom position='buttom' width='w-[15ch]'>
							{t('text_workspaces')}
						</TooltipCustom>
					</NavLink>
					<NavLink
						to={'/reservations'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
						}
					>
						<BsFillBookmarkFill className='min-500:text-xl sm:text-2xl'/>
						<span className='hidden sm:block text-sm md:text-lg '>{t('text_reservations')}</span>
						<TooltipCustom position='buttom' width='w-[15ch]'>
							{t('text_reservations')}
						</TooltipCustom>
					</NavLink>
					{user?.rol === 'Admin' && (
						<NavLink
							to={'/dashboard'}
							className={({ isActive }) =>
								isActive
									? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
									: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1 relative group'
							}
						>
							<FaUserAlt className='min-500:text-xl sm:text-2xl'/>
							<span className='hidden sm:block text-sm md:text-lg '>{t('text_dashboard')}</span>
							<TooltipCustom position='buttom'>
								{t('text_dashboard')}
							</TooltipCustom>
						</NavLink>
					)}
					<button className='rounded-lg py-1.5 px-2 hover:bg-sky-600 relative group'>
						<SwitchLang/>
                  <TooltipCustom position='buttom' width='w-[17ch]'>
							{t('button_translate')}
                  </TooltipCustom>
					</button>
					<NavLink to={'/login'} className='rounded-lg py-1.5 px-2 hover:bg-sky-600 relative group' onClick={logout}>
						<BiLogOut className='min-500:text-xl sm:text-2xl'/>
                  <TooltipCustom position='left' width='w-[13ch]'>
							{t('button_logout')}
                  </TooltipCustom>
					</NavLink>
				</section>
			)}
		</nav>
	)
}

export default Nav
