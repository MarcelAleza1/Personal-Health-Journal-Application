import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { LoginContext } from '../contexts/loginContext.js';
import authServices from '../services/auth.js'
export const Profile = () => {
    const token = localStorage.getItem("token");
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    useEffect(() => {
        const getProfile = async () => {
            const apiResponse = await authServices.userProfile(token);
            if (apiResponse.status === 200) {
                console.log("apiResonse", apiResponse);
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false);
            }
            const userInfo = await apiResponse.json();
            if (userInfo?.userProfile?._id) {
                localStorage.setItem("userId", userInfo.userProfile._id)
            }
        };
        if(isLoggedIn){
            getProfile();
        }
       

    }, [token]);
    return(
    < div className="mt-5 mx-5">
      <h2>Profile page is not yet ready, please navigate to <Link to={'/'} className="text-blue-600">Home</Link> or <Link  to={'/insights'} className="text-blue-600">Insight</Link></h2>
    </div>
    )
}