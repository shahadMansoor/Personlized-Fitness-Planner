import React from 'react';
import UserLayout from '../components/UserLayout';

const Trainers = () => {
  const trainers = ['Trainer Ali', 'Trainer Faisal', 'Trainer Fahad', 'Trainer Saad'];

  return (
    <UserLayout pageTitle="Trainers">
      <div className="flex justify-center mt-10">
        <div className="bg-green-300 p-10 rounded-xl shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Available Trainers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trainers.map((trainer, index) => (
              <button
                key={index}
                className="bg-white py-4 px-6 rounded-lg shadow text-base font-semibold hover:bg-gray-100 transition-all"
              >
                {trainer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Trainers;
