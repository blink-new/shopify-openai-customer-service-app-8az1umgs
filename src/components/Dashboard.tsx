import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to your Shopify OpenAI Customer Service App dashboard.</p>
      {/* Placeholder for dashboard content */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-700">Dashboard content will go here. You can display key metrics, recent activity, or quick links.</p>
      </div>
    </div>
  );
};

export default Dashboard;
