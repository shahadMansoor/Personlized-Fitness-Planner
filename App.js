import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import Sidebar from './components/Sidebar';
import Community from './pages/Community';
import Meal from './pages/Meal';
import Workout from './pages/Workout';
import CreateAccount from './pages/CreateAccount';
import UserAccount from './pages/UserAccount';
import Trainer from './pages/Trainer';

function AppContent() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/create-account';

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}
      <div className={hideSidebar ? 'w-full' : 'pl-64 w-full'}>
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/meal" element={<Meal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="*" element={<Navigate to="/create-account" />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;
