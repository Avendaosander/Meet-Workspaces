import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useMutation } from '@apollo/client'
import { DELETE_COMMENT } from '../graphql/comments'
import { VscClose } from 'react-icons/vsc'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { decodeToken } from 'react-jwt'
import ModalDelete from './ModalDelete'
import PropTypes from 'prop-types'
import { toastSuccess } from '../utils/toasts'
import { useTranslation } from 'react-i18next'

const CarouselComments = ({ comments }) => {
	const {t} = useTranslation(['comments'])
   const { user } = useContext(UserContext)
   const [currentIndex, setCurrentIndex] = useState(0)
   const [deleteItem, setDeleteItem] = useState(null)
   const [modalDelete, setModalDelete] = useState(false)
   const userID = decodeToken(user.token).id

   const [deleteComment, { data: dataDelete, loading, error, reset }] = useMutation(DELETE_COMMENT, {
		refetchQueries: ['GetWorkspace']
	})

   const hasDeleteCondition = (commentUserID) => {
      return user.rol === 'Admin' || userID === commentUserID
   }

   const handleModalDelete = (data) => {
      setDeleteItem(data)
      setModalDelete(!modalDelete)
   }
   

   const handlePrev = () => {
      setCurrentIndex(prevIndex =>
         prevIndex === 0 ? comments.length - 1 : prevIndex - 1
      )
   }

   const handleNext = () => {
      setCurrentIndex(prevIndex =>
         prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      )
   }

   if (dataDelete) {
      setModalDelete(false)
      toastSuccess(`${t('delete_success')}`)
      toastSuccess('Comentario eliminado')
      reset()
   }
   
   return (
      <>
         {comments.length > 0 && (
            <article className='mx-auto sm:h-[200px] md:h-auto grid grid-cols-2 sm:grid-cols-6 max-sm:grid-rows-[auto,1,auto] md:grid-cols-2 md:grid-rows-[auto,auto] items-center gap-5 font-Laila'>
               <button
                  className={`h-auto sm:col-start-1 md:col-start-1 w-full flex justify-center items-center p-1 sm:p-5 md:p-1 text-2xl bg-cyan-200 rounded-lg hover:scale-105 hover:bg-cyan-500/50 hover:text-gray-700 ${comments.length === 1 && 'opacity-0 pointer-events-none'}`}
                  onClick={handlePrev}
               >
                  <BsChevronCompactLeft/>
               </button>
               <div className='max-sm:row-start-1 md:row-start-1 col-span-2 sm:col-span-4 md:col-span-2 relative flex flex-col gap-5 py-5 px-10 sm:w-[400px] md:w-auto md:max-w-[400px] text-left bg-cyan-200/50 ring-1 ring-cyan-700 rounded-r-xl rounded-bl-xl'>
                  {comments.map((comment, index) => (
                     <div
                        key={comment._id}
                        className={`w-full h-full transition-opacity duration-300 ${
                           index === currentIndex ? 'block' : 'hidden'
                        }`}
                     >
                           <p className="text-lg">
                              <strong>@{comment.user.username}</strong>
                           </p>
                           <p className='font-medium'>{comment.content}</p>
                           {hasDeleteCondition(comment.user._id) && 
                              <button className="absolute top-2 right-2 text-lg text-rose-600" onClick={() => handleModalDelete(comment._id)}>
                                 <VscClose className=''/>
                              </button>
                           }
                     </div>
                  ))}
               </div>
               <button
                  className={`h-auto sm:col-span-1 md:col-span-1 w-full flex justify-center items-center p-1 sm:p-5 md:p-1 text-2xl bg-cyan-200 rounded-lg hover:scale-105 hover:bg-cyan-500/50 hover:text-gray-700 ${comments.length === 1 && 'opacity-0 pointer-events-none'}`}
                  onClick={handleNext}
               >
                  <BsChevronCompactRight/>
               </button>
            </article>
         )}
         {modalDelete && 
            <ModalDelete setModalDelete={setModalDelete} id={deleteItem} peticion={deleteComment} actions={{ loading, error, reset }}/>
         }
      </>
   )
}

CarouselComments.propTypes = {
   comments: PropTypes.array.isRequired
}

export default CarouselComments