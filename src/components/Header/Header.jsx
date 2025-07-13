import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Paper,
} from '@mui/material';

const Header = ({ currentPage }) => {
  // Mapeo simplificado solo para títulos
  const pageInfo = {
    home: { title: 'Panel Principal' },
    'mi-score': { title: 'Mi Score' },
    leaderboard: { title: 'Tabla de Posiciones' },
    desarrollo: { title: 'Desarrollo' },
    frontend: { title: 'Frontend' },
    backend: { title: 'Backend' },
    diseno: { title: 'Diseño' },
    'ui-ux': { title: 'UI/UX' },
    marketing: { title: 'Marketing' },
    finanzas: { title: 'Finanzas' },
    profile: { title: 'Mi Perfil' },
    'profile-stats': { title: 'Estadísticas' },
    'profile-edit': { title: 'Editar Perfil' },
  };

  const currentPageInfo = pageInfo[currentPage] || { title: 'TrustArk' };

  return (
    <Paper 
      elevation={2}
      sx={{ 
        borderBottom: '1px solid rgba(7, 59, 76, 0.1)',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      }}
    >
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: 'transparent',
          borderRadius: 0,
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ 
          minHeight: '48px !important',
          px: 4,
          py: 0.5,
          backgroundColor: 'white',
          color: '#073B4C'
        }}>
          {/* Logo simplificado */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)',
              color: 'white',
              boxShadow: '0 2px 8px rgba(7, 59, 76, 0.15)'
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold',
                  letterSpacing: '-0.3px',
                  color: '#C1FF72',
                  fontSize: '1.1rem'
                }}
              >
                TrustArk
              </Typography>
              <Chip 
                label="PRO" 
                size="small" 
                sx={{ 
                  backgroundColor: '#C1FF72',
                  color: '#073B4C',
                  fontWeight: 'bold',
                  fontSize: '0.65rem',
                  height: '18px'
                }} 
              />
            </Box>
          </Box>

          {/* Título de la página */}
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: '600',
                color: '#073B4C',
                textAlign: 'center',
                letterSpacing: '-0.2px',
                fontSize: '1rem'
              }}
            >
              {currentPageInfo.title}
            </Typography>
          </Box>

          {/* Espacio vacío para balance visual */}
          <Box sx={{ width: '200px' }} />
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Header;
