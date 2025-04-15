import React from 'react';
import TrainerLayout from '../components/TrainerLayout';

const newRequests = [
  { name: 'Omar', age: 22, plan: 'loose weight' },
  { name: 'Fahd', age: 18, plan: 'Gain weight' },
];

const NewClientRequests = () => {
  const handleAccept = (name) => {
    console.log(`Accepted: ${name}`);
    // Move to accepted list or backend call here
  };

  const handleDecline = (name) => {
    console.log(`Declined: ${name}`);
    // Remove request or backend call here
  };

  return (
    <TrainerLayout pageTitle="One on One Couching">
      <h2 className="text-lg font-semibold mb-6">New Client Request</h2>

      <div className="space-y-6">
        {newRequests.map((client, index) => (
          <div
            key={index}
            className="bg-[#B7E4C7] p-4 rounded-xl flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="font-bold">{client.name}</p>
              <p>Age: {client.age}</p>
              <p>Plan: {client.plan}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleDecline(client.name)}
                className="bg-white text-black font-medium px-4 py-1 rounded shadow"
              >
                Decline
              </button>
              <button
                onClick={() => handleAccept(client.name)}
                className="bg-white text-black font-medium px-4 py-1 rounded shadow"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </TrainerLayout>
  );
};

export default NewClientRequests;