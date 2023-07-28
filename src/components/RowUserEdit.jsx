import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { BsCheckLg } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { GET_USERS, UPDATE_USER } from '../graphql/users'
import { toastCustom, toastError, toastSuccess } from '../utils/toasts'
import PropTypes from 'prop-types'

function RowUserEdit({ user, setEditing }) {
	const [userData, setUserData] = useState({
		username: user.username,
		email: user.email,
		rol: user.rol
	})

	const [updateUser, { data, loading, error, reset }] = useMutation(UPDATE_USER,
		{
			refetchQueries: [GET_USERS, 'GetUsers']
		}
	)

	if (error?.message) {
		toastError(error?.message)
		reset()
	}

	const handleChange = e => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		let update = null
		if (userData.username !== user.username) update = {...update, username: userData.username}
		if (userData.email !== user.email) update = {...update, email: userData.email}
		if (userData.rol !== user.rol) update = {...update, rol: userData.rol}
		
		if (update) {
			updateUser({
				variables: {
					id: user._id,
					...update
				}
			})
		} else {
			toastCustom('No has editado ningun dato', '⚠️', 'bottom-left')
		}
	}

	if (data) {
		setEditing(false)
		toastSuccess('Editado con exito')
	}

	return (
		<form className='w-full bg-cyan-100 text-blue-950 shadow-cards grid md:grid-cols-[auto,auto,auto,auto] lg:grid-cols-4 justify-items-center gap-5 p-5 rounded-xl font-Poppins' onSubmit={handleSubmit}>
			<input
				type='text'
				name='username'
            title='Nombre de Usuario'
				value={userData.username}
				onChange={handleChange}
				placeholder='Username'
            autoFocus
				className='font-bold w-full bg-inherit outline-none ring-1 rounded-sm px-3 py-1 placeholder:text-blue-950/70 focus:rounded-xl focus:ring-sky-700 focus:placeholder:text-blue-950/50'
			/>
			<input
				type='email'
				name='email'
            title='Correo Electronico'
				value={userData.email}
				onChange={handleChange}
				placeholder='email'
				className='font-medium w-full bg-inherit outline-none ring-1 rounded-sm px-3 py-1 placeholder:text-blue-950/70 focus:rounded-xl focus:ring-sky-700 focus:placeholder:text-blue-950/50'
			/>
			<select
				name='rol'
				id='rol'
            title='Rol'
				onChange={handleChange}
				required
				defaultValue={user.rol}
				className='font-semibold bg-inherit outline-none ring-1 rounded-sm px-3 py-1 focus:rounded-xl focus:ring-sky-700'
			>
				<option value='User'>User</option>
				<option value='Admin'>Admin</option>
			</select>
			<div className='flex items-center gap-10 sm:gap-5 lg:gap-10'>
				<button
					className='relative group/workspace'
					disabled={loading}
				>
					<BsCheckLg className='hover:scale-125 group-disabled/workspace:opacity-50 group-disabled/workspace:hover:scale-100 text-2xl text-green-700' />
					<span className='hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300'>
						Confirmar
					</span>
				</button>
				<button
					className='relative group/workspace'
					disabled={loading}
					onClick={e => {
						e.preventDefault()
						setEditing(false)
               }}
				>
					<VscChromeClose className='hover:scale-125 group-disabled/workspace:opacity-50 group-disabled/workspace:hover:scale-100 text-2xl text-rose-600' />
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
