import { useState } from 'react'
import CardWorkspace from './CardWorkspace'
import { MdAddBox } from 'react-icons/md'
import FormWorkspace from './FormWorkspace'
import { useQuery } from '@apollo/client'
import { GET_WORKSPACES } from '../graphql/workspaces'
import { toastError } from '../utils/toasts'
import LoaderDashWorks from './LoaderDashWorks'
import { useTranslation } from 'react-i18next'
import TooltipCustom from './TooltipCustom'

function DashWorkspaces() {
	const {t} = useTranslation(['dashWorkspaces'])
   const [modalCreate, setModalCreate] = useState(false)
	const { loading, error, data } = useQuery(GET_WORKSPACES);

	if (error?.message) {
		toastError(error?.message)
	}

	return (
		<main className='flex flex-col py-5 gap-5 pb-96 md:pb-80 min-900:pb-72 lg:pb-60'>
			<h1 className='relative text-2xl sm:text-3xl text-center font-bold'>
				{t('title')}
				<div className='absolute top-1/2 right-2 sm:right-5 transform -translate-y-[40%]'>
					<button
						className='relative group'
						onClick={e => {
							e.preventDefault()
							setModalCreate(true)
						}}
					>
						<MdAddBox className='group-disabled:opacity-50 text-sky-900 lg:text-4xl hover:scale-125'/>
						<TooltipCustom position='left'>
							{t('button_text')}
						</TooltipCustom>
					</button>
				</div>
			</h1>
			{loading ? (
				<LoaderDashWorks/>
			) : (
				<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
					{data?.getWorkspaces.length === 0 ? (
						<strong className="text-lg col-span-full">{t('not_data')}</strong>
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
