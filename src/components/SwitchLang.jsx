import { useContext } from 'react'
import FLAG_SPAIN from '../assets/espana.jpg'
import FLAG_USA from '../assets/estados-unidos.jpg'
import { LanguageContext } from '../context/languageContext'

const SwitchLang = () => {
	const { language, setLanguage } = useContext(LanguageContext)

	const toggleLang = e => {
		if (e.target.checked) {
         localStorage.setItem('Language', JSON.stringify('en'))
			setLanguage('en')
		} else {
         localStorage.setItem('Language', JSON.stringify('es'))
			setLanguage('es')
		}
	}

	return (
		<div className='flex items-center'>
			<label
				htmlFor='admin-switch'
				className='flex items-center cursor-pointer'
			>
				<div className='relative'>
					<input
						id='admin-switch'
						type='checkbox'
						className='hidden'
						defaultChecked={language === 'en'}
						onChange={toggleLang}
					/>
					<div className={`absolute`}>
						{language === 'es' ? (
							<img
								src={FLAG_SPAIN}
								alt='Bandera España'
								className='h-4 sm:h-5 w-4 sm:w-5 aspect-square'
							/>
						) : (
							<img
								src={FLAG_USA}
								alt='Bandera EE.UU'
								className='h-4 sm:h-5 w-4 sm:w-5 aspect-square'
							/>
						)}
					</div>
					<div
						className={`h-4 w-4 sm:w-5 sm:h-5 rounded-full`}
					></div>
				</div>
			</label>
		</div>
	)
}

export default SwitchLang
