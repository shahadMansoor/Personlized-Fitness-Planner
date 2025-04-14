import React, { useState } from 'react';
import Layout from '../components/Layout';

const CommunityManagement = () => {
  const [communities, setCommunities] = useState([
    { name: 'Community 1', members: 10, challenges: 3 },
    { name: 'Community 2', members: 25, challenges: 2 },
    { name: 'Community 3', members: 45, challenges: 6 },
  ]);

  const handleEdit = (index) => {
    alert(`Editing ${communities[index].name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Are you sure you want to delete ${communities[index].name}?`)) {
      const updated = [...communities];
      updated.splice(index, 1);
      setCommunities(updated);
    }
  };

  return (
    <Layout pageTitle="Community Management">
      <h2 className="text-2xl font-bold mb-6 text-center">Community Management</h2>

      <div className="bg-gray-100 rounded-lg p-6 shadow-md max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Community List</h3>
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="py-2">Community Name</th>
              <th className="py-2"># of Members</th>
              <th className="py-2"># of Challenges</th>
              <th className="py-2">Modify</th>
              <th className="py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {communities.map((community, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{community.name}</td>
                <td className="py-2">{community.members}</td>
                <td className="py-2">{community.challenges}</td>
                <td className="py-2">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-400"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-red-400 hover:text-white"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CommunityManagement;