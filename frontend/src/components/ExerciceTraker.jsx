import React, { useState } from 'react';

export const ExerciseTracker = () => {
  const [exerciseTypes, setExerciseTypes] = useState({
    running: false,
    walking: false,
    workoutMetrics: false,
    nutritionTracking: false,
  });

  const handleCheckboxChange = (type) => {
    setExerciseTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">Exercise Types</h2>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={exerciseTypes.running}
            onChange={() => handleCheckboxChange('running')}
            className="mr-2"
          />
          Running
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={exerciseTypes.walking}
            onChange={() => handleCheckboxChange('walking')}
            className="mr-2"
          />
          Walking
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={exerciseTypes.workoutMetrics}
            onChange={() => handleCheckboxChange('workoutMetrics')}
            className="mr-2"
          />
          Workout Metrics
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={exerciseTypes.nutritionTracking}
            onChange={() => handleCheckboxChange('nutritionTracking')}
            className="mr-2"
          />
          Nutrition Tracking
        </label>
      </div>
    </div>
  );
};

