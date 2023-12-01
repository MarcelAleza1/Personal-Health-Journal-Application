import { CreateModal } from "../common/CreateModal";
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../contexts/loginContext.js';
import { Navigate } from "react-router-dom";
import activitiesServices from '../services/activities.js'
export const BloodPressure = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loading, setLoading] = useState(false)
  const [last5Reading, setLast5Reading] = useState([]);
  const [addRecord,setAddRecord] = useState(false)

  const openModal = () => {
    if (isLoggedIn) {
      setIsModalOpen(true);
    } else {
      setRedirectToLogin(true)
    }

  };

  const closeModal = () => {

    setIsModalOpen(false);
  };
  const handleSubmit = async (data) => {
    const BPData = {
      userId: data.userId,
      systolic: data.getInput1,
      diastolic: data.getInput2,
      pulse: data.getInput3,
      note: data.getInput4,
    }
    console.log('Submitted data:', BPData);

    // console.log(data);
    setLoading(true);
    const apiResponse = await activitiesServices.createBloodPressure(BPData);
    if (apiResponse.ok) {
      console.log("apiResonse", apiResponse);
      setAddRecord(!addRecord);
    }
    else {
      console.log("Error posting data");
    }
    setLoading(false);
    closeModal();
  };
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getBPData = async () => {
      setLoading(true)
      const apiResponse = await activitiesServices.getAllBloodPressures(userId);
      if (apiResponse.status === 200) {
        console.log("apiResonse", apiResponse);
      }
      else {
        //Error occured
      }
      const BPData = await apiResponse.json();
      if (BPData?.lenght <= 5) {
        setLast5Reading(BPData);
      } else {
        setLast5Reading(BPData.slice(-5));
      }
  
      setLoading(false);
      console.log("BPData: ", BPData);
    };

    if (isLoggedIn) {
      getBPData()
    }
  }, [userId,addRecord]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Blood Pressure Overview</h2>

      {/* Display blood pressure information */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Latest Reading:</h3>
        <h3 className="flex">Systolic: {last5Reading.map((reading, idx) => { return (<p key={idx}>{reading.systolic}:</p>) })}</h3>
        <h3 className="flex">Diastolic: {last5Reading.map((reading, idx) => { return (<p key={idx}>{reading.diastolic}:</p>) })}</h3>
        <h3 className="flex">Pulse: {last5Reading.map((reading, idx) => { return (<p key={idx}>{reading.pulse}:</p>) })}</h3>
        <h3 className="flex">Note: {last5Reading[last5Reading.length - 1]?.note.slice(0, 20)}</h3>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Create New Record
      </button>
      {redirectToLogin ? <Navigate to={"/login"} replace={true} /> : <></>}
      <CreateModal
        showModal={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        title={"Blood Pressure Informations"}
        input1={"Blood Pressure"}
        input2={"Diastalic"}
        input3={"Pulse"}
        input4={"Note"}
      />
    </div>
  );
};

