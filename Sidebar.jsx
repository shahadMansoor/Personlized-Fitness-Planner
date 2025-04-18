import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiUsers,
  FiBookOpen,
  FiBarChart2,
  FiLogOut,
  FiActivity,
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-600 text-white h-screen p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Hello <span className="block text-sm font-normal">User</span>
        </h1>

        <ul className="space-y-2">
          <li>
            <Link to="/user-account" className="flex items-center gap-3 py-2 hover:underline">
              <FiUser className="text-xl" />
              <span>User Account</span>
            </Link>
          </li>
          <li>
            <Link to="/meal" className="flex items-center gap-3 py-2 hover:underline">
              <FiBookOpen className="text-xl" />
              <span>Meal</span>
            </Link>
          </li>
          <li>
            <Link to="/community" className="flex items-center gap-3 py-2 hover:underline">
              <FiUsers className="text-xl" />
              <span>Community</span>
            </Link>
          </li>
          <li>
            <Link to="/workout" className="flex items-center gap-3 py-2 hover:underline">
              <FiBarChart2 className="text-xl" />
              <span>Workout</span>
            </Link>
          </li>
          <li>
            <Link to="/trainer" className="flex items-center gap-3 py-2 hover:underline">
              <FiActivity className="text-xl" />
              <span>Trainer</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:underline">
        <FiLogOut className="text-xl" />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;



