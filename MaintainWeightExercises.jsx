import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';
import { FiUpload, FiEdit2 } from 'react-icons/fi';

const MaintainWeightExercises = () => {
  const navigate = useNavigate();

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-10">Exercises Suggestions</h2>

      <div className="space-y-6">
        {/* Lower Body */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Lower Body</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Step-ups: 3 sets of 10 reps per leg</li>
              <li>Leg Extension: 3 sets of 8–10 reps</li>
              <li>Hamstring Curls: 3 sets of 10–12 reps</li>
            </ul>
          </div>
          <a
            href="https://youtu.be/8I46WVdMoyc?si=DMtFrlyIkPjjK5JH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.Q7bVgh1Ex4hM6yQvCp6JSgHaE4&rs=1&pid=ImgDetMain"
              alt="Lower Body"
              className="w-32 h-20 object-cover rounded mt-4 md:mt-0 hover:opacity-80 transition"
            />
          </a>
        </div>

        {/* Cardio */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Cardio</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Cycling: 25–40 minutes</li>
              <li>Swimming: 30 minutes</li>
              <li>Brisk Walking: 30–45 minutes</li>
            </ul>
          </div>
          <a
            href="https://youtu.be/9psH-BsJ_IM?si=H_Uj7eeoEunjaAO9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/man-indoor-cycling.jpeg?fit=800%2C800&p=1"
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

export default MaintainWeightExercises;
