import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const clients = [
  { name: "Maha", age: 22, plan: "loose weight" },
  { name: "Ahmed", age: 18, plan: "Gain weight" },
];

const OneCoaching = () => {
  const navigate = useNavigate(); // ✅ Must be inside component

  return (
    <TrainerLayout pageTitle="One on One Couching">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Registered Clients</h2>
        <button
          onClick={() => navigate('/new-client-requests')}
          className="bg-[#95D5B2] hover:bg-[#74c69d] text-black font-semibold px-4 py-2 rounded shadow-sm"
        >
          New Clients Request
        </button>
      </div>

      <div className="space-y-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-[#B7E4C7] p-4 rounded-xl flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="font-bold">{client.name}</p>
              <p className="text-sm">Age: {client.age}</p>
              <p className="text-sm">Plan: {client.plan}</p>
            </div>
            <button className="bg-white text-black font-medium px-4 py-1 rounded shadow">
              Remove
            </button>
          </div>
        ))}
      </div>
    </TrainerLayout>
  );
};

export default OneCoaching;