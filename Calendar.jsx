import React, { useState } from 'react';
import Layout from '../components/Layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Layout pageTitle="Calendar">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Calendar */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="font-bold text-center mb-4">Select a Date</h2>
            <div className="flex flex-col items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
              <div className="mt-4 flex gap-4">
                <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Choose Date</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Add Marathon Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="font-bold text-lg mb-4">Add New Marathon</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Event Name</label>
                <input
                  type="text"
                  placeholder="Event Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Date and Time</label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-[#d0c8c2] px-6 py-2 rounded text-black font-semibold hover:bg-[#c3bcb5]"
              >
                Send Notification for all users
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
