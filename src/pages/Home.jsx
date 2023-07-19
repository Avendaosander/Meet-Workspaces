import { BsChevronCompactLeft, BsSearch } from 'react-icons/bs'
import Nav from '../components/Nav'
import { useState } from 'react'
import CarouselComments from '../components/CarouselComments'
import FormReservation from '../components/FormReservation'

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

function Home() {
	const [details, setDetails] = useState(false)
	const [showForm, setShowForm] = useState(false)

	return (
		<div className='min-h-screen'>
			<Nav/>
			<main className='relative flex flex-col justify-center items-center h-screen'>
				<section className='h-full w-full bg-cyan-500'></section>
				<section className='absolute top-2 w-4/5'>
					<form className='relative flex items-center'>
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
				<section className='fixed bottom-0 flex flex-col items-center w-full'>
					<button
						className='h-5 w-10 bg-cyan-200 flex justify-center items-center rounded-t-lg shadow-[0px_-2px_8px_2px] shadow-sky-300'
						onClick={() => setDetails(!details)}
					>
						<BsChevronCompactLeft
							className={`${
								details ? '-rotate-90' : 'rotate-90'
							} transition duration-500`}
						/>
					</button>
					{details && (
						<aside className='max-h-[70vh] bg-cyan-50 w-full flex flex-col gap-5 p-5 border-t border-sky-300 overflow-auto'>
							<h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold'>
								Oficina
							</h2>
							<p className='font-medium'>
								Excelente espacio de trabajo con todas las comodidades
								que necesitas, zona wifi, pc`s y laptops disponibles
								para su uso
							</p>
							<p className='font-medium'>Valera, Edo-Trujillo</p>
							<p className='font-medium'>15 personas</p>
							<p className='font-medium'>20$</p>
							<p className='font-medium'>Disponible</p>
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
