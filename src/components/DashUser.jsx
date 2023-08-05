import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/users";
import { toastError } from "../utils/toasts";
import RowUser from "./RowUser"
import LoaderDashUsers from "./LoaderDashUsers";
import { useTranslation } from "react-i18next";


function DashUser() {
	const {t} = useTranslation(['dashUsers'])
	const { loading, error, data } = useQuery(GET_USERS);
	
	if (error?.message) {
		toastError(error?.message)
	}

	return (
		<main className='flex flex-col py-5 gap-5 pb-96 md:pb-80 min-900:pb-72 lg:pb-60'>
			<h1 className='text-2xl sm:text-3xl text-center font-bold'>
				{t('title')}
			</h1>
			{loading ? (
				<LoaderDashUsers/>
			) : (
				<section className='flex flex-col justify-items-center px-10 md:px-20 gap-10'>
					{data?.getUsers.length === 0 ? (
						<strong className="text-center text-lg">{t('not_data')}</strong>
					) : (
						data?.getUsers.map(user => (
							<RowUser
								key={user._id}
								user={user}
							/>
						))
					)}
				</section>
			)}
		</main>
	)
}

export default DashUser
