import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrainerLayout from '../components/TrainerLayout';

const AddCommunityChallenge = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    detail: '',
    community: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Challenge Added:', formData);
    navigate('/trainer/community');
  };

  return (
    <TrainerLayout pageTitle="Community">
      <div className="w-full max-w-xl mx-auto mt-4">
        {/* Header Box */}
        <div className="bg-[#95D5B2] text-center py-3 rounded text-lg font-semibold shadow mb-6">
          Add Challenge
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Challenge Name"
              className="w-full border-b border-gray-300 py-1 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Detail</label>
            <input
              type="text"
              name="detail"
              value={formData.detail}
              onChange={handleChange}
              placeholder="Details"
              className="w-full border-b border-gray-300 py-1 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Community</label>
            <input
              type="text"
              name="community"
              value={formData.community}
              onChange={handleChange}
              placeholder="Name of Community"
              className="w-full border-b border-gray-300 py-1 focus:outline-none"
              required
            />
          </div>

          {/* Add Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#95D5B2] px-6 py-2 rounded text-black font-semibold hover:bg-[#74C69D] transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </TrainerLayout>
  );
};

export default AddCommunityChallenge;