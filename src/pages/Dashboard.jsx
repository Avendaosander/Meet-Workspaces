import { useState } from 'react'
import DashWorkspaces from '../components/DashWorkspaces'
import Nav from '../components/Nav'
import NavDash from '../components/NavDash'
import Footer from '../components/Footer'
import DashUser from '../components/DashUser'

function Dashboard() {
	const [dashboard, setDashboard] = useState('workspaces')
	return (
		<div className='min-h-screen relative'>
			<Nav/>
			<NavDash dashboard={dashboard} setDashboard={setDashboard}/>
			{dashboard === 'workspaces' ? (
				<DashWorkspaces/>
			) : (
				<DashUser/>
			)}
			<Footer/>
		</div>
	)
}

export default Dashboard