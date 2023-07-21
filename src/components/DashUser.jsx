import RowUser from "./RowUser"

const users = [
	{
		_id: '64b5a5ee5760521fe1e46836',
		username: 'MeetAdmin',
		email: 'meet@gmail.com',
		password: '$2a$10$RyUxOS5cpXWDG7o.cwwQyu70PNnzt7zULpPzTJVBKqkmkSPOJNL1.',
		rol: 'Admin'
	},
	{
		_id: '64b5a8d7ee9d5d98ba7fe3ae',
		username: 'Sander',
		email: 'avendano.dev@gmail.com',
		password: '$2a$10$16AbG.bMkFbacZtQvmwQ4Ox9s7eiFWk57WTYrToWtAjuuYY4GMgG6',
		rol: 'User'
	},
	{
		_id: '64b6ab189cef69667a6853a5',
		username: 'Avendaonsader',
		email: 'avendano.ramirez@gmail.com',
		password: '$2a$10$PfRq1DTFg63VU2DgsfFTQul9awp.6bKO1ySXjbFWdK8yk.smKRFi2',
		rol: 'User'
	}
]

function DashUser() {
	return (
		<main className='flex flex-col py-5 gap-5 pb-96 md:pb-80 min-900:pb-72 lg:pb-60'>
			<h1 className='text-2xl sm:text-3xl text-center font-bold'>
				Usuarios
			</h1>
			<section className='flex flex-col justify-items-center px-10 md:px-20 gap-10'>
				{users.length === 0 ? (
					<strong className="text-center text-lg">No hay usuarios para mostrar</strong>
				) : (
					users.map(user => (
						<RowUser
							key={user._id}
							user={user}
						/>
					))
				)}
			</section>
		</main>
	)
}

export default DashUser
