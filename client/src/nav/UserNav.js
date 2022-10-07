import { Link } from 'react-router-dom'
import {useLogout} from "../providers/AuthProvider";

const UserNav = () => {
    const logout = useLogout()
    return (
        <header className="flex w-full bg-blue-400">
            <nav className="flex items-center justify-between flex-wrap bg-teal p-6 w-full">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <Link to="{{ route('home') }}" className="flex">
                        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                        <span className="font-semibold text-xl tracking-tight">Welcome User</span>
                    </Link>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to={"/chat"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Chat
                        </Link>
                        <Link to={"/posts"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                            My posts
                        </Link>
                    </div>
                    <div>
                        <Link onClick={logout} to={"/"} className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Log Out</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export {UserNav};