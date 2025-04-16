import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccountDetails = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    level: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can store this info or send to backend
    alert('Account created successfully!');
    navigate('/'); // back to login
  };

  return (
    <div className="min-h-screen bg-[#f8f9f8] px-4 py-10">
      {/* Header */}
      <div className="bg-green-800 text-white text-center py-4 text-2xl font-bold rounded-b-[100px] w-full max-w-6xl mx-auto mb-10">
        Create Account
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-6">Personal Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-green-200 px-4 py-3 rounded-md text-sm"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full bg-green-200 px-4 py-3 rounded-md text-sm"
            required
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight  kg"
            value={form.weight}
            onChange={handleChange}
            className="w-full bg-green-200 px-4 py-3 rounded-md text-sm"
            required
          />
          <input
            type="text"
            name="height"
            placeholder="Height  cm"
            value={form.height}
            onChange={handleChange}
            className="w-full bg-green-200 px-4 py-3 rounded-md text-sm"
            required
          />
        </form>

        {/* Select Goals and Level */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Goal */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-3">Goal</h3>
            {['Maintain a healthy lifestyle', 'Lose weight', 'Build muscle'].map((goal) => (
              <div
                key={goal}
                onClick={() => handleSelect('goal', goal)}
                className={`cursor-pointer px-3 py-2 rounded hover:bg-green-100 ${
                  form.goal === goal ? 'bg-green-200 font-semibold' : ''
                }`}
              >
                {goal}
              </div>
            ))}
          </div>

          {/* Workout Level */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-3">Workout level</h3>
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <div
                key={level}
                onClick={() => handleSelect('level', level)}
                className={`cursor-pointer px-3 py-2 rounded hover:bg-green-100 ${
                  form.level === level ? 'bg-green-200 font-semibold' : ''
                }`}
              >
                {level}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg font-semibold text-white"
          >
            Create Account
          </button>
        </div>
      </div>

      {/* Login Link */}
      <div className="text-center mt-10 text-sm text-gray-700">
        Already have an account?{' '}
        <Link to="/" className="text-black font-semibold underline hover:text-green-700">
          Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountDetails;