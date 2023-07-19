import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

function Footer() {
   const {pathname} = useLocation()
   const pinUp = pathname === '/reservations' || pathname === '/dashboard'
	return (
		<footer className={`${pinUp && 'absolute bottom-0'} grid bg-sky-700 text-sky-50 text-center gap-10 p-5 w-full`}>
			<section className='flex flex-col gap-5'>
				<strong className='text-xl'>Meet Workspace</strong>
				<p className='text-lg'>Todos los derechos reservados © 2023</p>
			</section>
			<section className='flex justify-center items-center text-4xl gap-10'>
            <BsTwitter className='hover:scale-125'/>
            <BsInstagram className='hover:scale-125'/>
            <BsFacebook className='hover:scale-125'/>
            <a href="http://github.com/Avendaosander/Meet-Workspaces" target="_blank" rel="noopener noreferrer">
               <BsGithub className='hover:scale-125'/>
            </a>
         </section>
			<section className='flex flex-col gap-5'>
            <strong className='text-xl'>Desarrollador</strong>
            <p className='text-lg'>Alexander Avendaño</p>
         </section>
		</footer>
	)
}

export default Footer
