import CardWorkspace from './CardWorkspace'

const workspaces = [
	{
		_id: '64b5e51e038f5f29094119a7',
		title: 'Oficina',
		description:
			"Una oficina ideal para programadores, zona wifi, pc's y laptops disponibles para su uso",
		address: 'Municipio san Rafael de carvajal, valera estado trujillo',
		lat: '9.297612',
		lon: '-70.615162',
		price: 0
	},
	{
		_id: '64b5e51e038f5f29094119a8',
		title: 'Aula',
		description:
			"Una oficina ideal para programadores, zona wifi, pc's y laptops disponibles para su uso",
		address: 'Valera/C.C Plaza',
		lat: '9.297612',
		lon: '-70.615162',
		price: 18
	},
	{
		_id: '64b5e51e038f5f29094119a9',
		title: 'Salon',
		description:
			"Una oficina ideal para programadores, zona wifi, pc's y laptops disponibles para su uso",
		address: 'Valera/C.C Plaza',
		lat: '9.297612',
		lon: '-70.615162',
		price: 20
	},
	{
		_id: '64b5e51e038f5f29094119ab',
		title: 'Oficina',
		description:
			"Una oficina ideal para programadores, zona wifi, pc's y laptops disponibles para su uso",
		address: 'Valera/C.C Plaza',
		lat: '9.297612',
		lon: '-70.615162',
		price: 15
	}
]

function DashWorkspaces() {
	return (
		<main className='flex flex-col py-5 gap-5 pb-96'>
			<h1 className='text-2xl sm:text-3xl text-center font-bold'>
				Espacios de Trabajo
			</h1>
			<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
				{workspaces.map(workspace => (
					<CardWorkspace
						key={workspace._id}
						data={workspace}
					/>
				))}
			</section>
		</main>
	)
}

export default DashWorkspaces
