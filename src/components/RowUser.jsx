import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { BsPencilSquare, BsTrash3Fill } from 'react-icons/bs'
import { DELETE_USER, GET_USERS } from '../graphql/users'
import RowUserEdit from './RowUserEdit'
import ModalDelete from './ModalDelete'
import PropTypes from 'prop-types'

function RowUser({ user }) {
   const [modalDelete, setModalDelete] = useState(false)
   const [editing, setEditing] = useState(false)
   const [deleteUser] = useMutation(DELETE_USER, {
		refetchQueries: [
			GET_USERS,
			'GetUsers'
		]
	})

   return (
      <>
         {editing ? (
            <RowUserEdit user={user} setEditing={setEditing}/>
         ) : (
            <article className='w-full bg-cyan-100 text-blue-950 shadow-cards grid sm:grid-cols-[auto,auto,auto,auto] lg:grid-cols-4 justify-items-center gap-5 p-5 rounded-xl font-Poppins box-border'>
               <strong className='py-1 break-all'>@{user.username}</strong>
               <p className='font-medium py-1 break-all'>{user.email}</p>
               <p className='font-semibold py-1'>{user.rol}</p>
               <div className='flex items-center gap-10 sm:gap-5 md:gap-10 py-1'>
                  <button className='relative group/workspace' onClick={() => setEditing(true)}>
                     <BsPencilSquare className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-sky-700'/>
                     <span className="hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300">
                        Editar
                     </span>
                  </button>
                  <button className='relative group/workspace' onClick={() => setModalDelete(true)}>
                     <BsTrash3Fill className='hover:scale-125 group-disabled/workspace:opacity-50 text-2xl text-rose-600'/>
                     <span className="hidden group-hover/workspace:block bg-blue-950 text-sky-50 text-sm rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2 translate-y-4 transition-opacity duration-300">
                        Eliminar
                     </span>
                  </button>
               </div>
            </article>
         )}
         {modalDelete && (
            <ModalDelete setModalDelete={setModalDelete} peticion={deleteUser} id={user._id}/>
         )}
      </>
   )
}

RowUser.propTypes = {
   user: PropTypes.object.isRequired,
}

export default RowUser