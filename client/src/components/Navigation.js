import { Link, useLocation } from "react-router-dom"
import StateFilter from "./StateFilter"
import logo from "../assets/imgs/logo.png"
import Auth from '../utils/auth'

export default function NavBar({ state, newState }) {
    const location = useLocation()

    return (
        <nav className="w-screen flex justify-between shadow-lg" style={{ height: '10vh', backgroundColor: '#a2a2a275' }}>
            <div className="md:w-48 w-40 h-full flex justify-center items-center">
                <Link to={"/"} className="h-5/6 w-1/2" style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></Link>
            </div>
            <div className=" md:w-48 w-40 h-full flex justify-center items-center">
                {location.pathname === '/' && (
                    <StateFilter state={state} newState={newState} />
                )}
            </div>

            <div className=" md:w-48 w-40 h-full flex justify-center items-center">
                {Auth.loggedIn() ? <a href="/" className="text-2xl font-extrabold hover:text-gray-800" onClick={() => Auth.logout()}>Log Out</a> :
                    <Link to={"/login"} className="text-2xl font-extrabold hover:text-gray-800">Login</Link>}
            </div>
        </nav>
    )
}