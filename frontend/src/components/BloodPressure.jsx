import { CreateModal } from "../common/CreateModal";
import { useState } from 'react';
export const BloodPressure = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const handleSubmit = (data) => {
        console.log('Submitted data:', data);
        closeModal();
      };
    
  const bloodPressureData = {
    systolic: 120,
    diastolic: 80,
    pulse: 70,
    note:'BP'
  };

  const createNewRecord = () => {
  
    console.log('Creating a new blood pressure record...');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Blood Pressure Overview</h2>

      {/* Display blood pressure information */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Latest Reading:</h3>
        <p>Systolic: {bloodPressureData.systolic}</p>
        <p>Diastolic: {bloodPressureData.diastolic}</p>
        <p>Pulse: {bloodPressureData.pulse}</p>
        <p>Note: {bloodPressureData.note}</p>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Create New Record
      </button>
      <CreateModal
        showModal={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        title={"Blood Pressure Informations"}
      />
    </div>
  );
};

