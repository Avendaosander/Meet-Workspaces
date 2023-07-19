import { BsCheckLg } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import PropTypes from 'prop-types'

function RowUserEdit({ user, setEditing }) {
   console.log(user)
	return (
		<form className='w-full bg-cyan-100 text-blue-950 shadow-cards grid md:grid-cols-[auto,auto,auto,auto] lg:grid-cols-4 justify-items-center gap-5 p-5 rounded-xl'>
			<input
				type='text'
				name='username'
            title='Nombre de Usuario'
				// value={user.username}
				placeholder='Username'
            autoFocus
				className='font-bold bg-inherit outline-none ring-1 rounded-sm px-3 py-1 focus:rounded-xl focus:ring-sky-700'
			/>
			<input
				type='email'
				name='email'
            title='Correo Electronico'
				// value={user.email}
				placeholder='email'
				className='font-medium bg-inherit outline-none ring-1 rounded-sm px-3 py-1 focus:rounded-xl focus:ring-sky-700'
			/>
			<select
				name='rol'
				id='rol'
            title='Rol'
				required
				className='font-semibold bg-inherit outline-none ring-1 rounded-sm px-3 py-1 focus:rounded-xl focus:ring-sky-700'
			>
				<option value='User'>User</option>
				<option value='Admin'>Admin</option>
			</select>
			<div className='flex items-center gap-10 sm:gap-5 lg:gap-10'>
				<button
					className='relative group/workspace'
					onClick={() => console.log('Editar')}
				>
					<BsCheckLg className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-green-700' />
					<span className='hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300'>
						Confirmar
					</span>
				</button>
				<button
					className='relative group/workspace'
					onClick={e => {
                  e.preventDefault()
                  setEditing(false)
               }}
				>
					<VscChromeClose className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-rose-600' />
					<span className='hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300'>
						Cancelar
					</span>
				</button>
			</div>
		</form>
	)
}

RowUserEdit.propTypes = {
	user: PropTypes.object.isRequired,
	setEditing: PropTypes.func.isRequired
}

export default RowUserEdit
