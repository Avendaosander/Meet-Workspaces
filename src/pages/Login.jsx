import { Link } from 'react-router-dom'
import LOGO from '../assets/Logo-Home.webp'
import FormLogin from '../components/FormLogin'

function Login() {
	return (
		<main className='min-h-screen flex justify-center items-center p-10'>
			<Link to={'/'}>
				<img
					src={LOGO}
					alt='Logo Meet Workspace'
					className='fixed top-5 left-5 w-[50px] h-[50px] aspect-square hover:scale-110'
				/>
			</Link>
			<section className='bg-cyan-100 shadow-cards flex flex-col gap-5 text-blue-950 py-10 rounded-xl'>
				<p className=' text-center font-medium px-5'>
					¿Necesitas un lugar para trabajar? ¡Tenemos lo que necesitas!
					Inicia sesión en Meet Workspace y encuentra el espacio ideal para
					ti.
				</p>
				<hr className="h-[1px] border-0 bg-blue-950"/>
				<FormLogin />
			</section>
		</main>
	)
}

export default Login
