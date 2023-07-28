import { toast } from 'react-hot-toast'

export const toastSuccess = (text) => {
	return toast.success(text, {
		style: {
			backgroundColor: '#ecfeff',
			border: '1px solid #0369a1',
			padding: '16px',
			fontWeight: '700',
			color: '#082f49',
		},
		iconTheme: {
			primary: '#22c55e',
		},
	})
}

export const toastError = (text) => {
	return toast.error(text, {
      position: 'top-right',
      duration: 1500,
		style: {
			backgroundColor: '#ecfeff',
			border: '1px solid #e11d48',
			padding: '16px',
			fontWeight: '700',
			color: '#e11d48',
		},
		iconTheme: {
			primary: '#e11d48',
		},
	})
}

export const toastCustom = (text, icon, position = 'bottom-right') => {
	return toast(text, {
		icon,
		duration: 1500,
		style: {
			backgroundColor: '#ecfeff',
			border: '1px solid #0369a1',
			padding: '16px',
			fontWeight: '700',
			color: '#082f49',
		},
		position
	});
}