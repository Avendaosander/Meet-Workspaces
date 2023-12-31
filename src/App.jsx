import { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import { Toaster } from "react-hot-toast";
import ProtectedRouter from "./components/ProtectedRouter";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Dashboard from "./pages/Dashboard";
import VerifyRouter from "./components/VerifyRouter";

function App() {
   const { user } = useContext(UserContext)
	return (
		<Suspense fallback={'Cargando traducciones'}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage/>}/>
					<Route element={<VerifyRouter hasUser={!!user}/>}>
						<Route path="/login" element={<Login/>}/>
						<Route path="/register" element={<Register/>}/>
					</Route>
					<Route element={<ProtectedRouter isAllowed={!!user}/>}>
						<Route path="/workspaces" element={<Home/>}/>
						<Route path="/reservations" element={<Reservations/>}/>
					</Route>
					<Route element={<ProtectedRouter isAllowed={user?.rol === 'Admin'} redirectTo="/"/>}>
						<Route path="/dashboard" element={<Dashboard/>}/>
					</Route>
				</Routes>
				<Toaster
					position="bottom-right"
					reverseOrder={false}
				/>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
