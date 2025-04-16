import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';
import { FiUpload, FiEdit2 } from 'react-icons/fi';

const GainWeightExercises = () => {
  const navigate = useNavigate();

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-10">Exercises Suggestions</h2>

      <div className="space-y-6">
        {/* full Body */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Full Body</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Deadlifts: 3 sets of 6–8 minutes</li>
              <li>Dumbbell Squats: 3 sets of 8–10 reps</li>
              <li>Tricep Dips: 25–40 minutes</li>
            </ul>
          </div>
          <a
            href="https://youtu.be/B12MXF0bSFo?si=tjOji3DmjMU7SJ7t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.-qU95Z2FQQRkeOtqmxKANwAAAA&rs=1&pid=ImgDetMain"
              alt="Upper Body"
              className="w-32 h-20 object-cover rounded mt-4 md:mt-0 hover:opacity-80 transition"
            />
          </a>
        </div>

        {/* Core */}
        <div className="bg-[#B7E4C7] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-bold text-lg mb-2">Core</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Planks: 3 sets, holding for 30 seconds each</li>
              <li>Russian Twists: 3 sets of 20 reps</li>
              <li>Leg Raises: 3 sets of 10–12 reps</li>
            </ul>
          </div>
          <a
            href="https://youtu.be/_lfR4sl0ZCE?si=NkzRiH8avVwi0z82"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://th.bing.com/th/id/OIP.b1uf0Y_E3XTXYjAdbZMNNAHaHZ?rs=1&pid=ImgDetMain"
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

export default GainWeightExercises;