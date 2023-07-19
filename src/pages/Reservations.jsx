import CardReservation from '../components/CardReservations'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const reservations = [
	{
		_id: '64b6a332eeca39f475270d82',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-18',
		hour: '10:00',
		duration: '02:00',
		price: 15
	},
	{
		_id: '64b6a41ceeca39f475270dac',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-18',
		hour: '12:00',
		duration: '02:00',
		price: 15
	},
	{
		_id: '64b6a43feeca39f475270dd2',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-18',
		hour: '14:00',
		duration: '00:30',
		price: 15
	},
	{
		_id: '64b6a448eeca39f475270de1',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-18',
		hour: '15:00',
		duration: '00:30',
		price: 15
	},
	{
		_id: '64b6a5195ee33e5afa2bde88',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-19',
		hour: '10:00',
		duration: '00:30',
		price: 15
	},
	{
		_id: '64b6a538916491bf8231d656',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-20',
		hour: '10:00',
		duration: '00:30',
		price: 15
	},
	{
		_id: '64b6a556d5d1534a79bc1e4e',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Sander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-21',
		hour: '10:00',
		duration: '00:30',
		price: 15
	},
	{
		_id: '64b6a556d5d1534a79bc1e4a',
		user: {
			_id: '64b5a8d7ee9d5d98ba7fe3ae',
			username: 'Avendaosander'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Aula',
			address: 'Municipio san Rafael de carvajal, valera estado trujillo'
		},
		date: '2023-07-22',
		hour: '10:00',
		duration: '00:30',
		price: 0
	},
	{
		_id: '64b6abda8bae0b37c5c84860',
		user: {
			_id: '64b6ab189cef69667a6853a5',
			username: 'Avendaonsader'
		},
		workspace: {
			_id: '64b5e51e038f5f29094119a7',
			title: 'Oficina',
			address: 'Valera/C.C Plaza'
		},
		date: '2023-07-18',
		hour: '22:17',
		duration: '01:00',
		price: 15
	}
]

function Reservations() {
	return (
		<div className='relative min-h-screen'>
			<Nav />
			<main className='flex flex-col py-5 gap-5 pb-96'>
				<h1 className='text-2xl sm:text-3xl text-center font-bold'>
					Mis reservas
				</h1>
				<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
					{reservations.map(reservation => (
						<CardReservation key={reservation._id} data={reservation}/>
					))}
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Reservations
