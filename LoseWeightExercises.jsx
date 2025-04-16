import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';
import { FiUpload, FiEdit2 } from 'react-icons/fi';

const LoseWeightExercises = () => {
  const navigate = useNavigate();

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-10">Exercises Suggestions</h2>

      <div className="space-y-6">
        {/* Upper Body */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Upper Body</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Warm-up: 5–10 minutes</li>
              <li>Dumbbell Shoulder Press: 3 sets of 12 reps</li>
              <li>Tricep Dips: 3 sets of 12–15 reps</li>
            </ul>
          </div>
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
        </div>

        {/* Cardio */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Cardio</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Warm-up: 5–10 minutes</li>
              <li>Mountain Climbers: 30 sec on, 30 sec rest (repeat 4–5 rounds)</li>
              <li>Jump Squats: 30 sec on, 30 sec rest (repeat 4–5 rounds)</li>
            </ul>
          </div>
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
        </div>

        {/* Stretching */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Stretching</h3>
            <ul className="list-disc list-inside text-sm">
              <li>10–15 minutes after each workout</li>
            </ul>
          </div>
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
        </div>
      </div>

      {/* General Guidelines */}
      <div className="mt-10">
        <h4 className="font-bold text-md mb-2">General Guidelines:</h4>
        <ul className="list-disc list-inside text-sm text-gray-800">
          <li>Duration per session: 30–40 minutes</li>
          <li>Frequency: 4–5 days/week</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/upload-exercise-video')}
          className="bg-[#95D5B2] hover:bg-[#74c69d] px-6 py-2 rounded shadow font-medium flex items-center gap-2 text-black"
        >
          <FiUpload className="text-lg" />
          Upload new video
        </button>
        <button className="bg-[#95D5B2] hover:bg-[#74c69d] px-6 py-2 rounded shadow font-medium flex items-center gap-2 text-black">
          <FiEdit2 className="text-lg" />
          Edit an existing video
        </button>
      </div>
    </TrainerLayout>
  );
};

export default LoseWeightExercises;