import { useState } from 'react'
import CardWorkspace from './CardWorkspace'
import { MdAddBox } from 'react-icons/md'
import FormWorkspace from './FormWorkspace'

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
   const [modalCreate, setModalCreate] = useState(false)
	return (
		<main className='flex flex-col py-5 gap-5 pb-96 md:pb-80 min-900:pb-72 lg:pb-60'>
			<h1 className='relative text-2xl sm:text-3xl text-center font-bold'>
				Espacios de Trabajo
				<div className='absolute top-1/2 right-2 sm:right-5 transform -translate-y-[40%]'>
					<button
						className='relative group/create'
						onClick={e => {
							e.preventDefault()
							setModalCreate(true)
						}}
					>
						<MdAddBox className='group-disabled/create:opacity-50 text-sky-900 lg:text-4xl hover:scale-125'/>
						<span className='hidden group-hover/create:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute top-1/2 right-full transform -translate-x-2 -translate-y-1/2 transition-opacity duration-300'>
							Crear
						</span>
					</button>
				</div>
			</h1>
			<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
				{workspaces.length === 0 ? (
					<strong className="text-lg col-span-full">No hay espacios de trabajo para mostrar</strong>
				) : (
					workspaces.map(workspace => (
						<CardWorkspace
							key={workspace._id}
							data={workspace}
						/>
					))
				)}
			</section>
			{modalCreate && (
				<FormWorkspace setShowForm={setModalCreate}/>
			)}
		</main>
	)
}

export default DashWorkspaces
