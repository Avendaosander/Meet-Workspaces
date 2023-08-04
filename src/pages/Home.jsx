import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WORKSPACE } from '../graphql/workspaces'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { toastError } from '../utils/toasts'
import Nav from '../components/Nav'
import Map from '../components/Map'
import Details from '../components/Details'

function Home() {
	const [details, setDetails] = useState(false)
	const [getWorkspace, {data, error}] = useLazyQuery(GET_WORKSPACE);

	if (error?.message) {
		toastError(error?.message)
	}
	console.log
	return (
		<div className='min-h-screen flex flex-col'>
			<Nav/>
			<main className='relative flex-grow flex flex-col'>
				<section className='h-full w-full flex-grow'>
					<Map getWorkspace={getWorkspace}/>
				</section>
				<section className='fixed md:absolute bottom-0 md:right-0 md:h-full z-50 flex flex-col md:flex-row md: items-center w-full md:w-auto md:max-w-[40%]'>
					<button
						className='h-5 w-10 md:h-10 md:w-5 bg-cyan-200 flex justify-center items-center rounded-t-lg md:rounded-none md:rounded-l-xl shadow-[0px_-2px_8px_2px] shadow-sky-300'
						onClick={() => {
							if (data?.getWorkspace) {
								setDetails(!details)
							}
						}}
					>
						<BsChevronCompactLeft
							className={`${
								details ? '-rotate-90 md:rotate-180' : 'rotate-90 md:rotate-0'
							} transition duration-500`}
						/>
					</button>
					{details && data?.getWorkspace && (
						<Details workspace={data.getWorkspace.workspace} comments={data.getWorkspace.comments}/>
					)}
				</section>
			</main>
		</div>
	)
}

export default Home
