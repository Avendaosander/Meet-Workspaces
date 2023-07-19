import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import ProtectedRouter from "./components/ProtectedRouter";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Dashboard from "./pages/Dashboard";

function App() {
   const { user } = useContext(UserContext)
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/register" element={<Register/>}/>
						<Route path="/workspaces" element={<Home/>}/>
						<Route path="/reservations" element={<Reservations/>}/>
					{/* <Route element={<ProtectedRouter isAllowed={!!user}/>}> */}
					{/* </Route> */}
					<Route element={<ProtectedRouter isAllowed={!!user && user.rol === 'Admin'}/>}>
						<Route path="/dashboard" element={<Dashboard/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
