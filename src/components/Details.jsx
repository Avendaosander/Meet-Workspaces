import { useState } from 'react'
import { BiSolidTimeFive } from 'react-icons/bi'
import { BsFillCalendarWeekFill, BsFillPeopleFill } from 'react-icons/bs'
import { FaLocationDot, FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import { sortDays } from '../logic/funciones'
import CarouselComments from './CarouselComments'
import FormReservation from './FormReservation'
import FormComments from './FormComments'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function Details({ workspace, comments }) {
	const {t} = useTranslation(['details'])
	const [showForm, setShowForm] = useState(false)
	const status = true
   const price = workspace.price === 0 ? `${t('text_price')}` : `$${workspace.price}`
	return (
		<aside className='max-h-[70vh] md:max-h-full md:h-full bg-cyan-50 w-full flex flex-col gap-5 p-5 border-t border-sky-300 md:border-0 md:border-l overflow-auto font-Poppins text-blue-950'>
			<h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold'>
				{workspace.title}
			</h2>
			<p className='font-medium md:px-10 text-center'>
				{workspace.description}
			</p>
			<div className='flex items-center justify-center gap-2'>
				<BsFillPeopleFill className='min-w-[14px]' />
				<p className='font-medium'>Max. {workspace.capacity} {t('max_people')}</p>
			</div>
			<div className='flex items-center justify-center gap-2'>
				<FaLocationDot className='min-w-[14px]' />
				<p className='font-medium'>{workspace.address}</p>
			</div>
			<article className='flex flex-col gap-2 justify-center items-center'>
				<strong>{t('coordinates_strong')}</strong>
				<div className='flex gap-10'>
					<div className='flex items-center gap-2'>
						<TbWorldLatitude />
						<p className='font-medium'>{workspace.lat}</p>
					</div>
					<div className='flex items-center gap-2'>
						<TbWorldLongitude />
						<p className='font-medium'>{workspace.lon}</p>
					</div>
				</div>
			</article>
			<article className='flex flex-col gap-2 justify-center items-center'>
				<strong>{t('horary_strong')}</strong>
				<div className='flex items-center gap-2'>
					<BsFillCalendarWeekFill />
					<p className='font-medium'>
						{sortDays(workspace.weekdays).join(' - ')}
					</p>
				</div>
				<div className='flex items-center gap-2'>
					<BiSolidTimeFive />
					<p className='font-medium'>
						{workspace.from} - {workspace.to}
					</p>
				</div>
			</article>

			<div className='flex items-center justify-center gap-2'>
				<FaMoneyBill1Wave />
				<p
					className={`${
						workspace.price === 0
							? 'font-bold italic text-lg md:text-2xl text-green-600'
							: 'font-bold'
					}`}
				>
					{price}
				</p>
			</div>
			<p
				className={`${
					status ? 'bg-green-400' : 'bg-rose-600 text-sky-50'
				} font-bold text-center py-1 px-5 rounded-xl mx-auto`}
			>
				{status ? t('status_true') : t('status_false')}
			</p>
			<button
				className='bg-cyan-700 px-10 py-1 rounded-xl text-sky-50 mx-auto disabled:opacity-50'
				disabled={showForm}
				onClick={() => setShowForm(true)}
			>
				{t('button_reserv')}
			</button>
			<FormComments id={workspace._id} />
			<CarouselComments comments={comments} />
			{showForm && <FormReservation setShowForm={setShowForm} workspace={workspace} />}
		</aside>
	)
}

Details.propTypes = {
	workspace: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired
}

export default Details
