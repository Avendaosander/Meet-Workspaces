import { BsFillCalendarWeekFill, BsFillPeopleFill, BsPencilSquare, BsTrash3Fill } from 'react-icons/bs'
import { sortDays, truncatedText } from '../logic/funciones'
import PropTypes from 'prop-types'
import { FaLocationDot } from 'react-icons/fa6'
import { useState } from 'react'
import ModalDelete from './ModalDelete'
import FormWorkspace from './FormWorkspace'
import { BiSolidTimeFive } from 'react-icons/bi'
import { DELETE_WORKSPACE, GET_WORKSPACES } from '../graphql/workspaces'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import TooltipCustom from './TooltipCustom'
import { toastSuccess } from '../utils/toasts'

function CardWorkspace({ data }) {
	const {t} = useTranslation(['cardWorkspace'])
   const [modalEdit, setModalEdit] = useState(false)
   const [modalDelete, setModalDelete] = useState(false)
   const [deleteWorkspace, { data: dataDelete, loading, error, reset }] = useMutation(DELETE_WORKSPACE, {
		refetchQueries: [
			GET_WORKSPACES,
			'GetWorkspaces'
		]
	})

   const precio = data.price === 0 ? `${t('text_price')}` : `$${data.price}`
   
   const dias = sortDays(data.weekdays)

   if (dataDelete) {
      setModalDelete(false)
      toastSuccess(`${t('delete_success')}`)
      reset()
   }

   return (
      <>
         <article className='flex flex-col gap-5 p-5 bg-cyan-100 shadow-cards text-blue-950 rounded-xl max-w-[400px] w-full mx-auto text-sm sm:text-base md:text-lg'>
            <h3 className='font-bold text-xl text-center'>{data.title}</h3>
            <p className='font-medium break-words'>{truncatedText(data.description)}</p>
            
            <div className="flex items-center justify-center gap-2">
               <BsFillPeopleFill className='min-w-[14px]'/>
               <p className='font-medium'>Max. {data.capacity} {t('max_people')}</p>
            </div>
            <div className="flex items-center justify-center font-semibold gap-2">
               <FaLocationDot className='min-w-[14px]'/>
               <p>{data.address}</p>
            </div>
            <div className='flex justify-around'>
               <strong className='text-blue-950/50'>{data.lat}</strong>
               <strong className='text-blue-950/50'>{data.lon}</strong>
            </div>
            <article className='flex flex-col gap-2 justify-center items-center'>
               <div className="flex items-center gap-2">
                  <BsFillCalendarWeekFill/>
                  <p className='font-medium'>{dias.join(' - ')}</p>
               </div>
               <div className="flex items-center gap-2">
                  <BiSolidTimeFive/>
                  <p className='font-medium'>{data.from} - {data.to}</p>
               </div>
            </article>
            <p className={`${data.price === 0 ? 'font-bold italic text-lg md:text-2xl text-center text-green-600' : 'font-bold text-center'}`}>{precio}</p>
            
            <div className='flex justify-evenly'>
               <button
                  className='relative group text-cyan-700 text-2xl px-6 rounded-md'
                  onClick={() => setModalEdit(true)}
               >
                  <BsPencilSquare className='hover:scale-125 group-disabled:opacity-50 text-2xl text-green-700' />
                  <TooltipCustom position='buttom'>
                     {t('button_edit')}
                  </TooltipCustom>
               </button>
               <button
                  className='relative group text-cyan-700 text-2xl px-6 rounded-md'
                  onClick={() => setModalDelete(true)}
               >
                  <BsTrash3Fill className='hover:scale-125 group-disabled:opacity-50 text-2xl text-rose-600' />
                  <TooltipCustom position='buttom'>
                     {t('button_delete')}
                  </TooltipCustom>
               </button>
            </div>
         </article>
         {modalDelete && (
            <ModalDelete setModalDelete={setModalDelete} peticion={deleteWorkspace} id={data._id} actions={{ loading, error, reset }}/>
         )}
         {modalEdit && (
            <FormWorkspace setShowForm={setModalEdit} dataUpdate={data}/>
         )}
      </>
   )
}

CardWorkspace.propTypes = {
   data: PropTypes.object.isRequired
}

export default CardWorkspace