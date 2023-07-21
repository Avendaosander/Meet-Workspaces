import PropTypes from 'prop-types'
import { useState } from 'react'

function FormWorkspace({ setShowForm }) {
	const [weekdays, setWeekdays] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(weekdays)
	}
	const handleChangeDays = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setWeekdays([...weekdays, value]);
		} else {
			setWeekdays(weekdays.filter(day => day !== value));
		}
	}
	return (
		<article className='fixed top-0 h-screen w-full bg-black/50 z-10 p-5 md:p-0 flex justify-center items-center font-Poppins text-blue-950 overflow-auto'>
			<form className='flex flex-col gap-8 px-5 my-auto bg-cyan-100 py-10 rounded-xl ring-2 ring-sky-700 w-[300px] min-500:w-[500px]' onSubmit={handleSubmit}>
				<h2 className='text-center text-2xl font-bold'>Espacio de trabajo</h2>
				<div className='relative z-0 w-full '>
					<input
						type='text'
						name='title'
						id='title'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						required
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
						required
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
						name='direction'
						id='direction'
						className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
						placeholder=' '
						required
					/>
					<label
						htmlFor='direction'
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
                     required
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
                     required
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
							required
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
							required
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
							name='hour'
							id='hour'
							step={300}
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='hour'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Desde
						</label>
					</div>
					<div className='relative z-0 w-full '>
						<input
							type='time'
							name='hour'
							id='hour'
							step={300}
							className='block py-2 w-full text-blue-950 bg-cyan-200 ring-1 ring-cyan-700/30 rounded-lg px-2 focus:outline-none focus:ring-0 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='hour'
							className='absolute text-blue-950 duration-300 transform -translate-y-8 scale-75 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:left-2 peer-focus:scale-75 peer-focus:-translate-y-7'
						>
							Hasta
						</label>
					</div>
            </div>
				
				<div className='flex justify-between items-center'>
					<button className='mx-auto bg-cyan-700 text-sky-50 py-1 px-5 rounded-lg hover:scale-110'>
						Crear
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

FormWorkspace.propTypes = {
   setShowForm: PropTypes.func.isRequired
}

export default FormWorkspace