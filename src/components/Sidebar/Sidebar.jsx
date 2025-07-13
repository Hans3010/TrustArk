import { useState } from 'react';
import {
  FaHome,
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaDollarSign,
  FaMedkit,
  FaGraduationCap,
  FaStar,
  FaTrophy,
  FaCertificate,
  FaImage,
  FaGlobe,
  FaCogs,
  FaLink,
  FaMobile,
  FaRocket,
  FaEthereum,
  FaTheaterMasks,
  FaPhotoVideo,
  FaPalette,
  FaRuler,
  FaTags,
  FaChartBar,
  FaShare,
  FaSearch,
  FaEdit,
  FaEnvelope,
  FaClipboardList,
  FaCalculator,
  FaBitcoin,
  FaUniversity,
  FaStethoscope,
  FaPills,
  FaMicroscope,
  FaBrain,
  FaChalkboardTeacher,
  FaLanguage,
  FaSquareRootAlt,
  FaFlask,
  FaPlus,
  FaUser,
  FaCog,
} from 'react-icons/fa';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [selectedServer, setSelectedServer] = useState('home');

  const servers = [
    { id: 'home', icon: FaHome, name: 'Home', color: '#c1ff72' },
    { id: 'desarrollo', icon: FaCode, name: 'Desarrollo', color: '#4CAF50' },
    { id: 'diseno', icon: FaPaintBrush, name: 'Diseño', color: '#E91E63' },
    { id: 'marketing', icon: FaChartLine, name: 'Marketing', color: '#FF9800' },
    { id: 'finanzas', icon: FaDollarSign, name: 'Finanzas', color: '#2196F3' },
    { id: 'medicina', icon: FaMedkit, name: 'Medicina', color: '#f44336' },
    {
      id: 'educacion',
      icon: FaGraduationCap,
      name: 'Educación',
      color: '#9C27B0',
    },
  ];

  const getServerChannels = (serverId) => {
    const channels = {
      home: [
        { id: 'mi-score', name: 'mi-score', icon: FaStar },
        { id: 'leaderboard', name: 'tabla-posiciones', icon: FaTrophy },
        { id: 'certificados', name: 'mis-certificados', icon: FaCertificate },
        { id: 'nft', name: 'mi-nft', icon: FaImage },
      ],
      desarrollo: [
        { id: 'frontend', name: 'frontend', icon: FaGlobe },
        { id: 'backend', name: 'backend', icon: FaCogs },
        { id: 'fullstack', name: 'fullstack', icon: FaLink },
        { id: 'mobile', name: 'mobile', icon: FaMobile },
        { id: 'devops', name: 'devops', icon: FaRocket },
        { id: 'blockchain', name: 'blockchain', icon: FaEthereum },
      ],
      diseno: [
        { id: 'ui-ux', name: 'ui-ux', icon: FaTheaterMasks },
        { id: 'grafico', name: 'diseño-gráfico', icon: FaPhotoVideo },
        { id: 'web', name: 'diseño-web', icon: FaPalette },
        { id: 'producto', name: 'diseño-producto', icon: FaRuler },
        { id: 'branding', name: 'branding', icon: FaTags },
      ],
      marketing: [
        { id: 'digital', name: 'marketing-digital', icon: FaChartBar },
        { id: 'social-media', name: 'redes-sociales', icon: FaShare },
        { id: 'seo', name: 'seo-sem', icon: FaSearch },
        { id: 'contenido', name: 'marketing-contenido', icon: FaEdit },
        { id: 'email', name: 'email-marketing', icon: FaEnvelope },
      ],
      finanzas: [
        { id: 'contabilidad', name: 'contabilidad', icon: FaClipboardList },
        { id: 'analisis', name: 'análisis-financiero', icon: FaCalculator },
        { id: 'criptomonedas', name: 'criptomonedas', icon: FaBitcoin },
        { id: 'fintech', name: 'fintech', icon: FaUniversity },
      ],
      medicina: [
        { id: 'clinica', name: 'medicina-clínica', icon: FaStethoscope },
        { id: 'enfermeria', name: 'enfermería', icon: FaPills },
        { id: 'radiologia', name: 'radiología', icon: FaMicroscope },
        { id: 'psicologia', name: 'psicología', icon: FaBrain },
      ],
      educacion: [
        { id: 'pedagogia', name: 'pedagogía', icon: FaChalkboardTeacher },
        { id: 'idiomas', name: 'idiomas', icon: FaLanguage },
        { id: 'matematicas', name: 'matemáticas', icon: FaSquareRootAlt },
        { id: 'ciencias', name: 'ciencias', icon: FaFlask },
      ],
    };
    return channels[serverId] || [];
  };

  return (
    <div className="flex h-screen">
      {/* Main Sidebar - Server Icons */}
      <div className="w-[72px] bg-[#222222] flex flex-col items-center py-3 space-y-2">
        {servers.map((server) => {
          const IconComponent = server.icon;
          return (
            <div key={server.id} className="relative group">
              <button
                onClick={() => {
                  setSelectedServer(server.id);
                  setCurrentPage(server.id);
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-200 relative ${
                  selectedServer === server.id
                    ? 'rounded-[16px] shadow-lg'
                    : 'hover:rounded-[16px] bg-[#222222] hover:bg-[#073b4c]'
                }`}
                style={{
                  backgroundColor:
                    selectedServer === server.id ? server.color : undefined,
                  color: selectedServer === server.id ? '#222222' : '#e4dfda',
                }}>
                <IconComponent size={20} />
              </button>

              {/* Active indicator */}
              {selectedServer === server.id && (
                <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#c1ff72] rounded-r-full"></div>
              )}

              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-[#073b4c] text-[#e4dfda] px-3 py-2 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap border border-[#c1ff72]">
                {server.name}
              </div>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-8 h-[2px] bg-[#073b4c] rounded-full my-2"></div>

        {/* Add Server Button */}
        <button className="w-12 h-12 rounded-full bg-[#073b4c] hover:bg-[#c1ff72] hover:rounded-[16px] flex items-center justify-center text-[#c1ff72] hover:text-[#222222] transition-all duration-200">
          <FaPlus size={16} />
        </button>
      </div>

      {/* Secondary Sidebar - Channels */}
      <div className="w-[240px] bg-[#073b4c] flex flex-col">
        {/* Server Header */}
        <div className="h-12 px-4 border-b border-[#222222] flex items-center">
          <h2 className="text-[#e4dfda] font-semibold text-base truncate">
            {servers.find((s) => s.id === selectedServer)?.name || 'TrustArk'}
          </h2>
        </div>

        {/* Channels List */}
        <div className="flex-1 p-2 overflow-y-auto">
          <div className="mb-4">
            <div className="px-2 mb-1">
              <h3 className="text-[#e4dfda] opacity-75 text-xs font-semibold uppercase tracking-wide">
                {selectedServer === 'home'
                  ? 'Panel Principal'
                  : 'Áreas de Evaluación'}
              </h3>
            </div>
            {getServerChannels(selectedServer).map((channel) => {
              const ChannelIcon = channel.icon;
              return (
                <button
                  key={channel.id}
                  onClick={() => setCurrentPage(channel.id)}
                  className={`w-full flex items-center px-2 py-2 mx-1 rounded text-left hover:bg-[#222222] group transition-colors ${
                    currentPage === channel.id
                      ? 'bg-[#222222] text-[#c1ff72]'
                      : 'text-[#e4dfda] opacity-75 hover:opacity-100'
                  }`}>
                  <ChannelIcon
                    size={16}
                    className={`mr-3 ${
                      currentPage === channel.id
                        ? 'text-[#c1ff72]'
                        : 'text-[#e4dfda] opacity-75'
                    }`}
                  />
                  <span className="text-sm font-medium">{channel.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* User Area */}
        <div className="h-[52px] bg-[#222222] px-2 flex items-center">
          <button
            onClick={() => setCurrentPage('profile')}
            className="flex items-center flex-1 min-w-0 hover:bg-[#073b4c] rounded px-2 py-1 transition-colors duration-200">
            <div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center mr-3">
              <FaUser size={14} className="text-[#222222]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#e4dfda] text-sm font-medium truncate">
                Usuario
              </div>
              <div className="text-[#c1ff72] text-xs truncate">En línea</div>
            </div>
          </button>
          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 rounded hover:bg-[#073b4c] flex items-center justify-center text-[#e4dfda] opacity-75 hover:text-[#c1ff72] transition-colors">
              <FaCog size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
