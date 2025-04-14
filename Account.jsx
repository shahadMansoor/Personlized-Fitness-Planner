import React from 'react';
import UserLayout from '../components/UserLayout';

const Account = () => {
  return (
    <UserLayout pageTitle="User Account">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Personal Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-center bg-green-300 text-black font-bold py-2 rounded-md mb-4">
            Personal Information
          </h2>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> Sara</p>
            <p><span className="font-semibold">Email:</span> xxxxxxxx@kfupm.edu.sa</p>
            <p><span className="font-semibold">Age:</span> 22</p>
            <p><span className="font-semibold">Weight:</span> 60kg</p>
            <p><span className="font-semibold">Height:</span> 165cm</p>
            <p><span className="font-semibold">Goal:</span> Build Muscle</p>
            <p><span className="font-semibold">Workout Level:</span> Intermediate</p>
            <p><span className="font-semibold">Workout:</span> With Trainer</p>
          </div>
        </div>

        {/* Community Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-center bg-green-300 text-black font-bold py-2 rounded-md mb-4">
            Community Participation
          </h2>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> Ramadan Challenge</p>
            <p><span className="font-semibold">Details:</span> 30-Day Step Goal</p>
            <p><span className="font-semibold">Community:</span> FitTogether</p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Account;
