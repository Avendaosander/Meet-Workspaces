import { useState } from 'react'
import CardWorkspace from './CardWorkspace'
import { MdAddBox } from 'react-icons/md'
import FormWorkspace from './FormWorkspace'
import { useQuery } from '@apollo/client'
import { GET_WORKSPACES } from '../graphql/workspaces'
import { toastError } from '../utils/toasts'
import LoaderDashWorks from './LoaderDashWorks'

function DashWorkspaces() {
   const [modalCreate, setModalCreate] = useState(false)
	const { loading, error, data } = useQuery(GET_WORKSPACES);

	if (error?.message) {
		toastError(error?.message)
	}

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
			{loading ? (
				<LoaderDashWorks/>
			) : (
				<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
					{data?.getWorkspaces.length === 0 ? (
						<strong className="text-lg col-span-full">No hay espacios de trabajo para mostrar</strong>
					) : (
						data?.getWorkspaces.map(workspace => (
							<CardWorkspace
								key={workspace._id}
								data={workspace}
							/>
						))
					)}
				</section>
			)}
			{modalCreate && (
				<FormWorkspace setShowForm={setModalCreate}/>
			)}
		</main>
	)
}

export default DashWorkspaces
