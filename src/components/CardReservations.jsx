import PropTypes from 'prop-types'
import { useState } from 'react'
import { BiSolidTimeFive, BiSolidTimer } from 'react-icons/bi'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FaLocationDot, FaMoneyBill1Wave } from 'react-icons/fa6'
import ModalDelete from './ModalDelete'

function CardReservation({ data }) {
   const [modalDelete, setModalDelete] = useState(false)

   const precio = data.price === 0 ? 'FREE' : `$${data.price}`

   return (
      <>
         <article className='flex flex-col gap-3 p-5 bg-cyan-100 shadow-cards rounded-xl max-w-[400px] w-full mx-auto text-sm sm:text-base md:text-lg font-medium text-blue-950 font-Poppins'>
            <h3 className='font-bold text-center text-xl'>{data.workspace.title}</h3>
            <div className="flex items-center gap-2">
               <FaUserAlt className='sm:min-w-[18px]'/>
               <p>{data.user.username}</p>
            </div>
            <div className="flex items-center gap-2">
               <FaLocationDot className='min-w-[14px]'/>
               <p>{data.workspace.address}</p>
            </div>
            <div className="flex items-center gap-2">
               <BsFillCalendarWeekFill/>
               <p>{data.date}</p>
            </div>
            <div className="flex items-center gap-2">
               <BiSolidTimeFive/>
               <p>{data.hour}</p>
            </div>
            <div className="flex items-center gap-2">
               <BiSolidTimer/>
               <p>{data.duration} min</p>
            </div>
            <div className="flex items-center gap-2">
               <FaMoneyBill1Wave/>
               <p className={`${precio === 'FREE' ? 'font-bold italic text-lg md:text-2xl text-green-600' : 'font-bold'}`}>{precio}</p>
            </div>
            <div className='flex justify-around'>
               <button
                  onClick={() => setModalDelete(true)}
                  disabled={modalDelete}
                  className='bg-rose-600 text-sky-50 px-6 rounded-md disabled:opacity-50'
               >
                  Cancelar
               </button>
            </div>
         </article>
         {modalDelete && (
            <ModalDelete setModalDelete={setModalDelete} id={data._id}/>
         )}
      </>
   )
}

CardReservation.propTypes = {
   data: PropTypes.object.isRequired
}

export default CardReservation