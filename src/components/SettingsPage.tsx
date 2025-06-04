import React from 'react';
import { Settings } from 'lucide-react'; // Example icon

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Settings className="h-6 w-6 mr-2 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      </div>
      <p className="mt-2 text-gray-600">Configure your Shopify OpenAI app settings here.</p>
      {/* Placeholder for settings content */}
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">OpenAI Configuration</h2>
          <p className="text-sm text-gray-500">API Key, model selection, etc.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Shopify Connection</h2>
          <p className="text-sm text-gray-500">Store URL, API credentials, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
