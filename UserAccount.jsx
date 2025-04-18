// src/pages/UserAccount.jsx
import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserAccount = () => {
  const { user } = useUserContext(); // Access user data from context

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Account</h1>
      {user ? (
        <div className="space-y-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Weight:</strong> {user.weight} kg</p>
          <p><strong>Height:</strong> {user.height} cm</p>
          <p><strong>Goal:</strong> <span className="text-green-500">{user.goal}</span></p>
          <p><strong>Workout Level:</strong> <span className="text-green-500">{user.workoutLevel}</span></p>
          <p><strong>Workout Type:</strong> <span className="text-green-500">{user.workoutType}</span></p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default UserAccount;

