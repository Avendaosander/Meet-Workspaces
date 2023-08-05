import Header from '../components/Header'
import Nav from '../components/Nav'
import imageMap from '../assets/Maps.jpg'
import imageHall from '../assets/Sala-conferencias.jpg'
import imageTeam from '../assets/Equipo.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function Homepage() {
	const {t} = useTranslation(['homepage'])
	return (
		<>
			<Nav/>
			<Header/>
			<main className='flex flex-col gap-10'>
				<section className="bg-home-section bg-cover bg-center h-80 md:h-[400px] flex items-center">
					<div className="bg-black/50 backdrop:blur-sm flex justify-center items-center h-full w-full">
						<p className="text-sky-50 sm:text-xl lg:text-2xl font-medium text-center p-8 max-w-[75ch]">{t('text_div')}</p>
					</div>
				</section>
				<article className='flex flex-col lg:flex-row items-center gap-10 text-blue-950 px-5'>
					<img src={imageMap} alt="Mano sosteniendo movil con google Maps" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium'>{t('article_1')}</p>
				</article>
				<article className='flex flex-col lg:flex-row-reverse items-center gap-10 text-blue-950 px-5'>
					<img src={imageHall} alt="Sala de Conferencias" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium'>{t('article_2')}</p>
				</article>
				<article className='flex flex-col lg:flex-row items-center gap-10 text-blue-950 px-5'>
					<img src={imageTeam} alt="Grupo trabajando en oficina" className='w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[300px] object-cover aspect-video rounded-2xl'/>
					<p className='text-center text-lg md:text-xl max-w-[60ch] font-medium break-words'>{t('article_3')}</p>
				</article>
				<section className='bg-cyan-200 flex justify-center items-center py-5'>
					<Link to={'/register'} className='bg-cyan-700 text-sky-50 py-1 px-4 text-xl min-900:text-2xl font-semibold rounded-lg hover:scale-110'>{t('text_link')}</Link>
				</section>
				<article className='flex flex-col items-center gap-10 text-blue-950 px-5 pb-10'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-2xl'>
						{t('article_4')}
					</h2>
				</article>
			</main>
			<Footer/>
		</>
	)
}

export default Homepage
