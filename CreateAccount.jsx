import React, { useState } from 'react';
import UserLayout from '../components/UserLayout';

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    level: '',
    workout: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.endsWith('@kfupm.edu.sa')) {
      alert('Email must end with @kfupm.edu.sa');
      return;
    }
    alert('Account created successfully!');
  };

  return (
    <UserLayout pageTitle="Create Account">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Info */}
          <div className="text-xl font-bold mb-4">Personal Information</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="bg-green-200 px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="xxxxxxxx@kfupm.edu.sa"
              value={form.email}
              onChange={handleChange}
              className="bg-green-200 px-4 py-2 rounded"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className="bg-green-200 px-4 py-2 rounded"
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={form.weight}
              onChange={handleChange}
              className="bg-green-200 px-4 py-2 rounded"
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={form.height}
              onChange={handleChange}
              className="bg-green-200 px-4 py-2 rounded"
            />
          </div>

          {/* Selections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* Goal */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold mb-2">Goal</h3>
              {['Maintain a healthy lifestyle', 'Lose weight', 'Build muscle'].map((g) => (
                <div
                  key={g}
                  onClick={() => handleSelect('goal', g)}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-green-100 ${
                    form.goal === g ? 'bg-green-200 font-semibold' : ''
                  }`}
                >
                  {g}
                </div>
              ))}
            </div>

            {/* Workout Level */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold mb-2">Workout level</h3>
              {['Beginner', 'Intermediate', 'Advanced'].map((l) => (
                <div
                  key={l}
                  onClick={() => handleSelect('level', l)}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-green-100 ${
                    form.level === l ? 'bg-green-200 font-semibold' : ''
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>

            {/* Workout Type */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="font-semibold mb-2">Workout</h3>
              {['with trainer', 'without trainer'].map((w) => (
                <div
                  key={w}
                  onClick={() => handleSelect('workout', w)}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-green-100 ${
                    form.workout === w ? 'bg-green-200 font-semibold' : ''
                }`}
              >
                {w}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded text-white font-semibold"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </UserLayout>
);
};

export default CreateAccount;
