import { BsPencilSquare, BsTrash3Fill } from 'react-icons/bs'
import { truncatedText } from '../logic/funciones'
import PropTypes from 'prop-types'
import { FaLocationDot } from 'react-icons/fa6'
import { useState } from 'react'
import ModalDelete from './ModalDelete'
import FormReservation from './FormReservation'

function CardWorkspace({ data }) {
   const [modalEdit, setModalEdit] = useState(false)
   const [modalDelete, setModalDelete] = useState(false)
   const precio = data.price === 0 ? 'FREE' : `$${data.price}`
   
   return (
      <>
         <article className='flex flex-col gap-5 p-5 bg-cyan-100 shadow-cards text-blue-950 rounded-xl max-w-[300px] w-full mx-auto text-sm sm:text-base md:text-lg'>
            <h3 className='font-bold text-xl text-center'>{data.title}</h3>
            <p className='font-medium break-words'>{truncatedText(data.description)}</p>
            <div className="flex items-center justify-center font-semibold gap-2">
               <FaLocationDot className='min-w-[14px]'/>
               <p>{data.address}</p>
            </div>
            <div className='flex justify-around'>
               <strong className='text-blue-950/50'>{data.lat}</strong>
               <strong className='text-blue-950/50'>{data.lon}</strong>
            </div>
            <p className={`${precio === 'FREE' ? 'font-bold italic text-lg md:text-2xl text-center text-green-600' : 'font-bold text-center'}`}>{precio}</p>
            
            <div className='flex justify-evenly'>
               <button
                  className='relative group/workspace text-cyan-700 text-2xl px-6 rounded-md'
                  onClick={() => setModalEdit(true)}
               >
                  <BsPencilSquare className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-green-700' />
                  <span className='hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300'>
                     Editar
                  </span>
               </button>
               <button
                  className='relative group/workspace text-cyan-700 text-2xl px-6 rounded-md'
                  onClick={() => setModalDelete(true)}
               >
                  <BsTrash3Fill className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-rose-600' />
                  <span className='hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300'>
                     Eliminar
                  </span>
               </button>
            </div>
         </article>
         {modalDelete && (
            <ModalDelete setModalDelete={setModalDelete} id={data._id}/>
         )}
         {modalEdit && (
            <FormReservation setShowForm={setModalEdit} id={data._id}/>
         )}
      </>
   )
}

CardWorkspace.propTypes = {
   data: PropTypes.object.isRequired
}

export default CardWorkspace