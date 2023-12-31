import { useTranslation } from 'react-i18next'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

function Footer() {
	const {t} = useTranslation(['footer'])
   const {pathname} = useLocation()
   const pinUp = pathname === '/reservations' || pathname === '/dashboard'
	return (
		<footer className={`${pinUp && 'absolute bottom-0'} grid md:grid-cols-2 lg:grid-cols-3 bg-sky-700 text-sky-50 text-center gap-10 p-5 md:p-10 w-full place-items-center`}>
			<section className='md:row-start-1 lg:row-auto flex flex-col gap-5'>
				<strong className='text-xl'>Meet Workspace</strong>
				<p className='text-lg'>{t('copyright_text')} © 2023</p>
			</section>
			<section className='md:col-span-2 lg:col-span-1 flex justify-center items-center text-4xl gap-10'>
            <BsTwitter className='hover:scale-125'/>
            <BsInstagram className='hover:scale-125'/>
            <BsFacebook className='hover:scale-125'/>
            <a href="http://github.com/Avendaosander/Meet-Workspaces" aria-label='Mira el repositorio del proyecto' target="_blank" rel="noopener noreferrer">
               <BsGithub className='hover:scale-125'/>
            </a>
         </section>
			<section className='md:row-start-1 lg:row-auto flex flex-col gap-5'>
            <strong className='text-xl'>{t('title_developers')}</strong>
            <div className='flex flex-col gap-1'>
               <a href='https://github.com/avendaosander' target='_blank' rel="noopener noreferrer" className='text-lg hover:scale-110'>Alexander Avendaño</a>
               <a href='https://github.com/alejo2608' target='_blank' rel="noopener noreferrer" className='text-lg hover:scale-110'>Eutimio Briceño</a>
            </div>
         </section>
		</footer>
	)
}

export default Footer
