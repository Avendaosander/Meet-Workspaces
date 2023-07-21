import { Link } from "react-router-dom"

function Header() {
	return (
		<header className='bg-cyan-100 h-96 flex flex-col justify-center items-center p-10 gap-10'>
			<h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-blue-950 font-bold max-w-2xl">Reserva un espacio de trabajo en Meet Workspace y disfruta de un lugar de trabajo cómodo y profesional.</h1>
			<Link to={'/workspaces'} className="bg-cyan-700 text-sky-50 sm:text-xl min-900:text-2xl font-semibold py-1 px-5 rounded-lg hover:scale-110">Comienza a buscar</Link>
		</header>
	)
}

export default Header
