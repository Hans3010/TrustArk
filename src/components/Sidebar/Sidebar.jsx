import { useState } from "react";
import { 
  Box, 
  Tooltip, 
  Avatar, 
  Typography, 
  Chip,
  Paper,
  Divider 
} from '@mui/material';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [selectedServer, setSelectedServer] = useState('home');

  const servers = [
    { id: "home", icon: "🏠", name: "Dashboard", color: "#c1ff72" },
    { id: "desarrollo", icon: "💻", name: "Desarrollo", color: "#c1ff72" },
    { id: "diseno", icon: "🎨", name: "Diseño", color: "#c1ff72" },
    { id: "marketing", icon: "📈", name: "Marketing", color: "#c1ff72" },
    { id: "finanzas", icon: "💰", name: "Finanzas", color: "#c1ff72" },
  ];

  const getServerChannels = (serverId) => {
    const channels = {
      home: [
        { id: "mi-score", name: "Mi Puntaje", icon: "⭐" },
        { id: "leaderboard", name: "Ranking Global", icon: "🏆" },
        { id: "certificados", name: "NFT Certificados", icon: "🎖️" },
        { id: "progreso", name: "Mi Progreso", icon: "📊" },
        { id: "wallet", name: "Mi Wallet", icon: "👛" },
      ],
      desarrollo: [
        { id: "javascript-course", name: "JavaScript Completo", icon: "🟨", students: "2.1k", level: "Principiante" },
        { id: "python-course", name: "Python & Web3", icon: "🐍", students: "1.8k", level: "Intermedio" },
        { id: "react-course", name: "React + DApps", icon: "⚛️", students: "1.5k", level: "Avanzado" },
        { id: "solidity-course", name: "Solidity Mastery", icon: "💎", students: "950", level: "Avanzado" },
        { id: "blockchain-course", name: "Blockchain Dev", icon: "⛓️", students: "1.2k", level: "Intermedio" },
        { id: "devops-course", name: "DevOps & Cloud", icon: "🚀", students: "800", level: "Avanzado" },
      ],
      diseno: [
        { id: "ui-ux-course", name: "UI/UX para Web3", icon: "🎭", students: "1.3k", level: "Intermedio" },
        { id: "nft-design", name: "Diseño de NFTs", icon: "🖼️", students: "2.2k", level: "Principiante" },
        { id: "figma-course", name: "Figma Avanzado", icon: "🎨", students: "1.7k", level: "Intermedio" },
        { id: "3d-design", name: "Diseño 3D", icon: "🎯", students: "900", level: "Avanzado" },
        { id: "branding-course", name: "Branding Digital", icon: "🏷️", students: "1.1k", level: "Intermedio" },
      ],
      marketing: [
        { id: "crypto-marketing", name: "Marketing Crypto", icon: "📊", students: "1.6k", level: "Intermedio" },
        { id: "community-course", name: "Community Building", icon: "👥", students: "1.4k", level: "Principiante" },
        { id: "defi-marketing", name: "DeFi Marketing", icon: "🔄", students: "800", level: "Avanzado" },
        { id: "social-web3", name: "Social Media Web3", icon: "📲", students: "1.2k", level: "Intermedio" },
        { id: "analytics-course", name: "Analytics & Data", icon: "📈", students: "950", level: "Intermedio" },
      ],
      finanzas: [
        { id: "defi-course", name: "DeFi Completo", icon: "🏦", students: "2.5k", level: "Intermedio" },
        { id: "trading-course", name: "Trading Cripto", icon: "💹", students: "3.1k", level: "Principiante" },
        { id: "yield-farming", name: "Yield Farming", icon: "🌾", students: "1.2k", level: "Avanzado" },
        { id: "portfolio-course", name: "Portfolio Web3", icon: "📋", students: "1.8k", level: "Intermedio" },
        { id: "tokenomics", name: "Tokenomics", icon: "🪙", students: "900", level: "Avanzado" },
      ],
    };
    return channels[serverId] || [];
  };

  return (
    <div className="flex h-screen relative">
      {/* Main Sidebar - Server Icons con Material UI */}
      <Paper 
        elevation={3}
        sx={{ 
          width: '72px',
          backgroundColor: '#073b4c',
          borderRadius: 0,
          borderRight: '1px solid rgba(193, 255, 114, 0.1)',
          boxShadow: '4px 0 12px rgba(7, 59, 76, 0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box className="flex flex-col items-center py-3 space-y-2" sx={{ height: 'calc(100% - 64px)' }}>
          {servers.map((server) => (
            <Box key={server.id} className="relative group">
              <Tooltip 
                title={server.name} 
                placement="right"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: '#222222',
                      color: '#e4dfda',
                      border: '1px solid #073b4c',
                      fontSize: '0.875rem',
                      fontWeight: 'medium'
                    }
                  },
                  arrow: {
                    sx: {
                      color: '#222222'
                    }
                  }
                }}
              >
                <Paper
                  onClick={() => {
                    setSelectedServer(server.id);
                    setCurrentPage(server.id);
                  }}
                  elevation={selectedServer === server.id ? 6 : 2}
                  sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: selectedServer === server.id ? '16px' : '50%',
                    backgroundColor: selectedServer === server.id ? server.color : '#222222',
                    color: selectedServer === server.id ? '#073b4c' : '#e4dfda',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    border: selectedServer === server.id ? '2px solid rgba(255,255,255,0.2)' : '2px solid transparent',
                    '&:hover': {
                      borderRadius: '16px',
                      backgroundColor: selectedServer === server.id ? server.color : '#073b4c',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(193, 255, 114, 0.2)'
                    }
                  }}
                >
                  {server.icon}
                </Paper>
              </Tooltip>

              {/* Active indicator mejorado */}
              {selectedServer === server.id && (
                <Box sx={{
                  position: 'absolute',
                  left: -4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 4,
                  height: 32,
                  backgroundColor: '#c1ff72',
                  borderRadius: '0 8px 8px 0',
                  boxShadow: '2px 0 8px rgba(193, 255, 114, 0.4)'
                }} />
              )}
            </Box>
          ))}

          {/* Divider mejorado */}
          <Divider 
            sx={{ 
              width: 32, 
              height: 2, 
              backgroundColor: '#222222', 
              borderRadius: 1,
              my: 1
            }} 
          />

          {/* Add Server Button mejorado */}
          <Tooltip title="Agregar Área" placement="right" arrow>
            <Paper
              elevation={2}
              sx={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: '#222222',
                color: '#c1ff72',
                cursor: 'pointer',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                border: '2px dashed rgba(193, 255, 114, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderRadius: '16px',
                  backgroundColor: '#c1ff72',
                  color: '#073b4c',
                  borderStyle: 'solid',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(193, 255, 114, 0.3)'
                }
              }}
            >
              +
            </Paper>
          </Tooltip>
        </Box>

      </Paper>

      {/* Secondary Sidebar - Channels con Material UI */}
      <Paper 
        elevation={2}
        sx={{ 
          width: 240,
          backgroundColor: '#073b4c',
          borderRadius: 0,
          borderRight: '1px solid rgba(193, 255, 114, 0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Server Header simplificado */}
        <Box sx={{ 
          height: 48, 
          px: 2, 
          borderBottom: '1px solid rgba(34, 34, 34, 0.5)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(34, 34, 34, 0.3)'
        }}>
          <Typography variant="h6" sx={{ 
            color: '#e4dfda', 
            fontWeight: 'bold',
            fontSize: '1rem',
            truncate: true
          }}>
            {servers.find((s) => s.id === selectedServer)?.name || "TrustArk"}
          </Typography>
        </Box>

        {/* Channels List mejorada para cursos con datos adicionales */}
        <Box sx={{ flex: 1, p: 1, overflowY: 'auto', paddingBottom: '64px' }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ px: 1, mb: 1 }}>
              <Typography variant="caption" sx={{ 
                color: 'rgba(228, 223, 218, 0.75)',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {selectedServer === "home"
                  ? "Mi Dashboard Web3"
                  : "Cursos Disponibles"}
              </Typography>
            </Box>
            {getServerChannels(selectedServer).map((channel) => (
              <Paper
                key={channel.id}
                onClick={() => setCurrentPage(channel.id)}
                elevation={currentPage === channel.id ? 2 : 0}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  px: 1.5,
                  py: 0.75,
                  mx: 0.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  backgroundColor: currentPage === channel.id ? '#222222' : 'transparent',
                  color: currentPage === channel.id ? '#c1ff72' : 'rgba(228, 223, 218, 0.75)',
                  border: currentPage === channel.id ? '1px solid rgba(193, 255, 114, 0.3)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: currentPage === channel.id ? '#222222' : 'rgba(34, 34, 34, 0.5)',
                    color: currentPage === channel.id ? '#c1ff72' : '#e4dfda',
                    transform: 'translateX(4px)',
                    borderColor: 'rgba(193, 255, 114, 0.2)'
                  }
                }}
              >
                <Typography sx={{ 
                  mr: 1.5, 
                  fontSize: '1rem',
                  opacity: 0.8
                }}>
                  {channel.icon}
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 'medium',
                    fontSize: '0.875rem'
                  }}>
                    {channel.name}
                  </Typography>
                  {/* Información adicional para cursos */}
                  {channel.students && channel.level && (
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 0.25 }}>
                      <Chip 
                        label={channel.students} 
                        size="small" 
                        sx={{ 
                          height: 16, 
                          fontSize: '0.6rem',
                          backgroundColor: 'rgba(193, 255, 114, 0.2)',
                          color: '#c1ff72',
                          border: '1px solid rgba(193, 255, 114, 0.3)'
                        }} 
                      />
                      <Chip 
                        label={channel.level} 
                        size="small" 
                        sx={{ 
                          height: 16, 
                          fontSize: '0.6rem',
                          backgroundColor: 'rgba(7, 59, 76, 0.5)',
                          color: '#e4dfda',
                          border: '1px solid rgba(228, 223, 218, 0.3)'
                        }} 
                      />
                    </Box>
                  )}
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* User Area - Bloque unificado estilo Discord */}
      <Paper
        elevation={4}
        sx={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 312, // 72px + 240px = ancho total de sidebar
          height: 64,
          backgroundColor: '#222222',
          borderTop: '1px solid rgba(7, 59, 76, 0.8)',
          borderRadius: 0,
          display: 'flex',
          alignItems: 'center',
          px: 1.5,
          zIndex: 10
        }}
      >
        <Avatar 
          onClick={() => setCurrentPage('profile')}
          sx={{ 
            width: 40, 
            height: 40,
            backgroundColor: '#c1ff72',
            color: '#073b4c',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '2px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            mr: 1.5,
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(193, 255, 114, 0.3)'
            }
          }}
        >
          U
        </Avatar>
        
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" sx={{ 
            fontWeight: 'bold',
            fontSize: '0.875rem',
            lineHeight: 1.2,
            color: '#e4dfda',
            truncate: true
          }}>
            Usuario TrustArk
          </Typography>
          <Typography variant="caption" sx={{ 
            opacity: 0.8,
            fontSize: '0.75rem',
            lineHeight: 1.2,
            color: '#c1ff72'
          }}>
            Wallet conectada
          </Typography>
        </Box>
        
        <Tooltip title="Configuración" placement="top">
          <Paper
            elevation={1}
            sx={{
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              ml: 1,
              backgroundColor: 'rgba(228, 223, 218, 0.1)',
              color: '#e4dfda',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#c1ff72',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 8px rgba(193, 255, 114, 0.2)'
              }
            }}
          >
            ⚙️
          </Paper>
        </Tooltip>
      </Paper>
    </div>
  );
};

export default Sidebar;

