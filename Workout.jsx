import React from 'react';
import UserLayout from '../components/UserLayout';

const Workout = () => {
  return (
    <UserLayout pageTitle="Workout">
      <div className="max-w-5xl mx-auto">
        <div className="bg-green-300 inline-block px-4 py-2 rounded mb-4 font-bold">
          Exercises Suggestions
        </div>

        <p className="text-sm text-gray-700 mb-2">
          This workout combines cardio, strength training, and core exercises to maximize calorie burn and fat lose.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-6">Total Duration: 45–50 minutes</p>

        {/* Upper-Body Section */}
        <div className="flex items-start gap-4 mb-4">
          <button className="bg-green-800 text-white font-bold px-4 py-2 rounded min-w-[110px]">
            Upper-Body
          </button>
          <div className="flex-1 bg-green-200 rounded-lg shadow p-4 flex gap-4 items-start">
          <a
            href="https://youtu.be/TkII8-Q4gbw?si=N0EpklZKtMA3ad6j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://d18zdz9g6n5za7.cloudfront.net/video/o_upper_body_and_core_strenght_workout.jpg"
              alt="Upper Body"
              className="w-32 h-20 object-cover rounded mt-4 md:mt-0 hover:opacity-80 transition"
            />
          </a>
            <ul className="text-sm list-disc list-inside">
              <li>Warm-up: 5–10 minutes</li>
              <li>Dumbbell Shoulder Press: 3 sets of 12 reps</li>
              <li>Tricep Dips: 3 sets of 12–15 reps</li>
            </ul>
          </div>
        </div>

        {/* Cardio Section */}
        <div className="flex items-start gap-4 mb-4">
          <button className="bg-green-800 text-white font-bold px-4 py-2 rounded min-w-[110px]">
            Cardio
          </button>
          <div className="flex-1 bg-green-200 rounded-lg shadow p-4 flex gap-4 items-start">
          <a
            href="https://youtu.be/8ortypveAL0?si=Ua9cSrw3jOwkeu8W"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBviBi9alD0rW3rEnEto2mROiGP0S_q397N9t6eg-OtUBp4FpyROcJjSTPztrRpdojfk&usqp=CAU"
              alt="Cardio"
              className="w-32 h-20 object-cover rounded mt-4 md:mt-0 hover:opacity-80 transition"
            />
          </a>
         
            <ul className="text-sm list-disc list-inside">
              <li>Warm-up: 5–10 minutes</li>
              <li>Mountain Climbers: 30s on, 30s rest (4–5 rounds)</li>
              <li>Jump Squats: 30s on, 30s rest (4–5 rounds)</li>
            </ul>
          </div>
        </div>

        {/* Stretching Section */}
        <div className="flex items-start gap-4 mb-4">
          <button className="bg-green-800 text-white font-bold px-4 py-2 rounded min-w-[110px]">
            Stretching
          </button>
          <div className="flex-1 bg-green-200 rounded-lg shadow p-4 flex gap-4 items-start">
          <a
            href="https://youtu.be/tf77HZVDI80?si=ix8829ngPN2KYev4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ytimg.com/vi/tf77HZVDI80/hq720.jpg"
              alt="Stretching"
              className="w-32 h-20 object-cover rounded mt-4 md:mt-0 hover:opacity-80 transition"
            />
          </a>
            <ul className="text-sm list-disc list-inside">
              <li>10–15 minutes after each exercise</li>
            </ul>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-10 text-sm">
          <h3 className="font-bold text-md mb-2">General Guidelines:</h3>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Duration of each session: 30–40 minutes</li>
            <li>Frequency: 4–5 days per week</li>
          </ul>
        </div>
      </div>
    </UserLayout>
  );
};

export default Workout;
