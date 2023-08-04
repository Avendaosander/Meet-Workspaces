import { useState } from 'react'
import { formatearFechaInput } from '../logic/funciones'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { CREATE_RESERVATION } from '../graphql/reservations'

function FormReservation({ setShowForm, workspace }) {
	const fechaActual = formatearFechaInput(new Date())
	const precio = 'FREE'
	const [reser,setReser]=useState({
		workspace:{
			_id:workspace._id
		},
		date:"",
		hour:"",
		duration:"",
		price:workspace.price
	})
	const [createReservation, { data, loading, error, reset }] = useMutation(CREATE_RESERVATION)

	const handleChange = (e) => {
		setReser({
			...reser,
			[e.target.name]: e.target.value
		})
		console.log(reser)
	}
	function handleSelect(e){
        setReser({
            ...reser,
            duration: e.target.value
        })
    }
	const handleSubmit = (e) => {
		console.log(reser)
		e.preventDefault()
		createReservation({
				variables: {
					workspace: reser.workspace._id,
					date: reser.date,
					hour: reser.hour,
					duration: reser.duration,
					price: reser.price
				}
			})
	}
	return (
		<article className='fixed top-0 right-0 left-0 bottom-0 h-screen w-full bg-black/50 z-50 p-5 flex justify-center items-center'>
			<form className='flex flex-col gap-8 px-5 bg-cyan-100 py-10 rounded-xl ring-2 ring-sky-700 w-[300px] min-500:w-[400px]' onSubmit={handleSubmit}>
				<h2 className='text-center text-2xl font-bold'>Reservación</h2>
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
						required
					/>
					<label
						htmlFor='date'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Fecha
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<input
						type='time'
						name='hour'
						min={'07:00'}
						max={'21:00'}
						step={300}
						id='hour'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						value={reser.hour}
						onChange={handleChange}
						required
					/>
					<label
						htmlFor='hour'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Hora
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<select
						name='duration'
						id='duration'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						onChange={(e)=>handleSelect(e)}
						value={reser.duration}
						required
					>
						<option
							value=''
							disabled
						>
							--Duracion--
						</option>
						<option value='00:30'>30 minutos</option>
						<option value='00:45'>45 minutos</option>
						<option value='01:00'>1 hora</option>
						<option value='01:30'>1:30 hora</option>
						<option value='02:00'>2 horas</option>
					</select>
					<label
						htmlFor='duration'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Duración
					</label>
				</div>
				<p className={`${precio === 'FREE' ? 'font-bold italic text-lg md:text-2xl text-green-600' : 'font-bold'} text-center`}>{workspace.price}</p>
				<div className='flex justify-between items-center'>
					<button className='mx-auto bg-cyan-700 text-sky-50 py-1 px-5 rounded-lg hover:scale-110'>
						Reservar
					</button>
					<button
						className='mx-auto bg-rose-600 text-sky-50 py-1 px-5 rounded-lg hover:scale-110'
						onClick={e => {
							e.preventDefault()
							setShowForm(false)
						}}
					>
						Cancelar
					</button>
				</div>
			</form>
		</article>
	)
}

FormReservation.propTypes = {
   setShowForm: PropTypes.func.isRequired
}
export default FormReservation

