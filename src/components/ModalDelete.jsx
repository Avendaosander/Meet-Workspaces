import PropTypes from 'prop-types'

function ModalDelete({ setModalDelete, peticion, id }) {
   const handleConfirm = () => {
      peticion(id)
      setModalDelete()
   }
   return (
      <section className='fixed z-10 bottom-0 right-0 left-0 top-0 bg-black/50 flex justify-center items-center p-5'>
         <article className='flex flex-col gap-5 p-5 bg-sky-200 shadow-cards rounded-xl mx-auto text-lg'>
            <h2 className='font-bold text-xl text-blue-950'>
               Estas seguro que quieres eliminarlo?
            </h2>
            <div className="flex justify-around text-sky-50">
               <button
                  onClick={handleConfirm}
                  className='bg-cyan-700 m-auto px-6 rounded-md col-span-1'
               >
                  Si
               </button>
               <button
                  onClick={() => setModalDelete(false)}
                  className='bg-rose-500 m-auto px-6 rounded-md col-span-1'
               >
                  Cancelar
               </button>
            </div>
         </article>
      </section>
   )
}

ModalDelete.propTypes = {
   setModalDelete: PropTypes.func.isRequired,
   peticion: PropTypes.func.isRequired,
   id: PropTypes.string.isRequired
}
export default ModalDelete