import React, { useState } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000); // Daily step goal
  const [distance, setDistance] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [activeTime, setActiveTime] = useState('1h 30m');
  const [lastSyncTime, setLastSyncTime] = useState('10:00 PM');

  const addSteps = () => {
    setSteps(prevSteps => prevSteps + 1);
    setDistance(prevDistance => prevDistance + 0.7);
    setCaloriesBurned(prevCalories => prevCalories + 0.04);
  };

  const resetSteps = () => {
    setSteps(0);
    setDistance(0);
    setCaloriesBurned(0);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Step Counter</h2>

      {/* Display step count and parameters */}
      <div className="mb-6">
        <p>Steps Taken: {steps}</p>
        <p>Goal: {goal} steps</p>
        <p>Distance Covered: {distance.toFixed(2)} miles</p>
        <p>Calories Burned: {caloriesBurned.toFixed(2)}</p>
        <p>Active Time: {activeTime}</p>
        <p>Last Sync Time: {lastSyncTime}</p>
      </div>

      {/* Button to add steps */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={addSteps}
      >
        Add Step
      </button>

      {/* Button to reset step count */}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={resetSteps}
      >
        Reset Steps
      </button>
    </div>
  );
};

export default StepCounter;
