import { useState } from 'react';
import CardReservation from '../components/CardReservations'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { GET_RESERVATIONS } from '../graphql/reservations';
import { useQuery } from '@apollo/client';

function Reservations() {
	const {loading, error, data} = useQuery(GET_RESERVATIONS);
	console.log(data)
	return (
		<div className='relative min-h-screen'>
			<Nav />
			<main className='flex flex-col py-5 gap-5 pb-96'>
				<h1 className='text-2xl sm:text-3xl text-center font-bold'>
					Mis reservas
				</h1>
				{
					loading? (
						<div className="ca">
							<h1>Cargando</h1>
						</div>
					):
					<section className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-items-center px-10 gap-10'>
						{
							data?.getReservations.map(reser=>(
								<CardReservation 
									data={reser}
									key={reser._id}
								/>
							))
						}
					</section>
				}	
			</main>
			<Footer />
		</div>
	)
}

export default Reservations
