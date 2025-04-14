import React from 'react';
import Layout from '../components/Layout';

const CreatePlan = () => {
  return (
    <Layout pageTitle="Plans Managment">
      <div className="max-w-xl mx-auto">
        <div className="bg-[#f0efed] text-center font-bold py-3 rounded-lg mb-6">
          Create a Plan
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Plan Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Category</label>
            <input
              type="text"
              placeholder="Category"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Exercises</label>
            <input
              type="text"
              placeholder="Add exercises and suggest video"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Meal</label>
            <input
              type="text"
              placeholder="Meal"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#d0c8c2] px-6 py-2 rounded text-black font-semibold hover:bg-[#c3bcb5]">
              Create
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <button className="bg-[#f0efed] text-black font-semibold px-6 py-2 rounded hover:bg-gray-200">
          Save
        </button>
      </div>
    </Layout>
  );
};

export default CreatePlan;
