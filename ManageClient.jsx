import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const clientTypes = [
  { type: 'lose-weight', label: 'Loose wight' },
  { type: 'gain-weight', label: 'Gain wight' },
  { type: 'maintain-weight', label: 'Maintain wight' },
];

const ManageClient = () => {
  const navigate = useNavigate();

  const handleNavigate = (type, action) => {
    if (action === 'meals') {
      if (type === 'lose-weight') {
        navigate('/meals/lose-weight');
      } else if (type === 'gain-weight') {
        navigate('/meals/gain-weight');
      } else if (type === 'maintain-weight') {
        navigate('/meals/maintain-weight');
      }
    } else if (action === 'exercises') {
      if (type === 'lose-weight') {
        navigate('/exercises/lose-weight');
      } else if (type === 'gain-weight') {
        navigate('/exercises/gain-weight');
      } else if (type === 'maintain-weight') {
        navigate('/exercises/maintain-weight');
      }
    } else if (action === 'clients') {
      if (type === 'lose-weight') {
        navigate('/clients/lose-weight');
      } else if (type === 'gain-weight') {
        navigate('/clients/gain-weight');
      } else if (type === 'maintain-weight') {
        navigate('/clients/maintain-weight');
      }
    }
  };

  return (
    <TrainerLayout pageTitle="Manage Client">
      <h2 className="text-xl font-semibold text-center mb-10">Type of Client</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {clientTypes.map((client) => (
          <div
            key={client.type}
            className="bg-[#B7E4C7] p-6 rounded-xl w-full max-w-xs text-center shadow"
          >
            <h3 className="font-bold mb-4">{client.label}</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleNavigate(client.type, 'meals')}
                className="w-full bg-white text-black font-medium px-4 py-2 rounded shadow"
              >
                Add Meals Suggestions
              </button>
              <button
                onClick={() => handleNavigate(client.type, 'exercises')}
                className="w-full bg-white text-black font-medium px-4 py-2 rounded shadow"
              >
                Add Exercises Suggestions
              </button>
              <button
                onClick={() => handleNavigate(client.type, 'clients')}
                className="w-full bg-white text-black font-medium px-4 py-2 rounded shadow"
              >
                Registered Clients
              </button>
            </div>
          </div>
        ))}
      </div>
    </TrainerLayout>
  );
};

export default ManageClient;