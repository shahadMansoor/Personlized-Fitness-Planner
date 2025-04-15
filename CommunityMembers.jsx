import React from 'react';
import { useParams } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

// Each community has 4 members
const communityData = {
  'community-1': ['Ammar', 'Wed', 'Mohemmed', 'Hadeel'],
  'community-2': ['Salem', 'Lama', 'Faisal', 'Nour'],
};

const CommunityMembers = () => {
  const { id } = useParams();
  const members = communityData[id.toLowerCase()] || [];

  return (
    <TrainerLayout pageTitle="Community">
      <div className="w-full max-w-3xl mx-auto mt-6">
        <div className="bg-[#B7E4C7] p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold text-center mb-6">Community Members</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded text-center font-medium shadow"
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TrainerLayout>
  );
};

export default CommunityMembers;