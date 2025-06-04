import React from 'react';
import { BarChart3 } from 'lucide-react'; // Example icon

const Analytics: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <BarChart3 className="h-6 w-6 mr-2 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Analytics</h1>
      </div>
      <p className="mt-2 text-gray-600">View insights and performance metrics for your customer service interactions.</p>
      {/* Placeholder for analytics content */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-700">Analytics charts and data will be displayed here.</p>
      </div>
    </div>
  );
};

export default Analytics;
