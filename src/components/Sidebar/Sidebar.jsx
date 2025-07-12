import React, { useState } from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [selectedServer, setSelectedServer] = useState('dashboard');

  const servers = [
    { id: 'dashboard', icon: '🏠', name: 'Dashboard', color: '#c1ff72' },
    { id: 'analytics', icon: '📊', name: 'Analytics', color: '#4CAF50' },
    { id: 'users', icon: '�', name: 'Users', color: '#2196F3' },
    { id: 'settings', icon: '⚙️', name: 'Settings', color: '#FF9800' },
    { id: 'messages', icon: '💬', name: 'Messages', color: '#9C27B0' },
  ];

  const getServerChannels = (serverId) => {
    const channels = {
      dashboard: [
        { id: 'overview', name: 'overview', icon: '#' },
        { id: 'stats', name: 'estadísticas', icon: '#' },
        { id: 'reports', name: 'reportes', icon: '#' },
      ],
      analytics: [
        { id: 'charts', name: 'gráficos', icon: '#' },
        { id: 'data', name: 'datos', icon: '#' },
        { id: 'insights', name: 'insights', icon: '#' },
      ],
      users: [
        { id: 'active', name: 'usuarios-activos', icon: '#' },
        { id: 'pending', name: 'pendientes', icon: '#' },
        { id: 'banned', name: 'bloqueados', icon: '#' },
      ],
      settings: [
        { id: 'general', name: 'general', icon: '#' },
        { id: 'security', name: 'seguridad', icon: '#' },
        { id: 'permissions', name: 'permisos', icon: '#' },
      ],
      messages: [
        { id: 'inbox', name: 'bandeja-entrada', icon: '#' },
        { id: 'sent', name: 'enviados', icon: '#' },
        { id: 'drafts', name: 'borradores', icon: '#' },
      ],
    };
    return channels[serverId] || [];
  };

  return (
    <div className="flex h-screen">
      {/* Main Sidebar - Server Icons */}
      <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 space-y-2">
        {servers.map((server) => (
          <div key={server.id} className="relative group">
            <button
              onClick={() => {
                setSelectedServer(server.id);
                setCurrentPage(server.id);
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200 relative ${
                selectedServer === server.id
                  ? 'rounded-[16px] shadow-lg'
                  : 'hover:rounded-[16px] bg-[#313338] hover:bg-[#5865f2]'
              }`}
              style={{
                backgroundColor:
                  selectedServer === server.id ? server.color : undefined,
                color: selectedServer === server.id ? '#000' : '#fff',
              }}>
              {server.icon}
            </button>

            {/* Active indicator */}
            {selectedServer === server.id && (
              <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
            )}

            {/* Tooltip */}
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-[#111214] text-white px-3 py-2 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">
              {server.name}
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="w-8 h-[2px] bg-[#3f4147] rounded-full my-2"></div>

        {/* Add Server Button */}
        <button className="w-12 h-12 rounded-full bg-[#313338] hover:bg-[#23a559] hover:rounded-[16px] flex items-center justify-center text-[#23a559] hover:text-white transition-all duration-200 text-2xl font-bold">
          +
        </button>
      </div>

      {/* Secondary Sidebar - Channels */}
      <div className="w-[240px] bg-[#2b2d31] flex flex-col">
        {/* Server Header */}
        <div className="h-12 px-4 border-b border-[#1e1f22] flex items-center">
          <h2 className="text-white font-semibold text-base truncate">
            {servers.find((s) => s.id === selectedServer)?.name || 'TrustArk'}
          </h2>
        </div>

        {/* Channels List */}
        <div className="flex-1 p-2 overflow-y-auto">
          <div className="mb-4">
            <div className="px-2 mb-1">
              <h3 className="text-[#949ba4] text-xs font-semibold uppercase tracking-wide">
                Canales de texto
              </h3>
            </div>
            {getServerChannels(selectedServer).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setCurrentPage(channel.id)}
                className={`w-full flex items-center px-2 py-1 mx-1 rounded text-left hover:bg-[#404249] group ${
                  currentPage === channel.id
                    ? 'bg-[#404249] text-white'
                    : 'text-[#949ba4]'
                }`}>
                <span className="mr-2 text-[#949ba4]">{channel.icon}</span>
                <span className="text-sm font-medium">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* User Area */}
        <div className="h-[52px] bg-[#232428] px-2 flex items-center">
          <div className="flex items-center flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center mr-2">
              <span className="text-[#000] text-sm font-bold">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">
                Usuario
              </div>
              <div className="text-[#949ba4] text-xs truncate">En línea</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 rounded hover:bg-[#4f545c] flex items-center justify-center text-[#b5bac1] hover:text-[#dcddde]">
              🎙️
            </button>
            <button className="w-8 h-8 rounded hover:bg-[#4f545c] flex items-center justify-center text-[#b5bac1] hover:text-[#dcddde]">
              🎧
            </button>
            <button className="w-8 h-8 rounded hover:bg-[#4f545c] flex items-center justify-center text-[#b5bac1] hover:text-[#dcddde]">
              ⚙️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
