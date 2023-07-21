import { BsChevronCompactLeft, BsFillCalendarWeekFill, BsFillPeopleFill, BsSearch } from 'react-icons/bs'
import Nav from '../components/Nav'
import { useState } from 'react'
import CarouselComments from '../components/CarouselComments'
import FormReservation from '../components/FormReservation'
import { FaLocationDot, FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import { BiSolidTimeFive } from 'react-icons/bi'
import { ordenarDias } from '../logic/funciones'

const comments = [
	{
		_id: '89756847',
		user: {
			_id: '87548934784',
			username: 'Avendaosander'
		},
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti itaque dolor veniam minus cum, eos distinctio nesciunt alias harum illum praesentium eveniet tempore, aperiam, repudiandae quis velit laudantium? Qui, tenetur.'
	},
	{
		_id: '897568478',
		user: {
			_id: '87548934784',
			username: 'Avendaosander'
		},
		content: 'Wapardo'
	}
]

const dias = ordenarDias([
	"Lun",
	"Vie", 
	"Jue",
	"Mie",
	"Dom",
	"Mar",
	"Sab"
])

function Home() {
	const [details, setDetails] = useState(false)
	const [showForm, setShowForm] = useState(false)
	const precio = '$10'
	const status = true

	return (
		<div className='min-h-screen flex flex-col'>
			<Nav/>
			<main className='relative flex-grow flex flex-col'>
				<section className='h-full w-full flex-grow bg-cyan-500'></section>
				<section className='absolute top-2 w-full'>
					<form className='relative flex items-center w-4/5 md:w-2/5 mx-auto md:mx-5'>
						<input
							type='text'
							placeholder='Busca por ciudad o direccion'
							className='bg-sky-50 w-full py-1 px-3 text-sm rounded-xl ring-1 ring-sky-700 focus:ring-2 outline-none placeholder:text-blue-950/80'
						/>
						<button className='absolute right-2 hover:scale-125'>
							<BsSearch />
						</button>
					</form>
				</section>
				<section className='fixed md:absolute bottom-0 md:right-0 md:h-full flex flex-col md:flex-row md: items-center w-full md:w-auto md:max-w-[40%]'>
					<button
						className='h-5 w-10 md:h-10 md:w-5 bg-cyan-200 flex justify-center items-center rounded-t-lg md:rounded-none md:rounded-l-xl shadow-[0px_-2px_8px_2px] shadow-sky-300'
						onClick={() => setDetails(!details)}
					>
						<BsChevronCompactLeft
							className={`${
								details ? '-rotate-90 md:rotate-180' : 'rotate-90 md:rotate-0'
							} transition duration-500`}
						/>
					</button>
					{details && (
						<aside className='max-h-[70vh] md:max-h-full bg-cyan-50 w-full flex flex-col gap-5 p-5 border-t border-sky-300 md:border-0 md:border-l overflow-auto font-Poppins text-blue-950'>
							<h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold'>
								Oficina
							</h2>
							<p className='font-medium md:px-10 text-center'>
								Excelente espacio de trabajo con todas las comodidades
								que necesitas, zona wifi, pc`s y laptops disponibles
								para su uso
							</p>
							<div className="flex items-center justify-center gap-2">
								<BsFillPeopleFill className='min-w-[14px]'/>
								<p className='font-medium'>Max. 10 Personas</p>
							</div>
							<div className="flex items-center justify-center gap-2">
								<FaLocationDot className='min-w-[14px]'/>
								<p className='font-medium'>Valera, Edo-Trujillo</p>
							</div>
							<article className='flex flex-col gap-2 justify-center items-center'>
								<strong>Coordenadas</strong>
								<div className='flex gap-10'>
									<div className="flex items-center gap-2">
										<TbWorldLatitude/>
										<p className='font-medium'>4,875684</p>
									</div>
									<div className="flex items-center gap-2">
										<TbWorldLongitude/>
										<p className='font-medium'>-74,875684</p>
									</div>
								</div>
							</article>
							<article className='flex flex-col gap-2 justify-center items-center'>
								<strong>Horario</strong>
								<div className="flex items-center gap-2">
									<BsFillCalendarWeekFill/>
									<p className='font-medium'>{dias.join(' - ')}</p>
								</div>
								<div className="flex items-center gap-2">
									<BiSolidTimeFive/>
									<p className='font-medium'>7:00 am - 9:00 pm</p>
								</div>
							</article>

							<div className="flex items-center justify-center gap-2">
								<FaMoneyBill1Wave/>
								<p className={`${precio === 'FREE' ? 'font-bold italic text-lg md:text-2xl text-green-600' : 'font-bold'}`}>{precio}</p>
							</div>
							<p className={`${status ? 'bg-green-400' : 'bg-rose-600 text-sky-50'} font-bold text-center py-1 px-5 rounded-xl mx-auto`}>{status ? 'DISPONIBLE' : 'No se encuentra disponible'}</p>
							<button
								className='bg-cyan-700 px-10 py-1 rounded-xl text-sky-50 mx-auto disabled:opacity-50'
								disabled={showForm}
								onClick={() => setShowForm(true)}
							>
								Reservar
							</button>
							<CarouselComments comments={comments} />
						</aside>
					)}
				</section>
				{showForm && (
					<FormReservation setShowForm={setShowForm}/>
				)}
			</main>
		</div>
	)
}

export default Home
