import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { user } = useUserContext();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-green-600 text-white">
      <div className="flex gap-4">
        <Link to="/meal" className="hover:underline">Meal</Link>
        <Link to="/workout" className="hover:underline">Workout</Link>
        <Link to="/community" className="hover:underline">Community</Link>
      </div>
      {user?.name && (
        <div className="font-semibold text-lg">
          👋 Hi, {user.name}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
