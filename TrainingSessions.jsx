import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const sessions = [
  {
    name: 'Session 1',
    location: 'Building 11',
    time: '10:30 am',
    price: 20,
    availableSeats: 15,
    registered: 10,
  },
  {
    name: 'Session 2',
    location: 'Building 404',
    time: '4:00 pm',
    price: 30,
    availableSeats: 25,
    registered: 22,
  },
  {
    name: 'Session 3',
    location: 'Building 407',
    time: '8:30 pm',
    price: 50,
    availableSeats: 45,
    registered: 30,
  },
];

const TrainingSessions = () => {
  const navigate = useNavigate();

  return (
    <TrainerLayout pageTitle="Training Sessions">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-[#B7E4C7] p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Sessions</h2>
            <button
              onClick={() => navigate('/training-sessions/create')}
              className="bg-white border border-gray-400 px-4 py-2 rounded hover:shadow"
            >
              +Create Session
            </button>
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-700 font-semibold border-b border-green-400">
                <th className="py-2">Name</th>
                <th>Location</th>
                <th>Time</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Registered</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={index} className="border-t border-green-300">
                  <td className="py-2">{session.name}</td>
                  <td>{session.location}</td>
                  <td>{session.time}</td>
                  <td>{session.price}</td>
                  <td>{session.availableSeats}</td>
                  <td>{session.registered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TrainerLayout>
  );
};

export default TrainingSessions;