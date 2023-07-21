import Header from '../components/Header'
import Nav from '../components/Nav'
import imageMap from '../assets/Maps.jpg'
import imageHall from '../assets/Sala-conferencias.jpg'
import imageTeam from '../assets/Equipo.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Homepage() {
	return (
		<>
			<Nav/>
			<Header/>
			<main className='flex flex-col gap-10'>
				<section className="bg-home-section bg-cover bg-center h-80 md:h-[400px] flex items-center">
					<div className="bg-black/50 backdrop:blur-sm flex justify-center items-center h-full w-full">
						<p className="text-sky-50 sm:text-xl lg:text-2xl font-medium text-center p-8 max-w-[75ch]">En nuestra plataforma, encontrarás la solución perfecta para encontrar, reservar y gestionar espacios compartidos como salas de reuniones, oficinas y aulas. Con nuestra innovadora función de interacción de mapas, te facilitamos la búsqueda y selección de espacios cercanos a ti.</p>
					</div>
				</section>
				<article className='flex flex-col lg:flex-row items-center gap-10 text-blue-950 px-5'>
					<img src={imageMap} alt="Mano sosteniendo movil con google Maps" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium'>Una vez que encuentres el espacio perfecto, reservarlo será rápido y sencillo. Elige la fecha, hora de inicio y duración deseada, y en tiempo real verás la disponibilidad. ¡Confirma tu reserva con solo unos clics y recibirás una confirmación visual y un correo electrónico con todos los detalles!</p>
				</article>
				<article className='flex flex-col lg:flex-row-reverse items-center gap-10 text-blue-950 px-5'>
					<img src={imageHall} alt="Sala de Conferencias" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium'>Nuestra plataforma se basa en la seguridad, la comodidad y la calidad. Nos esforzamos por brindarte una experiencia fluida y confiable en cada paso del proceso. ¡Nos encargamos de que encuentres el espacio de trabajo perfecto para tus necesidades!</p>
				</article>
				<article className='flex flex-col lg:flex-row items-center gap-10 text-blue-950 px-5'>
					<img src={imageTeam} alt="Grupo trabajando en oficina" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium break-words'>Regístrate ahora y descubre la comodidad de reservar espacios de trabajo con nuestra plataforma de interacción de mapas. ¡Empieza a aprovechar al máximo tu tiempo y espacio de trabajo hoy mismo!</p>
				</article>
				<section className='bg-cyan-200 flex justify-center items-center py-5'>
					<Link to={'/register'} className='bg-cyan-700 text-sky-50 py-1 px-4 text-xl min-900:text-2xl font-semibold rounded-lg hover:scale-110'>Registrate ya!</Link>
				</section>
				<article className='flex flex-col items-center gap-10 text-blue-950 px-5 pb-10'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-2xl'>
						Reserva tu lugar de trabajo ideal en Meet Workspace y lleva tu productividad al siguiente nivel.
					</h2>
				</article>
			</main>
			<Footer/>
		</>
	)
}

export default Homepage
