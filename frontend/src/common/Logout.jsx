import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { LoginContext } from "../contexts/loginContext";
export const Logout = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
    }, []);

    return (
        <div className="flex justify-center text-green-600">
            <h1 className="mr-2">Logout Successfully</h1>
            <h2>
                Wish to login again? <a href="/login" className="text-blue-600">Login</a>
            </h2>
        </div>
    )
}