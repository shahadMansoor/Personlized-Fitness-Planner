import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin login
    if (username === 'Admin' && password === '1234') {
      navigate('/usermanagement');
    }
    // User login - must be KFUPM email
    else if (username.endsWith('@kfupm.edu.sa') && password === '1234') {
      navigate('/account');
    }
    // Invalid
    else {
      setError('Invalid credentials or unauthorized email.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[900px] bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Logo */}
        <div className="w-1/2 bg-green-100 flex items-center justify-center p-10">
          <img
            src="/6048832881293379231.png"
            alt="FitTrack Logo"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="UserName or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />

            <div className="flex justify-between text-sm text-blue-900 font-semibold">
              <span className="cursor-pointer hover:underline">Forget Password</span>
              <Link to="/create-account" className="hover:underline">Create Account</Link>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-green-300 py-2 rounded font-semibold hover:bg-green-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
