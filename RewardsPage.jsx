import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const RewardsPage = () => {
  const navigate = useNavigate();
  const [selectedCommunity, setSelectedCommunity] = useState('');

  const data = {
    'Community 1': [
      { rank: 1, name: 'Fatimah', steps: 132000 },
      { rank: 2, name: 'Sara', steps: 127500 },
      { rank: 3, name: 'Aisha', steps: 120400 },
    ],
    'Community 2': [
      { rank: 1, name: 'Noura', steps: 140000 },
      { rank: 2, name: 'Maha', steps: 138300 },
      { rank: 3, name: 'Dana', steps: 125700 },
    ],
    'Community 3': [
      { rank: 1, name: 'Huda', steps: 118000 },
      { rank: 2, name: 'Reem', steps: 111400 },
      { rank: 3, name: 'Layla', steps: 104900 },
    ],
  };

  const handleAnnounceWinner = () => {
    if (!selectedCommunity) return alert('Please select a community first');
    const winner = data[selectedCommunity][0];
    navigate('/notification/settings', {
      state: {
        presetType: 'Reward Announcements',
        audience: 'Top Performer',
        title: 'Congratulations!',
        message: `You, ${winner.name}, have won the weekly step challenge in ${selectedCommunity} with ${winner.steps.toLocaleString()} steps!`,
      },
    });
  };

  const handleViewProfile = (name) => {
    navigate(`/user/${name}`);
  };

  return (
    <Layout pageTitle="Rewards">
      <h2 className="text-2xl font-bold text-center mb-6">Rewards</h2>

      <div className="max-w-xl mx-auto mb-6">
        <label className="block font-semibold mb-2">Select Community</label>
        <select
          value={selectedCommunity}
          onChange={(e) => setSelectedCommunity(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">-- Select a Community --</option>
          <option value="Community 1">Community 1</option>
          <option value="Community 2">Community 2</option>
          <option value="Community 3">Community 3</option>
        </select>
      </div>

      {selectedCommunity && (
        <div className="bg-gray-100 p-6 rounded-lg shadow max-w-3xl mx-auto mb-6">
          <h3 className="text-xl font-bold mb-4">Weekly Step Leaderboard</h3>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Rank</th>
                <th className="py-2">Name</th>
                <th className="py-2">Total Steps</th>
                <th className="py-2">View Profile</th>
              </tr>
            </thead>
            <tbody>
              {data[selectedCommunity].map((user, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2">{user.rank}</td>
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.steps.toLocaleString()}</td>
                  <td className="py-2">
                    <button
                      onClick={() => handleViewProfile(user.name)}
                      className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleAnnounceWinner}
          className="bg-gray-200 px-6 py-2 font-semibold rounded hover:bg-gray-300"
        >
          Announce the winner
        </button>
      </div>
    </Layout>
  );
};

export default RewardsPage;

