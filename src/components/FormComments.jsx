import { useMutation } from '@apollo/client'
import { toastError, toastSuccess } from '../utils/toasts'
import { CREATE_COMMENT } from '../graphql/comments'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function FormComments({ id }) {
	const {t} = useTranslation(['formComments'])
	const [createComment, { loading, data, error, reset }] = useMutation(
		CREATE_COMMENT,
		{
			refetchQueries: ['GetWorkspace']
		}
	)
	const [content, setContent] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (content === '') {
			return toastError(`${t('msg_error')}`)
		}
		createComment({
			variables: {
				workspace: id,
				content
			}
		})
		setContent('')
	}

	if (error?.message) {
		toastError(error?.message)
		reset()
	}

	if (data?.createComment) {
		toastSuccess(`${t('msg_success_create')}`)
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-end gap-2'
		>
			<textarea
				name='content'
				id='content'
				value={content}
				onChange={e => {
					setContent(e.target.value)
				}}
				placeholder={t('placeholder_text')}
				className='bg-cyan-200 w-full h-20 p-2 ring-1 ring-sky-700 outline-none focus:ring-2 placeholder:text-blue-950/70 rounded-lg resize-none'
			></textarea>
			<button
				disabled={loading}
				className='bg-cyan-700 px-10 py-1 rounded-xl text-sky-50 mx-auto md:mx-0 disabled:opacity-50'
			>
				{t('button_create')}
			</button>
		</form>
	)
}

FormComments.propTypes = {
	id: PropTypes.string.isRequired
}

export default FormComments
