import React, { useState } from 'react';
import { Home, MessageSquare, BarChart3, Settings, Store, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import SettingsPage from './components/SettingsPage';
import Analytics from './components/Analytics';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Chat':
        return <ChatInterface />;
      case 'Analytics':
        return <Analytics />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Chat', icon: MessageSquare },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  const SidebarContent = () => (
    <nav className="flex flex-col space-y-1 p-2">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            setActivePage(item.name);
            setIsMobileMenuOpen(false); // Close mobile menu on item click
          }}
          className={cn(
            'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
            activePage === item.name
              ? 'bg-sky-100 text-sky-700'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          )}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.name}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 border-r border-gray-200 bg-white">
        <div className="flex items-center h-16 border-b border-gray-200 px-4">
          <Store className="h-8 w-8 text-sky-600" />
          <h1 className="ml-2 text-xl font-semibold text-gray-800">Shopify AI</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-500 bg-white shadow-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10 flex">
          <aside className="w-64 bg-white border-r border-gray-200 shadow-xl">
            <div className="flex items-center h-16 border-b border-gray-200 px-4">
              <Store className="h-8 w-8 text-sky-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-800">Shopify AI</h1>
            </div>
            <div className="flex-1 overflow-y-auto pt-2">
              <SidebarContent />
            </div>
          </aside>
          <div className="flex-1 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden h-16"></div> {/* Spacer for mobile header */}
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
