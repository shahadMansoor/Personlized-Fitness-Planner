import React from 'react';
import { useUserContext } from '../context/UserContext';

const Trainer = () => {
  const { user } = useUserContext();
  const trainers = ['Trainer Ali', 'Trainer Faisal', 'Trainer Fahad', 'Trainer Saad'];

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <a
        href="/user-account"
        className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
      >
        Back
      </a>

      <div className="flex justify-center items-start pt-20 pb-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Trainers</h2>

          <div className="bg-green-100 p-6 rounded-xl shadow-inner">
            <h3 className="text-left font-semibold mb-4 text-black">Available Trainers</h3>

            <div className="grid grid-cols-2 gap-4">
              {trainers.map((name, index) => (
                <button
                  key={index}
                  className="bg-white text-black font-medium py-3 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;

