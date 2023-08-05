import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function Header() {
	const {t} = useTranslation(['header'])
	return (
		<header className='bg-cyan-100 h-96 flex flex-col justify-center items-center p-10 gap-10'>
			<h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-blue-950 font-bold max-w-2xl">{t('text_h1')}</h1>
			<Link to={'/workspaces'} className="bg-cyan-700 text-sky-50 sm:text-xl min-900:text-2xl font-semibold py-1 px-5 rounded-lg hover:scale-110">{t('text_link')}</Link>
		</header>
	)
}

export default Header
