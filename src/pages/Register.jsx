import { Link } from 'react-router-dom'
import LOGO from '../assets/Logo-Home.webp'
import FormRegister from '../components/FormRegister'
import { useTranslation } from 'react-i18next'

function Register() {
	const {t} = useTranslation(['register'])
	return (
		<main className='min-h-screen flex justify-center items-center px-10 py-5'>
			<Link to={'/'}>
				<img
					src={LOGO}
					alt='Logo Meet Workspace'
					className='fixed top-5 left-5 w-[50px] h-[50px] aspect-square hover:scale-110'
				/>
			</Link>
			<section className='bg-cyan-100 shadow-cards min-500:max-w-[500px] min-900:max-w-4xl flex flex-col min-900:flex-row gap-5 min-900:gap-10 text-blue-950 py-10 min-900:py-0 min-900:px-10 rounded-xl'>
				<div className='flex flex-col gap-5 min-900:py-10 pb-5 justify-center flex-1'>
					<img
						src={LOGO}
						alt='Logo Meet Workspace'
						className='hidden min-500:block w-24 min-900:w-32 aspect-square mx-auto'
					/>
					<p className='text-center min-500:text-lg font-semibold px-5 min-500:px-10'>
						{t('text')}
					</p>
				</div>
				<div className="h-[1px] min-900:h-auto min-900:w-px border-0 bg-blue-950"/>
				<FormRegister />
			</section>
		</main>
	)
}

export default Register