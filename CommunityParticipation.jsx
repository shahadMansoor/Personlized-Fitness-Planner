import React, { useState } from 'react';
import Layout from '../components/UserLayout';

const CommunityParticipation = () => {
  const [selected, setSelected] = useState(null);
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
  ];

  const handleJoin = () => {
    if (selected === null) {
      alert('Please select a challenge to join.');
      return;
    }
    alert(`You have joined: ${challenges[selected].title}`);
  };

  return (
    <Layout pageTitle="Community Participation">


      <div className="flex flex-col items-center gap-8">
        <button className="bg-green-300 text-green-900 px-6 py-2 rounded font-semibold shadow">
          Join a challenge
        </button>

        <div className="w-full max-w-xl space-y-2">
          {challenges.map((c, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`cursor-pointer px-6 py-4 rounded border transition-all ${
                selected === index
                  ? 'bg-green-700 text-white'
                  : 'bg-green-200 hover:bg-green-300'
              }`}
            >
              <div className="font-bold">{c.title}</div>
              <div className="text-sm">{c.description}</div>
            </div>
          ))}
          <div className="text-green-700 text-sm cursor-pointer underline mt-2">
            More…
          </div>
        </div>

        <button
          onClick={handleJoin}
          className="bg-green-500 text-white font-semibold px-8 py-2 rounded hover:bg-green-600"
        >
          Join
        </button>
      </div>
    </Layout>
  );
};

export default CommunityParticipation;