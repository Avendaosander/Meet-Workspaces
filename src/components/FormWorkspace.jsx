import PropTypes from 'prop-types'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_WORKSPACE, GET_WORKSPACES, UPDATE_WORKSPACE } from '../graphql/workspaces'
import { toastCustom, toastError, toastSuccess } from '../utils/toasts'
import { validateLat, validateLng } from '../logic/funciones'

function FormWorkspace({ setShowForm, dataUpdate = null }) {
	// Debo refactorizar este componente ⚠️
	const [createWorkspace, { data, loading, error, reset }] = useMutation(
		CREATE_WORKSPACE,
		{
			refetchQueries: [GET_WORKSPACES, 'GetWorkspaces']
		}
	)
	const [updateWorkspace, { data: dataEdit, error: errorEdit, reset: resetEdit }] = useMutation(UPDATE_WORKSPACE, {
		refetchQueries: [GET_WORKSPACES, 'GetWorkspaces']
	})

	const [workspace, setWorkspace] = useState({
		title: dataUpdate?.title || '',
		description: dataUpdate?.description || '',
		address: dataUpdate?.address || '',
		capacity: dataUpdate?.capacity || 1,
		lat: dataUpdate?.lat || '',
		lon: dataUpdate?.lon || '',
		price: dataUpdate?.price || 0,
		weekdays: dataUpdate?.weekdays || [],
		from: dataUpdate?.from || '',
		to: dataUpdate?.to || ''
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (workspace.title === '')
			return toastError('El titulo no puede estar vacio')
		if (workspace.description === '')
			return toastError('La descripcion no puede estar vacia')
		if (workspace.address === '')
			return toastError('La direccion no puede estar vacia')
		if (workspace.lat === '')
			return toastError('La latitud no puede estar vacia')
		if (!validateLat(workspace.lat))
			return toastError('La latitud no es valida')
		if (workspace.lon === '')
			return toastError('la Longitud no puede estar vacia')
		if (!validateLng(workspace.lon))
			return toastError('la longitud no es valida')
		if (workspace.capacity === 0)
			return toastError('La capacidad no puede ser 0')
		if (workspace.from === '')
			return toastError('La hora de abrir no puede estar vacio')
		if (workspace.to === '')
			return toastError('La hora de cerrar no puede estar vacio')

		if (dataUpdate) {
			let update = null
			if (workspace.title !== dataUpdate.title)
				update = { ...update, title: workspace.title }
			if (workspace.description !== dataUpdate.description)
				update = { ...update, description: workspace.description }
			if (workspace.address !== dataUpdate.address)
				update = { ...update, address: workspace.address }
			if (workspace.lat !== dataUpdate.lat)
				update = { ...update, lat: workspace.lat }
			if (workspace.lon !== dataUpdate.lon)
				update = { ...update, lon: workspace.lon }
			if (workspace.capacity !== dataUpdate.capacity)
				update = { ...update, capacity: Number(workspace.capacity) }
			if (workspace.weekdays !== dataUpdate.weekdays)
				update = { ...update, weekdays: workspace.weekdays }
			if (workspace.from !== dataUpdate.from)
				update = { ...update, from: workspace.from }
			if (workspace.to !== dataUpdate.to)
				update = { ...update, to: workspace.to }
			if (workspace.price !== dataUpdate.price)
				update = { ...update, price: Number(workspace.price) }

			if (update) {
				updateWorkspace({
					variables: {
						id: dataUpdate._id,
						...update
					}
				})
			} else {
				toastCustom('No has editado ningun dato', '⚠️', 'top-right')
			}
		} else {
			createWorkspace({
				variables: {
					title: workspace.title,
					description: workspace.description,
					address: workspace.address,
					capacity: Number(workspace.capacity),
					lat: workspace.lat,
					lon: workspace.lon,
					price: Number(workspace.price),
					weekdays: workspace.weekdays,
					from: workspace.from,
					to: workspace.to
				}
			})
		}
	}

	if (data) {
		setShowForm(false)
		toastSuccess('Creado con exito')
	}

	if (dataEdit) {
		setShowForm(false)
		toastSuccess('Editado con exito')
	}

	const handleChange = e => {
		setWorkspace({
			...workspace,
			[e.target.name]: e.target.value
		})
	}

	const handleChangeDays = e => {
		const { value, checked } = e.target
		if (checked) {
			setWorkspace({
				...workspace,
				weekdays: [...workspace.weekdays, value]
			})
		} else {
			setWorkspace({
				...workspace,
				weekdays: workspace.weekdays.filter(day => day !== value)
			})
		}
	}

	if (error?.message) {
		toastError(error?.message)
		reset()
	}

	if (errorEdit?.message) {
		toastError(errorEdit?.message)
		resetEdit()
	}

	return (
		<article className='fixed top-0 h-screen w-full bg-black/50 z-10 p-5 md:p-0 flex justify-center items-center font-Poppins text-blue-950 overflow-auto'>
			<form
				className='flex flex-col gap-8 px-5 my-auto bg-cyan-100 py-10 rounded-xl ring-2 ring-sky-700 w-[300px] min-500:w-[500px]'
				onSubmit={handleSubmit}
			>
				<h2 className='text-center text-2xl font-bold'>
					Espacio de trabajo
				</h2>
				<div className='relative z-0 w-full '>
					<input
						type='text'
						name='title'
						id='title'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						value={workspace.title}
						onChange={handleChange}
					/>
					<label
						htmlFor='title'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Titulo
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<input
						type='text'
						name='description'
						id='description'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						value={workspace.description}
						onChange={handleChange}
					/>
					<label
						htmlFor='description'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Descripción
					</label>
				</div>
				<div className='relative z-0 w-full '>
					<input
						type='text'
						name='address'
						id='address'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						value={workspace.address}
						onChange={handleChange}
					/>
					<label
						htmlFor='address'
						className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
					>
						Dirección
					</label>
				</div>
				<div className='flex flex-col min-500:flex-row min-500:justify-between gap-8'>
					<div className='relative z-0 w-full '>
						<input
							type='text'
							name='lat'
							id='lat'
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.lat}
							onChange={handleChange}
						/>
						<label
							htmlFor='lat'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Latitud
						</label>
					</div>
					<div className='relative z-0 w-full '>
						<input
							type='text'
							name='lon'
							id='lon'
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.lon}
							onChange={handleChange}
						/>
						<label
							htmlFor='lon'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Longitud
						</label>
					</div>
				</div>
				<div className='flex flex-col min-500:flex-row min-500:justify-between gap-8'>
					<div className='relative z-0 w-full '>
						<input
							type='number'
							name='capacity'
							min={1}
							max={100}
							id='capacity'
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.capacity}
							onChange={handleChange}
						/>
						<label
							htmlFor='capacity'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Capacidad
						</label>
					</div>
					<div className='relative z-0 w-full '>
						<input
							type='number'
							name='price'
							min={0}
							id='price'
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.price}
							onChange={handleChange}
						/>
						<label
							htmlFor='price'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Precio ($)
						</label>
					</div>
				</div>
				<strong className='text-sm text-center'>Horario</strong>
				<ul className='flex flex-wrap justify-center gap-5 w-full'>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Lun'
							value={'Lun'}
							defaultChecked={dataUpdate?.weekdays.includes('Lun')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Lun'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Lun
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Mar'
							value={'Mar'}
							defaultChecked={dataUpdate?.weekdays.includes('Mar')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Mar'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Mar
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Mie'
							value={'Mie'}
							defaultChecked={dataUpdate?.weekdays.includes('Mie')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Mie'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Mie
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Jue'
							value={'Jue'}
							defaultChecked={dataUpdate?.weekdays.includes('Jue')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Jue'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Jue
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Vie'
							value={'Vie'}
							defaultChecked={dataUpdate?.weekdays.includes('Vie')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Vie'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Vie
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Sab'
							value={'Sab'}
							defaultChecked={dataUpdate?.weekdays.includes('Sab')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Sab'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Sab
						</label>
					</li>
					<li>
						<input
							type='checkbox'
							name='weekdays'
							min={0}
							id='Dom'
							value={'Dom'}
							defaultChecked={dataUpdate?.weekdays.includes('Dom')}
							className='hidden peer'
							placeholder=' '
							onChange={handleChangeDays}
						/>
						<label
							htmlFor='Dom'
							className='bg-cyan-200 p-1 px-2 rounded-lg font-bold opacity-60 hover:bg-cyan-300 ring-2 ring-cyan-300 peer-checked:ring-sky-700 peer-checked:opacity-100'
						>
							Dom
						</label>
					</li>
				</ul>
				<div className='flex flex-col min-500:flex-row min-500:justify-between gap-8'>
					<div className='relative z-0 w-full '>
						<input
							type='time'
							name='from'
							id='from'
							step={300}
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.from}
							onChange={handleChange}
						/>
						<label
							htmlFor='from'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Desde
						</label>
					</div>
					<div className='relative z-0 w-full '>
						<input
							type='time'
							name='to'
							id='to'
							step={300}
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							value={workspace.to}
							onChange={handleChange}
						/>
						<label
							htmlFor='to'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Hasta
						</label>
					</div>
				</div>

				<div className='flex justify-between items-center'>
					<button
						className='mx-auto bg-cyan-700 text-sky-50 py-1 px-5 rounded-lg hover:scale-110 disabled:opacity-50 disabled:scale-100'
						disabled={loading}
					>
						Crear
					</button>
					<button
						className='mx-auto bg-rose-600 text-sky-50 py-1 px-5 rounded-lg hover:scale-110 disabled:opacity-50 disabled:scale-100'
						disabled={loading}
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

FormWorkspace.propTypes = {
	setShowForm: PropTypes.func.isRequired,
	dataUpdate: PropTypes.object
}

export default FormWorkspace
