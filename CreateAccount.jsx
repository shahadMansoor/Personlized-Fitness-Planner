import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = (e) => {
    e.preventDefault();

    if (!email.endsWith('@kfupm.edu.sa')) {
      alert('Email must end with @kfupm.edu.sa');
      return;
    }

    if (password.length < 4) {
      alert('Password must be at least 4 characters');
      return;
    }

    // Redirect to the next step of account creation
    navigate('/create-account-details');
  };

  return (
    <div className="min-h-screen bg-[#f8f9f8] px-4 py-10">
      {/* Page Header with rounded style */}
      <div className="bg-green-800 text-white text-center py-4 text-2xl font-bold rounded-b-[100px] w-full max-w-6xl mx-auto mb-10">
        Create Account
      </div>

      {/* Form Box */}
      <div className="flex justify-center">
        <div className="bg-white w-full max-w-xl p-10 rounded-2xl shadow-xl">
          <h2 className="text-center text-2xl font-semibold mb-8">Create account</h2>

          <form onSubmit={handleNext} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-5 py-3 rounded-lg text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-5 py-3 rounded-lg text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-green-400 w-full py-3 rounded-lg text-lg font-semibold text-white hover:bg-green-500 transition"
            >
              Next →
            </button>
          </form>
        </div>
      </div>

      {/* Login link */}
      <div className="text-center mt-10 text-base text-gray-700">
        Already have an account?{' '}
        <Link to="/" className="text-black font-semibold underline hover:text-green-700">
          Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
