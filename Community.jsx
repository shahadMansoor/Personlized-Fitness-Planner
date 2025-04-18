import React from 'react';
import { useUserContext } from '../context/UserContext';

function Community() {
  const { user } = useUserContext();

  const challenges = [
    {
      title: '10,000 steps a day challenge',
      description: 'Walk at least 10,000 steps daily for a month',
    },
    {
      title: 'Sunrise walk challenge',
      description: 'Meet up every morning at sunrise for 3-minutes walk',
    },
    {
      title: 'Weekend 5K run',
      description: 'Gather on weekends to run a 5k together in the park',
    },
    {
      title: 'More....',
      description: '',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <a
        href="/dashboard"
        className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Back
      </a>

      <div className="flex justify-center items-center pt-20 pb-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Community Participation</h2>

          <button className="bg-green-300 hover:bg-green-400 text-white font-semibold py-2 px-6 rounded mb-6">
            Join a challenge
          </button>

          <div className="bg-green-100 p-2 rounded-lg space-y-2 mb-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-green-200 hover:bg-green-300 px-4 py-3 rounded cursor-pointer transition"
              >
                <div className="text-left">
                  <p className="font-semibold text-sm text-black">{challenge.title}</p>
                  <p className="text-xs text-gray-800">{challenge.description}</p>
                </div>
                <span className="text-lg text-gray-700">›</span>
              </div>
            ))}
          </div>

          <button className="bg-green-300 hover:bg-green-400 text-white font-semibold py-2 px-6 rounded">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
