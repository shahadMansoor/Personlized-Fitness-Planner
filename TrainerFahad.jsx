import React from 'react';
import UserLayout from '../components/UserLayout';

const TrainerFahad= () => {
  return (
    <UserLayout pageTitle="Trainers">
      <div className="flex justify-center mt-10">
        <div className="bg-green-200 p-10 rounded-xl shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Trainer Fahad</h2>

          <div className="space-y-4">
            <p className="bg-white p-4 rounded shadow font-semibold">Specialization: <span className="font-normal">Lose weight & Gain weight</span></p>
            <p className="bg-white p-4 rounded shadow font-semibold">Years of Experience: <span className="font-normal">13 Years</span></p>
            <p className="bg-white p-4 rounded shadow font-semibold">Workout Focus: <span className="font-normal">Lose weight & Gain weight</span></p>
            <p className="bg-white p-4 rounded shadow font-semibold">Trainer level: <span className="font-normal">Expert</span></p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white px-6 py-2 rounded shadow hover:bg-gray-100 font-semibold">
              Register with Trainer
            </button>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default TrainerFahad;