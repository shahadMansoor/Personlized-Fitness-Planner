import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    // You can later send this to backend
    alert(`A reset link has been sent to ${email}`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Logo Panel */}
        <div className="w-full md:w-1/2 bg-green-100 flex items-center justify-center p-6">
          <img src="/6048832881293379231.png" alt="FitTrack Logo" className="w-48 h-auto" />
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Forget Your Password?</h2>

          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-300 text-black font-semibold py-2 rounded hover:bg-green-400"
            >
              Reset Password
            </button>
          </form>

          <p
            onClick={() => navigate('/')}
            className="mt-4 text-center text-blue-700 underline cursor-pointer"
          >
            Back to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;