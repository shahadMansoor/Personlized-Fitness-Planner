import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiUser,
  FiActivity,
  FiCalendar,
  FiGift,
  FiLogOut,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi';

const UserSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear session/localStorage here
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between px-6 py-8">
      {/* Top Section */}
      <div>
        <div className="mb-10">
          <div className="text-sm text-gray-500">User</div>
          <div className="text-xl font-bold">Sara,</div>
        </div>

        <nav className="space-y-6 text-sm font-medium">
          <Link to="/account" className="flex items-center gap-3 text-gray-700 hover:text-black">
            <FiUser className="text-xl" />
            Account
          </Link>

          <Link to="/progress" className="flex items-center gap-3 text-gray-700 hover:text-black">
            <FiBarChart2 className="text-xl" />
            Progress
          </Link>

          <Link to="/meal" className="flex items-center gap-3 text-gray-700 hover:text-black">
            <FiCalendar className="text-xl" />
            Meal
          </Link>

          <Link to="/workout" className="flex items-center gap-3 text-gray-700 hover:text-black">
            <FiActivity className="text-xl" />
            Workout
          </Link>

          <Link to="/communityParticipation" className="flex items-center gap-3 text-gray-700 hover:text-black">
            <FiUsers className="text-xl" />
            Community Participation
          </Link>

          <Link to="/trainers" className="flex items-center gap-3 py-2 text-gray-700 hover:text-black">
            <FiUsers className="text-xl" />
            Trainers
          </Link>

        </nav>
      </div>

      {/* Log out */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-gray-600 hover:text-black"
      >
        <FiLogOut className="text-xl" />
        Log out
      </button>
    </div>
  );
};

export default UserSidebar;