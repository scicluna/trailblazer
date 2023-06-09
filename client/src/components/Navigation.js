import { Link, useLocation } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { QUERY_ME } from "../utils/queries"
import StateFilter from "./StateFilter"
import logo from "../assets/imgs/logo.png"
import Auth from '../utils/auth'
import { useEffect, useState } from "react"

export default function NavBar({ state, newState }) {
    const location = useLocation()

    const { data } = useQuery(QUERY_ME);
    let user;
    if (data) {
        user = data.me;
    }

    //only use fetched data once
    const [hasFetchedState, setHasFetchedState] = useState(false)

    useEffect(() => {
        if (data && !hasFetchedState) {
            newState(user?.state)
            setHasFetchedState(true)
        }
    }, [data, user?.state, newState, hasFetchedState])

    if (!hasFetchedState && Auth.loggedIn()) return <h1>Loading...</h1>

    return (
        <nav className="w-screen flex justify-between shadow-lg max-w-full" style={{ height: '10vh', backgroundColor: '#a2a2a275' }}>
            <div className="md:w-48 w-40 h-full flex justify-center items-center">
                <Link to={"/"} className="h-5/6 w-1/2" style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></Link>
            </div>
            <div className=" md:w-48 w-40 h-full flex justify-center items-center">
                {location.pathname === '/' && (
                    <StateFilter state={state} newState={newState} />
                )}
            </div>

            <div className=" md:w-48 w-40 h-full flex flex-col justify-center items-center">

                {Auth.loggedIn() ?
                    <>
                        {user &&
                            <Link to={"/profile"} className="md:text-2xl text-sm font-extrabold hover:text-gray-800">Hey, {user.firstName}</Link>
                        }
                        <a href="/" className="md:text-2xl text-sm font-extrabold hover:text-gray-800" onClick={() => Auth.logout()}>Log Out</a>
                    </> :
                    <Link to={"/login"} className="md:text-2xl text-sm font-extrabold hover:text-gray-800">Login</Link>}
            </div>
        </nav>
    )
}