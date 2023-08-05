import { useState } from 'react'
import { formatearFechaInput, validateDateOnDayOfWeek } from '../logic/funciones'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { CREATE_RESERVATION } from '../graphql/reservations'
import { toastError, toastSuccess } from '../utils/toasts'
import { useTranslation } from 'react-i18next'

function FormReservation({ setShowForm, workspace }) {
	const {t} = useTranslation(['formReservation'])
	const fechaActual = formatearFechaInput(new Date())
   const precio = workspace.price === 0 ? `${t('text_price')}` : `$${workspace.price}`
	const [reser, setReser] = useState({
		workspace: workspace._id,
		date: '',
		hour: '',
		duration: '',
		price: workspace.price
	})

	const [createReservation, { data, loading, error, reset }] = useMutation(
		CREATE_RESERVATION,
		{
			refetchQueries: ['GetReservations']
		}
	)

	const handleChange = e => {
		setReser({
			...reser,
			[e.target.name]: e.target.value
		})
	}

	function handleSelect(e) {
		setReser({
			...reser,
			duration: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (reser.date === '')
			return toastError(`${t('msg_warning_date')}`)
		if (reser.date < fechaActual)
			return toastError(`${t('msg_warning_date_today_validate')}`)
		if (!validateDateOnDayOfWeek(reser.date, workspace.weekdays))
			return toastError(`${t('msg_warning_date_validate')}`)
		if (reser.hour === '')
			return toastError(`${t('msg_warning_hour')}`)
		e.preventDefault()
		if (reser.hour < workspace.form || reser.hour > workspace.to)
			return toastError(`${t('msg_warning_hour_validate')}`)
		if (reser.duration === '')
			return toastError(`${t('msg_warning_duration')}`)

		createReservation({
			variables: {
				workspace: reser.workspace,
				date: reser.date,
				hour: reser.hour,
				duration: reser.duration,
				price: reser.price
			}
		})
	}

	if (data) {
		setShowForm(false)
		toastSuccess(`${t('msg_success_create')}`)
	}

	if (error?.message) {
		toastError(error?.message)
		reset()
	}

	return (
		<article className='fixed top-0 right-0 left-0 bottom-0 h-screen w-full bg-black/50 z-50 p-5 flex justify-center items-center'>
			<form
				className='flex flex-col gap-8 px-5 bg-cyan-100 py-10 rounded-xl ring-2 ring-sky-700 w-[300px] min-500:w-[400px]'
				onSubmit={handleSubmit}
			>
				<h2 className='text-center text-2xl font-bold'>{t('title')}</h2>
				<div className='relative z-0 w-full '>
					<input
						type='date'
						name='date'
						min={fechaActual}
						id='date'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						onChange={handleChange}
						value={reser.date}
					/>
					<label
						htmlFor='date'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						{t('label_date')}
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<input
						type='time'
						name='hour'
						min={workspace.from}
						max={workspace.to}
						step={300}
						id='hour'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						value={reser.hour}
						onChange={handleChange}
					/>
					<label
						htmlFor='hour'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						{t('label_time')}
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<select
						name='duration'
						id='duration'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						onChange={e => handleSelect(e)}
						value={reser.duration}
					>
						<option
							value=''
							disabled
						>
							{t('text_option_default')}
						</option>
						<option value='00:30'>30 {t('text_option_minutes')}</option>
						<option value='00:45'>45 {t('text_option_minutes')}</option>
						<option value='01:00'>1 {t('text_option_hour')}</option>
						<option value='01:30'>1:30 {t('text_option_hour')}</option>
						<option value='02:00'>2 {t('text_option_hours')}</option>
					</select>
					<label
						htmlFor='duration'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						{t('label_duration')}
					</label>
				</div>
				<p
					className={`${
						workspace.price === 0
							? 'font-bold italic text-lg md:text-2xl text-green-600'
							: 'font-bold'
					} text-center`}
				>
					{precio}
				</p>
				<div className='flex justify-between items-center'>
					<button
						className='mx-auto bg-cyan-700 text-sky-50 py-1 px-5 rounded-lg hover:scale-110 disabled:opacity-50 disabled:hover:scale-100'
						disabled={loading}
					>
						{t('text_button_create')}
					</button>
					<button
						className='mx-auto bg-rose-600 text-sky-50 py-1 px-5 rounded-lg hover:scale-110 disabled:opacity-50 disabled:hover:scale-100'
						disabled={loading}
						onClick={e => {
							e.preventDefault()
							setShowForm(false)
						}}
					>
						{t('text_button_cancel')}
					</button>
				</div>
			</form>
		</article>
	)
}

FormReservation.propTypes = {
	setShowForm: PropTypes.func.isRequired,
	workspace: PropTypes.object.isRequired
}
export default FormReservation
