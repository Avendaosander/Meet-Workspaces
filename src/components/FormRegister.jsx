import { Link } from 'react-router-dom'

function FormRegister() {
	return (
		<form className='flex flex-col gap-8 px-5'>
			<h2 className='text-center text-2xl font-bold'>Registrarse</h2>
			<div className='relative z-0 w-full '>
				<input
					type='text'
					name='username'
					id='username'
					className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
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
					type='email'
					name='email'
					id='email'
					className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					required
				/>
				<label
					htmlFor='email'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					Email
				</label>
			</div>
			<div className='relative z-0 w-full '>
				<input
					type='password'
					name='password'
					id='password'
					className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
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
			<div className='relative z-0 w-full '>
				<input
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
					placeholder=' '
					required
				/>
				<label
					htmlFor='confirmPassword'
					className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
				>
					Confirm Password
				</label>
			</div>
			<div className="flex justify-between items-center gap-5">
				<strong className="text-xs">¿Ya tienes una cuenta?</strong>
				<Link to={'/login'} className="text-xs text-cyan-700/80">Inicia sesión</Link>
			</div>
			<button className="mx-auto bg-cyan-700 text-sky-50 py-1 px-10 rounded-lg hover:animate-pulse">Registrar</button>
		</form>
	)
}

export default FormRegister
