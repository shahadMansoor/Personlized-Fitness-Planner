import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ReportDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reportType, data } = location.state || {};

  const handlePrint = () => {
    window.
    print();
  };

  if (!data) return <div className="text-center mt-10">No data to show.</div>;

  return (
    <Layout pageTitle="Report Details">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-2xl font-bold mb-4">Report for {data.name}</h2>

        <div className="space-y-3">
          {reportType === 'user' && (
            <>
              <p><strong>Total Steps:</strong> {data.steps}</p>
              <p><strong>Challenges Joined:</strong> {data.challenges}</p>
              <p><strong>Calories Burned:</strong> {data.calories}</p>
              <p><strong>Active Days:</strong> {data.activeDays}</p>
              <p><strong>Goals Achieved:</strong> {data.goals}</p>
              <p><strong>Average Progress:</strong> {data.progress}%</p>
            </>
          )}

          {reportType === 'community' && (
            <>
              <p><strong>Members:</strong> {data.members}</p>
              <p><strong>Average Steps:</strong> {data.avgSteps}</p>
              <p><strong>Community Engagement:</strong> {data.engagement}</p>
              <p><strong>Top Performer:</strong> {data.topPerformer}</p>
            </>
          )}

          {reportType === 'trainer' && (
            <>
              <p><strong>Clients:</strong> {data.clients}</p>
              <p><strong>Plans Created:</strong> {data.plans}</p>
              <p><strong>Training Sessions:</strong> {data.sessions}</p>
              <p><strong>Average Client Progress:</strong> {data.avgProgress}%</p>
              <p><strong>Rating:</strong> {data.rating} / 5</p>
            </>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Back
          </button>

          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Print Report
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ReportDetail;