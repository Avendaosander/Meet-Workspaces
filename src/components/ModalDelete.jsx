import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { toastError } from '../utils/toasts'

function ModalDelete({ setModalDelete, peticion, id, actions }) {
   const { loading, error, reset } = actions
	const {t} = useTranslation(['modalDelete'])
   const handleConfirm = () => {
      peticion({
         variables: { id }
      })
   }

   if (error?.message) {
      toastError(error.message)
      reset()
   }
   
   return (
      <section className='fixed z-10 bottom-0 right-0 left-0 top-0 bg-black/50 flex justify-center items-center p-5'>
         <article className='flex flex-col gap-5 p-5 bg-sky-200 shadow-cards rounded-xl mx-auto text-lg'>
            <h2 className='font-bold text-xl text-blue-950'>
               {t('title')}
            </h2>
            <div className="flex justify-around text-sky-50">
               <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className='bg-cyan-700 m-auto px-6 rounded-md col-span-1 disabled:opacity-50'
               >
                  {t('button_confirm')}
               </button>
               <button
                  onClick={() => setModalDelete(false)}
                  disabled={loading}
                  className='bg-rose-500 m-auto px-6 rounded-md col-span-1 disabled:opacity-50'
               >
                  {t('button_cancel')}
               </button>
            </div>
         </article>
      </section>
   )
}

ModalDelete.propTypes = {
   setModalDelete: PropTypes.func.isRequired,
   peticion: PropTypes.func.isRequired,
   id: PropTypes.string.isRequired,
   actions: PropTypes.object.isRequired
}
export default ModalDelete