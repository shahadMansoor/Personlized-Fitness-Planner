import React from 'react';
import { useUserContext } from '../context/UserContext';

function Workout() {
  const { user } = useUserContext();

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <a
        href="/dashboard"
        className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Back
      </a>

      <div className="flex justify-center items-center pt-20 pb-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Workout</h2>

          <div className="bg-green-100 p-4 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-green-800">Exercises Suggestions</h3>
            <p className="text-sm text-gray-700 mt-2">
              This workout combines cardio, strength training, and core exercises to maximize calorie burn and fat loss.
            </p>
            <p className="mt-1 font-medium text-gray-800">Total Duration: 45-50 minutes</p>
          </div>

          {/* Upper Body */}
          <div className="bg-green-50 p-4 rounded-xl mb-4 border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-green-800 mb-2">Upper-Body</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Warm-up: 5-10 minutes</li>
              <li>Dumbbell Shoulder Press: 3 sets of 12 reps</li>
              <li>Tricep Dips: 3 sets of 12-15 reps</li>
            </ul>
          </div>

          {/* Cardio */}
          <div className="bg-green-50 p-4 rounded-xl mb-4 border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-green-800 mb-2">Cardio</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Warm-up: 5-10 minutes</li>
              <li>Mountain Climbers: 30s on, 30s rest (4–5 rounds)</li>
              <li>Jump Squats: 30s on, 30s rest (4–5 rounds)</li>
            </ul>
          </div>

          {/* Stretching */}
          <div className="bg-green-50 p-4 rounded-xl mb-4 border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-green-800 mb-2">Stretching</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>10–15 minutes after each exercise</li>
            </ul>
          </div>

          {/* General Guidelines */}
          <div className="mt-6">
            <h4 className="text-md font-bold text-black mb-2">General Guidelines:</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Duration of each session: 30–40 minutes</li>
              <li>Frequency: 4–5 days per week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;
