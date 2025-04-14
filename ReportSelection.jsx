import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const ReportSelection = () => {
  const navigate = useNavigate();
  const [reportType, setReportType] = useState('');

  const mockData = {
    user: [
      { name: 'Aisha Al-Mutairi', steps: 57000, challenges: 5, calories: 12400, activeDays: 23, goals: 8, progress: 82 },
      { name: 'Sara Ali', steps: 62000, challenges: 7, calories: 13900, activeDays: 26, goals: 9, progress: 90 },
    ],
    community: [
      { name: 'Step Warriors', members: 35, avgSteps: 54000, engagement: 'High', topPerformer: 'Mohammed A.' },
      { name: 'Nutrition Ninjas', members: 20, avgSteps: 41000, engagement: 'Medium', topPerformer: 'Fatima B.' },
    ],
    trainer: [
      { name: 'Coach Layla', clients: 15, plans: 6, sessions: 40, avgProgress: 75, rating: 4.8 },
      { name: 'Coach Ahmed', clients: 10, plans: 4, sessions: 28, avgProgress: 68, rating: 4.5 },
    ],
  };

  const handleView = (item) => {
    navigate('/report/detail', { state: { reportType, data: item } });
  };

  return (
    <Layout pageTitle="Reports">
      <h2 className="text-2xl font-bold text-center mb-6">Generate Reports</h2>

      <div className="max-w-xl mx-auto mb-8">
        <label className="block font-semibold mb-2">Report For</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">-- Select --</option>
          <option value="user">User</option>
          <option value="community">Community</option>
          <option value="trainer">Trainer</option>
        </select>
      </div>

      {reportType && (
        <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4 capitalize">{reportType} List</h3>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-gray-700 border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Details</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockData[reportType].map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">
                    {reportType === 'user' && (
                      <>Steps: {item.steps}, Challenges: {item.challenges}, Calories: {item.calories}, Active Days: {item.activeDays}, Goals: {item.goals}, Progress: {item.progress}%</>
                    )}
                    {reportType === 'community' && (
                      <>Members: {item.members}, Avg Steps: {item.avgSteps}, Engagement: {item.engagement}, Top Performer: {item.topPerformer}</>
                    )}
                    {reportType === 'trainer' && (
                      <>Clients: {item.clients}, Plans: {item.plans}, Sessions: {item.sessions}, Avg Progress: {item.avgProgress}%, Rating: {item.rating}</>
                    )}
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleView(item)}
                      className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default ReportSelection;

