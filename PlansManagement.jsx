import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const plans = [
  { name: 'Plan 1', category: 'Build muscle' },
  { name: 'Plan 2', category: 'Lose weight' },
  { name: 'Plan 3', category: 'Maintain a healthy lifestyle' },
];

const PlansManagement = () => {
  return (
    <Layout pageTitle="Plans Managment">
      <div className="flex justify-end mb-4">
        <Link to="/plans/create">
          <button className="bg-[#f0efed] text-gray-700 font-semibold px-4 py-2 rounded hover:bg-gray-200">
            +Create Plan
          </button>
        </Link>
      </div>

      <div className="bg-[#f0efed] p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-bold mb-4">Plans</h2>

        <table className="w-full text-left">
          <thead className="text-gray-600 font-semibold">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Modifiy</th>
              <th className="pb-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {plans.map((plan, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-2">{plan.name}</td>
                <td className="py-2">{plan.category}</td>
                <td className="py-2">
                  <button className="bg-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-400">
                    Edit
                  </button>
                </td>
                <td className="py-2">
                  <button className="bg-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
          <button className="bg-white border border-gray-300 rounded px-4 py-2 font-semibold hover:bg-gray-100">
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PlansManagement;
