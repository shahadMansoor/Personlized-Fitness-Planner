import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const NotificationSettings = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could store settings in context or localStorage
    navigate('/notification/send');
  };

  return (
    <Layout pageTitle="Notification Settings">
      <h2 className="text-2xl font-bold mb-6 text-center">Share and Push notifications</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-lg font-semibold mb-2">Type</label>
          <div className="space-y-2">
            {["Challenge Updates", "Reminders", "User Registration", "System Announcements", "Reward Announcements"].map(option => (
              <label className="flex items-center gap-2" key={option}>
                <input
                  type="radio"
                  name="type"
                  value={option}
                  onChange={() => setType(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Delivery Method</label>
          <div className="space-y-2">
            {["SMS", "Email", "Push notification"].map(methodOption => (
              <label className="flex items-center gap-2" key={methodOption}>
                <input
                  type="radio"
                  name="method"
                  value={methodOption}
                  onChange={() => setMethod(methodOption)}
                />
                {methodOption}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded mt-4 font-semibold">
          Save Settings
        </button>
      </form>
    </Layout>
  );
};

export default NotificationSettings;