import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const TrainerCommunity = () => {
  const navigate = useNavigate();

  const communities = [
    { name: 'Community 1', id: 'community-1' },
    { name: 'Community 2', id: 'community-2' },
  ];

  const challenges = ['10 step per day'];

  return (
    <TrainerLayout pageTitle="Community">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8 mt-6">
        {/* Community Box */}
        <div className="bg-[#B7E4C7] rounded-xl shadow-md p-6 w-full md:w-1/2">
          <h2 className="text-lg font-bold text-center mb-4">Community</h2>
          <div className="space-y-4">
            {communities.map((com, index) => (
              <button
                key={index}
                onClick={() => navigate(`/trainer/community/${com.id}`)}
                className="bg-white px-4 py-2 w-full rounded text-center font-medium shadow hover:shadow-md transition"
              >
                {com.name}
              </button>
            ))}
          </div>
        </div>

        {/* Community Challenges */}
        <div className="bg-[#B7E4C7] rounded-xl shadow-md p-6 w-full md:w-1/2">
          <h2 className="text-lg font-bold text-center mb-4">
            Community Challenges
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 rounded text-center font-medium shadow"
              >
                {challenge}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate('/trainer/community/add-challenge')}
              className="bg-white px-6 py-2 rounded shadow hover:shadow-md transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </TrainerLayout>
  );
};

export default TrainerCommunity;
