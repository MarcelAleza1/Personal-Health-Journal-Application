import { useContext, useEffect } from "react"
import authServices from "../services/auth"
import { BloodPressure } from "./BloodPressure"
import BloodSugar from "./BloodSugar"
import StepCounter from "./StepCounter"
import WaterReminder from "./WaterReminder"
import { WeightBMI } from "./WeightBMI"
import { LoginContext } from '../contexts/loginContext.js';

export const Insights = () => {
    //Need to get userId from loggedIn user 
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    const token = localStorage.getItem("token");
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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-2">
                <BloodPressure />
                <BloodSugar />
                <WeightBMI/>
                <WaterReminder/>
                <StepCounter />
            </div>
        </>
    )
}