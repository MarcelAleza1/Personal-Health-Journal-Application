import React, { useState } from 'react';

const WaterReminder = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(8); // Goal in glasses of water per day
  const [hydrationLevel, setHydrationLevel] = useState('Normal');
  const [reminderTime, setReminderTime] = useState('10:00 AM');
  const [lastIntakeTime, setLastIntakeTime] = useState('09:00 AM');

  const addWater = () => {
    setWaterIntake(prevIntake => prevIntake + 1);
  };

  const resetWaterIntake = () => {
    setWaterIntake(0);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Water Reminder</h2>

      {/* Display water intake and parameters */}
      <div className="mb-6">
        <p>Water Intake: {waterIntake} / {goal} glasses</p>
        <p>Hydration Level: {hydrationLevel}</p>
        <p>Reminder Time: {reminderTime}</p>
        <p>Last Intake Time: {lastIntakeTime}</p>
      </div>

      {/* Button to add water intake */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={addWater}
      >
        Add Water
      </button>

      {/* Button to reset water intake for a new day */}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={resetWaterIntake}
      >
        Reset Intake
      </button>
    </div>
  );
};

export default WaterReminder;
