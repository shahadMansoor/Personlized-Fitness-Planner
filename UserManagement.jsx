import React from 'react';
import Layout from '../components/Layout';

const users = [
  { name: 'Member 1', email: 'xxxxx@KFUPM.edu.sa', role: 'Regular User', category: 'Build muscle' },
  { name: 'Member 2', email: 'xxxxx@KFUPM.edu.sa', role: 'Regular User', category: 'Lose weight' },
  { name: 'Member 3', email: 'xxxxx@KFUPM.edu.sa', role: 'Trainer', category: 'Training' },
];

const UserManagement = () => {
  return (
    <Layout pageTitle="User Managment">
      <div className="bg-[#f0efed] p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        <table className="w-full text-left">
          <thead className="text-gray-600 font-semibold">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Modify</th>
              <th className="pb-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">{user.category}</td>
                <td className="py-2">
                  <button className="bg-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-400">Edit</button>
                </td>
                <td className="py-2">
                  <button className="bg-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
          <button className="bg-white border border-gray-300 rounded px-4 py-2 font-semibold hover:bg-gray-100">
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UserManagement;
