import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Paper,
  Avatar,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Divider
} from '@mui/material';
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaChartLine,
  FaCrown,
  FaFire,
  FaCode,
  FaPalette,
  FaChartPie,
  FaServer,
  FaCubes,
  FaBullhorn,
  FaCoins,
  FaRocket,
  FaUsers
} from 'react-icons/fa';

const Leaderboard = () => {
  const rankings = [
    {
      rank: 1,
      name: 'Alex Martinez',
      score: 4250,
      specialty: 'Full Stack Development',
      avatar: 'https://ui-avatars.io/api/?name=Alex+Martinez&background=FFD700&color=000',
      country: 'España',
      change: '+85',
      trend: 'up',
      specialtyIcon: FaCode,
      verified: true,
      level: 'Expert'
    },
    {
      rank: 2,
      name: 'Sofia Chen',
      score: 4100,
      specialty: 'UI/UX Design',
      avatar: 'https://ui-avatars.io/api/?name=Sofia+Chen&background=C0C0C0&color=000',
      country: 'China',
      change: '+62',
      trend: 'up',
      specialtyIcon: FaPalette,
      verified: true,
      level: 'Expert'
    },
    {
      rank: 3,
      name: 'Carlos Rodriguez',
      score: 3950,
      specialty: 'DevOps Engineer',
      avatar: 'https://ui-avatars.io/api/?name=Carlos+Rodriguez&background=CD7F32&color=000',
      country: 'México',
      change: '+41',
      trend: 'up',
      specialtyIcon: FaServer,
      verified: true,
      level: 'Expert'
    },
    {
      rank: 4,
      name: 'Elena Popov',
      score: 3850,
      specialty: 'Data Science',
      avatar: 'https://ui-avatars.io/api/?name=Elena+Popov&background=9C27B0&color=fff',
      country: 'Rusia',
      change: '+38',
      trend: 'up',
      specialtyIcon: FaChartPie,
      verified: true,
      level: 'Advanced'
    },
    {
      rank: 5,
      name: 'Ahmed Hassan',
      score: 3720,
      specialty: 'Blockchain Developer',
      avatar: 'https://ui-avatars.io/api/?name=Ahmed+Hassan&background=607D8B&color=fff',
      country: 'Egipto',
      change: '+29',
      trend: 'up',
      specialtyIcon: FaCubes,
      verified: true,
      level: 'Advanced'
    },
    {
      rank: 6,
      name: 'Maria Silva',
      score: 3680,
      specialty: 'Digital Marketing',
      avatar: 'https://ui-avatars.io/api/?name=Maria+Silva&background=FF9800&color=000',
      country: 'Brasil',
      change: '+15',
      trend: 'up',
      specialtyIcon: FaBullhorn,
      verified: true,
      level: 'Advanced'
    },
    {
      rank: 7,
      name: 'John Smith',
      score: 3590,
      specialty: 'Financial Analyst',
      avatar: 'https://ui-avatars.io/api/?name=John+Smith&background=4CAF50&color=000',
      country: 'EE.UU.',
      change: '+12',
      trend: 'up',
      specialtyIcon: FaCoins,
      verified: true,
      level: 'Advanced'
    },
    {
      rank: 42,
      name: 'Alex Rivera (Tú)',
      score: 2875,
      specialty: 'Frontend Developer',
      avatar: 'https://ui-avatars.io/api/?name=Alex+Rivera&background=073B4C&color=fff',
      country: 'Perú',
      change: '+120',
      trend: 'up',
      specialtyIcon: FaCode,
      verified: true,
      level: 'Advanced',
      isCurrentUser: true
    },
  ];

  const currentUser = rankings.find(user => user.isCurrentUser);
  const topUsers = rankings.filter(user => !user.isCurrentUser);

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return '#FFD700';
    if (rank === 2) return '#C0C0C0';
    if (rank === 3) return '#CD7F32';
    return '#E0E0E0';
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return '#E74C3C';
      case 'Advanced': return '#F39C12';
      case 'Intermediate': return '#3498DB';
      default: return '#95A5A6';
    }
  };

  return (
    <Container maxWidth={false} sx={{ py: 3, px: 2, maxWidth: 'calc(100vw - 280px)' }}>
      {/* Header Section */}
      <Box sx={{ 
        mb: 5, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
        borderRadius: 4,
        p: 5,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'rgba(193, 255, 114, 0.1)',
          zIndex: 1
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'rgba(193, 255, 114, 0.08)',
          zIndex: 1
        }} />
        
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <FaTrophy style={{ 
            fontSize: '64px', 
            color: '#C1FF72', 
            marginBottom: '16px',
            filter: 'drop-shadow(0 4px 8px rgba(193, 255, 114, 0.3))'
          }} />
          
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            color="#C1FF72" 
            sx={{ 
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #C1FF72, #A8E063)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Ranking Global TrustArk
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 1,
            mb: 2
          }}>
            <Box sx={{ 
              width: 40, 
              height: 1, 
              backgroundColor: '#C1FF72',
              opacity: 0.6
            }} />
            <FaStar style={{ color: '#C1FF72', fontSize: '16px' }} />
            <Box sx={{ 
              width: 40, 
              height: 1, 
              backgroundColor: '#C1FF72',
              opacity: 0.6
            }} />
          </Box>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3,
              opacity: 0.95,
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            Compite con profesionales de todo el mundo
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Chip 
              icon={<FaCubes style={{ fontSize: '14px' }} />}
              label="Validación Blockchain"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)'
              }}
            />
            <Chip 
              icon={<FaChartLine style={{ fontSize: '14px' }} />}
              label="Rankings en Tiempo Real"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)'
              }}
            />
            <Chip 
              icon={<FaUsers style={{ fontSize: '14px' }} />}
              label="Comunidad Global"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Tu Posición Actual */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: '0 8px 32px rgba(193, 255, 114, 0.3)',
            border: '2px solid #C1FF72',
            background: 'linear-gradient(135deg, #C1FF72 0%, #A8E063 100%)'
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar 
                    src={currentUser.avatar}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      border: '4px solid #073B4C'
                    }}
                  />
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="#073B4C" sx={{ mb: 1 }}>
                      Tu Posición Actual
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Typography variant="h5" color="#073B4C">
                        Ranking Global #{currentUser.rank}
                      </Typography>
                      <Chip 
                        label={currentUser.change}
                        color="success"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Box>
                    <Typography variant="body1" color="#073B4C" sx={{ opacity: 0.8 }}>
                      {currentUser.specialty} • {currentUser.country}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h3" fontWeight="bold" color="#073B4C">
                    {currentUser.score.toLocaleString()}
                  </Typography>
                  <Typography variant="h6" color="#073B4C" sx={{ opacity: 0.8 }}>
                    puntos
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Estadísticas Globales */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaCrown style={{ color: '#FFD700', fontSize: '32px', marginBottom: '8px' }} />
            <Typography variant="h4" fontWeight="bold" color="#FFD700">
              4,250
            </Typography>
            <Typography variant="body2" color="#666">
              Puntuación Líder
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaFire style={{ color: '#E74C3C', fontSize: '32px', marginBottom: '8px' }} />
            <Typography variant="h4" fontWeight="bold" color="#E74C3C">
              127
            </Typography>
            <Typography variant="body2" color="#666">
              Lugares Subidos
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaChartLine style={{ color: '#27AE60', fontSize: '32px', marginBottom: '8px' }} />
            <Typography variant="h4" fontWeight="bold" color="#27AE60">
              2,875
            </Typography>
            <Typography variant="body2" color="#666">
              Tu Puntuación
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaRocket style={{ color: '#3498DB', fontSize: '32px', marginBottom: '8px' }} />
            <Typography variant="h4" fontWeight="bold" color="#3498DB">
              1,375
            </Typography>
            <Typography variant="body2" color="#666">
              Para Top 10
            </Typography>
          </Paper>
        </Grid>

        {/* Ranking Table */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaTrophy style={{ color: '#F39C12', fontSize: '28px', marginRight: '12px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Top Performers Global
                </Typography>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F8F9FA' }}>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Posición</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Profesional</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Especialidad</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>País</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Puntuación</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Cambio</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C' }}>Nivel</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topUsers.map((user) => {
                      const SpecialtyIcon = user.specialtyIcon;
                      return (
                        <TableRow 
                          key={user.rank}
                          sx={{ 
                            '&:hover': { backgroundColor: '#F8F9FA' },
                            ...(user.rank <= 3 && { backgroundColor: '#FFF5E1' })
                          }}
                        >
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: getRankBadgeColor(user.rank),
                                color: user.rank <= 3 ? '#000' : '#666',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                mr: 1,
                                fontSize: '14px'
                              }}>
                                {user.rank}
                              </Box>
                              {user.rank <= 3 && (
                                <FaMedal style={{ 
                                  color: user.rank === 1 ? '#FFD700' : 
                                        user.rank === 2 ? '#C0C0C0' : '#CD7F32',
                                  fontSize: '16px'
                                }} />
                              )}
                            </Box>
                          </TableCell>
                          
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar 
                                src={user.avatar} 
                                sx={{ width: 36, height: 36, mr: 2 }}
                              />
                              <Box>
                                <Typography 
                                  variant="subtitle2" 
                                  fontWeight="bold"
                                  color="#073B4C"
                                >
                                  {user.name}
                                </Typography>
                                {user.verified && (
                                  <Chip 
                                    label="Verificado"
                                    size="small"
                                    color="success"
                                    variant="outlined"
                                    sx={{ fontSize: '10px', height: '18px' }}
                                  />
                                )}
                              </Box>
                            </Box>
                          </TableCell>
                          
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <SpecialtyIcon style={{ 
                                color: '#666', 
                                fontSize: '16px', 
                                marginRight: '8px' 
                              }} />
                              <Typography variant="body2" color="#666">
                                {user.specialty}
                              </Typography>
                            </Box>
                          </TableCell>
                          
                          <TableCell>
                            <Typography variant="body2" color="#666">
                              {user.country}
                            </Typography>
                          </TableCell>
                          
                          <TableCell>
                            <Typography variant="h6" fontWeight="bold" color="#073B4C">
                              {user.score.toLocaleString()}
                            </Typography>
                          </TableCell>
                          
                          <TableCell>
                            <Chip 
                              label={user.change}
                              size="small"
                              color="success"
                              variant="outlined"
                              sx={{ fontWeight: 'bold' }}
                            />
                          </TableCell>
                          
                          <TableCell>
                            <Chip 
                              label={user.level}
                              size="small"
                              sx={{
                                backgroundColor: getLevelColor(user.level) + '20',
                                color: getLevelColor(user.level),
                                fontWeight: 'bold'
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Call to Action */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
            color: 'white'
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <FaRocket style={{ fontSize: '48px', color: '#C1FF72', marginBottom: '16px' }} />
              
              <Typography variant="h4" fontWeight="bold" color="#C1FF72" sx={{ mb: 2 }}>
                ¿Quieres escalar posiciones?
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Completa más evaluaciones, obtén certificaciones y mejora tu score de confianza
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button 
                  variant="contained"
                  size="large"
                  sx={{ 
                    backgroundColor: '#C1FF72', 
                    color: '#073B4C',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#A8E063' }
                  }}
                >
                  Ver Exámenes Disponibles
                </Button>
                
                <Button 
                  variant="outlined"
                  size="large"
                  sx={{ 
                    borderColor: '#C1FF72', 
                    color: '#C1FF72',
                    fontWeight: 'bold',
                    '&:hover': { borderColor: '#A8E063', backgroundColor: 'rgba(193, 255, 114, 0.1)' }
                  }}
                >
                  Obtener Certificaciones
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Leaderboard;
