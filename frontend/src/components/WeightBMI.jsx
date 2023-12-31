import React, { useContext, useState } from 'react';
import { LoginContext } from '../contexts/loginContext';
import { CreateModal } from '../common/CreateModal';
import { Navigate } from 'react-router-dom';

export const WeightBMI = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const openModal = () => {
    if(isLoggedIn){
      setIsModalOpen(true);
    } else {
      setRedirectToLogin(true)
    }
    
  };

  const closeModal = () => {
    
    setIsModalOpen(false);
  };
  const handleSubmit = (data) => {
      console.log('Submitted data:', data);
      closeModal();
    };


   const weightBMIData = {
    weight: 70, // in kilograms
    height: 1.75, // in meters
    bmi: calculateBMI(70, 1.75),
    date: '2023-11-29',
  };

  // Function to calculate BMI
  function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
  }

  const createNewRecord = () => {
       console.log('Creating a new weight/BMI record...');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Weight & BMI Overview</h2>

      {/* Display weight and BMI information */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Latest Reading:</h3>
        <p>Weight: {weightBMIData.weight} kg</p>
        <p>BMI: {weightBMIData.bmi}</p>
        <p>Date: {weightBMIData.date}</p>
              </div>
      {/* Button to create a new record */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal }
      >
        Create New Record
      </button>
      {redirectToLogin? <Navigate to={"/login"} replace={true} />:<></>}
      <CreateModal
        showModal={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        title={"Weight & BMI Overview"}
      />
    </div>
  );
};

