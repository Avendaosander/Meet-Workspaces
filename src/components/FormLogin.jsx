import { Link } from "react-router-dom"

function FormLogin() {
	return (
		<form className='flex flex-col gap-8 px-5 min-500:text-lg min-900:px-0 min-900:py-10 flex-1'>
			<h2 className='text-center text-2xl font-bold'>Inicia Sesión</h2>
			<div className='relative z-0 w-full '>
				<input
					type='text'
					name='username'
					id='username'
					autoFocus
					className='block py-2 w-full text-blue-950 font-medium bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					required
				/>
				<label
					htmlFor='username'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					Username
				</label>
			</div>
			<div className='relative z-0 w-full '>
				<input
					type='password'
					name='password'
					id='password'
					className='block py-2 w-full text-blue-950 font-medium bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					required
				/>
				<label
					htmlFor='password'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					Password
				</label>
			</div>
			<div className="flex justify-between items-center">
				<strong className="text-xs min-500:text-sm">¿No tienes una cuenta?</strong>
				<Link to={'/register'} className="text-xs min-500:text-sm text-cyan-700/80 hover:font-bold">Crear cuenta</Link>
			</div>
			<button className="mx-auto bg-cyan-700 text-sky-50 py-1 px-10 rounded-lg hover:scale-110">Iniciar Sesión</button>
		</form>
	)
}

export default FormLogin
