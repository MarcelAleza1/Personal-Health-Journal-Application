import React, { useContext, useEffect, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { LoginContext } from '../contexts/loginContext.js';
import authServices from '../services/auth.js';
//import authServices from '../services/auth.js'
export const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    //const [isLoggedIn,setIsLoggedIn] = useState(false);
    const Links = [
        { name: "Home", link: "/" },
        // { name: "Tracker", link: "/tracker" },
        { name: "Insights", link: "/insights" }
    ];
    let [open, setOpen] = useState(false);
    // check if token is in localstorage, if yes login with token
    const token = localStorage.getItem("token");
    const getProfile = async () => {
        const apiResponse = await authServices.userProfile(token);
        if (apiResponse.status === 200) {
            console.log("apiResonse", apiResponse);
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        getProfile();
    }, [token])

    useEffect(() => {
        console.log("Open: ", open);
    }, [open])
    return (
        <div className='shadow-md w-full sticky top-0 left-0 mb-5 '>
            <div className='md:flex items-center justify-between bg-white solide py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <span>Health Tracker</span>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, idx) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={idx}>
                                <Link to={link.link} onClick={() => setOpen(false)} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                            </li>))
                    }
                    {isLoggedIn ? <div>
                        <Link to={"/profile"} onClick={() => setOpen(false)} className='ml-2 inline-block text-sm hover:text-blue-400 px-4 py-2 leading-none border rounded border-black mt-4 lg:mt-0'>Profile</Link>
                        <Link to={"/logout"} onClick={() => setOpen(false)} className="ml-1 inline-block text-sm hover:text-blue-400 px-4 py-2 mr-2 md:ml-2 leading-none border rounded border-black mt-4 lg:mt-0">Logout</Link>
                    </div> :
                        <div>
                            <Link to={"/login"} onClick={() => setOpen(false)} className="inline-block text-sm hover:text-blue-400 px-4 py-2 mr-2 md:ml-2 leading-none border rounded border-black mt-4 lg:mt-0">Login</Link>
                            <Link to={"/register"} onClick={() => setOpen(false)} className="inline-block text-sm hover:text-blue-400 px-4 py-2 leading-none border rounded border-black mt-4 lg:mt-0">Register</Link>
                        </div>}
                    <div className='border border-b md:hidden my-2 mr-2'></div>
                </ul>
            </div>
        </div>
    )
}