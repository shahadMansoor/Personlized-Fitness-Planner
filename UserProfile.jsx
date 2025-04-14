import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const mockUserProfiles = {
  Fatimah: {
    steps: 132000,
    calories: 9800,
    goalsAchieved: 7,
    challenges: 4,
    activeDays: 22,
    progress: 88,
  },
  Sara: {
    steps: 127500,
    calories: 9100,
    goalsAchieved: 6,
    challenges: 3,
    activeDays: 21,
    progress: 85,
  },
  Aisha: {
    steps: 120400,
    calories: 8600,
    goalsAchieved: 5,
    challenges: 3,
    activeDays: 20,
    progress: 82,
  },
};

const UserProfile = () => {
  const { name } = useParams();
  const profile = mockUserProfiles[name];

  if (!profile) return <div className="text-center mt-10">User profile not found.</div>;

  return (
    <Layout pageTitle={`Profile: ${name}`}>
      <div className="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{name}'s Profile</h2>
        <div className="space-y-2 text-lg">
          <p><strong>Total Steps:</strong> {profile.steps.toLocaleString()}</p>
          <p><strong>Calories Burned:</strong> {profile.calories}</p>
          <p><strong>Goals Achieved:</strong> {profile.goalsAchieved}</p>
          <p><strong>Challenges Joined:</strong> {profile.challenges}</p>
          <p><strong>Active Days:</strong> {profile.activeDays}</p>
          <p><strong>Average Progress:</strong> {profile.progress}%</p>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;