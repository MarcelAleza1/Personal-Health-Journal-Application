import { BloodPressure } from "./BloodPressure"
import BloodSugar from "./BloodSugar"
import StepCounter from "./StepCounter"
import WaterReminder from "./WaterReminder"
import { WeightBMI } from "./WeightBMI"

export const Insights = () => {
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