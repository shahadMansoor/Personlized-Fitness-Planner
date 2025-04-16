import React from 'react';
import TrainerLayout from '../components/TrainerLayout';

const ClientsLoseWeight = () => {
  const clients = [
    { name: 'Taher', age: 34, plan: 'Lose weight' },
    { name: 'Sami', age: 25, plan: 'Lose weight' },
  ];

  return (
    <TrainerLayout pageTitle="One on One Couching">
      <h2 className="text-2xl font-semibold mb-8 px-4">Registered Clients</h2>

      <div className="space-y-4 px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-[#B7E4C7] p-4 rounded-lg shadow-md"
          >
            <p className="font-bold">{client.name}</p>
            <p>Age: {client.age}</p>
            <p>Plan: {client.plan}</p>
          </div>
        ))}
      </div>
    </TrainerLayout>
  );
};

export default ClientsLoseWeight;