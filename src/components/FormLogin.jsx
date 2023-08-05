import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from '@apollo/client'
import { LOGIN } from "../graphql/Users"
import { toastCustom, toastError } from "../utils/toasts"
import { useTranslation } from "react-i18next"

function FormLogin() {
	const {t} = useTranslation(['login'])
	const { setUser } = useContext(UserContext)
	const [userForm, setUserForm] = useState({
		username: '',
		password: ''
	})
	const navegar = useNavigate()

	const [login, {data, loading, error, reset}] = useMutation(LOGIN)

	if (data?.login) {
		localStorage.setItem('User', JSON.stringify(data.login))
		toastCustom(`${t('toast_custom', {username: `${data.login.username}`})}`, '👏')
		setUser(data.login)
		navegar('/workspaces')
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (userForm.username === '') {
			return toastError(`${t('toast_error_username')}`)
		}
		if (userForm.password === '') {
			return toastError(`${t('toast_error_password')}`)
		}
		login({
			variables: {
				username: userForm.username,
				password: userForm.password
			}
		})
	}

	const handleChange = (e) => {
		setUserForm({
			...userForm,
			[e.target.name]: e.target.value
		})
	}

	if (error?.message) {
		toastError(error?.message)
		reset()
	}

	return (
		<form className='flex flex-col gap-8 px-5 min-500:text-lg min-900:px-0 min-900:py-10 flex-1' onSubmit={handleSubmit}>
			<h2 className='text-center text-2xl font-bold'>{t('title')}</h2>
			<div className='relative z-0 w-full '>
				<input
					type='text'
					name='username'
					id='username'
					autoFocus
					className='block py-2 w-full text-blue-950 font-medium bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					value={userForm.username}
					onChange={handleChange}
				/>
				<label
					htmlFor='username'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					{t('label_username')}
				</label>
			</div>
			<div className='relative z-0 w-full '>
				<input
					type='password'
					name='password'
					id='password'
					className='block py-2 w-full text-blue-950 font-medium bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					value={userForm.password}
					onChange={handleChange}
				/>
				<label
					htmlFor='password'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					{t('label_password')}
				</label>
			</div>
			<div className="flex justify-between items-center">
				<strong className="text-xs min-500:text-sm">{t('text_strong')}</strong>
				<Link to={'/register'} className="text-xs min-500:text-sm text-cyan-700/80 hover:font-bold">{t('text_link')}</Link>
			</div>
			<button className="mx-auto bg-cyan-700 text-sky-50 py-1 px-10 rounded-lg hover:scale-110 disabled:opacity-50 disabled:scale-100" disabled={loading}>{t('button_text')}</button>
		</form>
	)
}

export default FormLogin
