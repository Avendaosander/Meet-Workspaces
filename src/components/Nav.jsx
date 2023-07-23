import LOGO from '../assets/Logo-Home.webp'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { NavLink } from 'react-router-dom'
import { FaMapMarkedAlt, FaUserAlt } from 'react-icons/fa'
import { BsFillBookmarkFill, BsTranslate } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

function Nav() {
	const { user, setUser } = useContext(UserContext)

	const logout = () => {
		setUser(null)
		localStorage.removeItem('User')
	}
	
	return (
		<nav className='bg-sky-700 text-sky-50 h-20 flex justify-between items-center px-5'>
			<NavLink to={'/'}>
				<img
					src={LOGO}
					alt='Logo Meet Workspace'
					className='w-[50px] h-[50px] aspect-square hover:scale-125'
				/>
			</NavLink>
			{!user ? (
				<section className='flex items-center gap-5 sm:text-xl font-semibold'>
					<NavLink
						to={'/login'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600'
								: 'rounded-lg px-2 hover:bg-sky-600'
						}
					>
						Login
					</NavLink>
					<NavLink
						to={'/register'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600'
								: 'rounded-lg px-2 hover:bg-sky-600'
						}
					>
						Register
					</NavLink>
				</section>
			) : (
				<section className='flex items-center gap-2 min-500:gap-5 sm:gap-1 min-900:gap-5 font-semibold'>
					<NavLink
						to={'/workspaces'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
						}
					>
						<FaMapMarkedAlt className='min-500:text-xl sm:text-2xl'/>
						<span className='hidden sm:block text-sm md:text-lg '>Buscar Espacios</span>
					</NavLink>
					<NavLink
						to={'/reservations'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
						}
					>
						<BsFillBookmarkFill className='min-500:text-xl sm:text-2xl'/>
						<span className='hidden sm:block text-sm md:text-lg '>Mis Reservas</span>
					</NavLink>
					{user?.rol === 'Admin' && (
						<NavLink
							to={'/dashboard'}
							className={({ isActive }) =>
								isActive
									? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
									: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5 py-1'
							}
						>
							<FaUserAlt className='min-500:text-xl sm:text-2xl'/>
							<span className='hidden sm:block text-sm md:text-lg '>Administrar</span>
						</NavLink>
					)}
					<button className='rounded-lg py-1.5 px-2 hover:bg-sky-600'>
						<BsTranslate className='min-500:text-xl sm:text-2xl'/>
					</button>
					<NavLink to={'/login'} className='rounded-lg py-1.5 px-2 hover:bg-sky-600' onClick={logout}>
						<BiLogOut className='min-500:text-xl sm:text-2xl'/>
					</NavLink>
				</section>
			)}
		</nav>
	)
}

export default Nav
