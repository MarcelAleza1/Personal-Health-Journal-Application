import React from 'react';

const BloodSugar = () => {
  const bloodSugarData = {
    glucoseLevel: 110,
    fasting: true,
    mealTime: 'After Breakfast',
    date: '2023-11-29',
      };

 
  const createNewRecord = () => {
    console.log('Creating a new blood sugar record...');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Blood Sugar Overview</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Latest Reading:</h3>
        <p>Glucose Level: {bloodSugarData.glucoseLevel} mg/dL</p>
        <p>Fasting: {bloodSugarData.fasting ? 'Yes' : 'No'}</p>
        <p>Meal Time: {bloodSugarData.mealTime}</p>
        <p>Date: {bloodSugarData.date}</p>
  
      </div>

      {/* Button to create a new record */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createNewRecord}
      >
        Create New Record
      </button>
    </div>
  );
};

export default BloodSugar;
