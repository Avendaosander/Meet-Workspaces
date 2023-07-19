import LOGO from '../assets/Logo-Home.webp'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { NavLink } from 'react-router-dom'
import { FaMapMarkedAlt, FaUserAlt } from 'react-icons/fa'
import { BsFillBookmarkFill, BsTranslate } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

function Nav() {
	const { user } = useContext(UserContext)
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
				<section className='flex items-center gap-2 sm:gap-5 sm:text-xl font-semibold'>
					<NavLink
						to={'/workspaces'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
						}
					>
						<FaMapMarkedAlt className='sm:text-2xl'/>
						<span className='hidden sm:block'>Buscar Espacios</span>
					</NavLink>
					<NavLink
						to={'/reservations'}
						className={({ isActive }) =>
							isActive
								? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
								: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
						}
					>
						<BsFillBookmarkFill className='sm:text-2xl'/>
						<span className='hidden sm:block'>Mis Reservas</span>
					</NavLink>
					{user.rol === 'Admin' && (
						<NavLink
							to={'/dashboard'}
							className={({ isActive }) =>
								isActive
									? 'bg-sky-600/70 rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
									: 'rounded-lg px-2 hover:bg-sky-600 flex items-center gap-5'
							}
						>
							<FaUserAlt className='sm:text-2xl'/>
							<span className='hidden sm:block'>Administrar</span>
						</NavLink>
					)}
					<button className='rounded-lg py-1 px-2 hover:bg-sky-600'>
						<BsTranslate className='sm:text-2xl'/>
					</button>
					<NavLink to={'/login'} className='rounded-lg py-1 px-2 hover:bg-sky-600'>
						<BiLogOut className='sm:text-2xl'/>
					</NavLink>
				</section>
			)}
		</nav>
	)
}

export default Nav
