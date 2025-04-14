import React from 'react';
import Layout from '../components/Layout';

const Maps = () => {
  return (
    <Layout pageTitle="Maps">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#f0efed] text-center font-bold py-3 rounded-lg mb-6">
            Add Route
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Route Name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Description</label>
              <textarea
                rows="3"
                placeholder="Description"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Distance (km)</label>
              <input
                type="text"
                placeholder="Distance"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Track</label>
              <input
                type="text"
                placeholder="Track"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <button type="submit" className="bg-[#f0efed] px-6 py-2 rounded text-black font-semibold hover:bg-gray-200">
              Save
            </button>
          </form>
        </div>

        {/* Right Side: Map Display */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="/6039524196809295562.jpg"
            alt="Map Preview"
            className="rounded-xl shadow-md mb-4"
          />
          <div className="flex gap-4">
            <button className="bg-[#d0c8c2] px-6 py-2 rounded text-black font-semibold hover:bg-[#c3bcb5]">
              Edit
            </button>
            <button className="bg-[#d0c8c2] px-6 py-2 rounded text-black font-semibold hover:bg-[#c3bcb5]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Maps;
