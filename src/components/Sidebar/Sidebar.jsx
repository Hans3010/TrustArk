import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
  ];

  return (
    <div className="w-full h-screen bg-dark-gray flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-dark-cyan">
        <h2 className="text-xl font-bold text-green">TrustArk</h2>
        <p className="text-sm text-warm-gray opacity-75">Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
              currentPage === item.id
                ? 'bg-lime-green text-dark-gray font-semibold'
                : 'text-warm-gray hover:bg-dark-cyan hover:text-lime-green'
            }`}>
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-dark-cyan">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-dark-cyan">
          <div className="w-10 h-10 bg-lime-green rounded-full flex items-center justify-center">
            <span className="text-dark-gray font-bold">U</span>
          </div>
          <div className="flex-1">
            <p className="text-warm-gray font-medium">Usuario</p>
            <p className="text-sm text-warm-gray opacity-75">En línea</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
