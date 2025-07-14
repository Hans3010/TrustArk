import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Paper,
  Divider
} from '@mui/material';
import {
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaMedal,
  FaFire,
  FaStar,
  FaGraduationCap,
  FaBook,
  FaCalendar,
  FaCertificate,
  FaCheckCircle,
  FaUserTie
} from 'react-icons/fa';

const Home = () => {
  // Datos del usuario actual (datos personales)
  const currentUser = {
    name: 'Alex Rivera',
    avatar: 'https://ui-avatars.io/api/?name=Alex+Rivera&background=073B4C&color=fff',
    score: 2875,
    rank: 3,
    completedCourses: 12,
    certificatesEarned: 8,
    examsPassed: 24,
    totalStudyHours: 187,
    weeklyProgress: 85,
    skillLevel: 'Advanced',
    web3Verified: true
  };

  // Datos de la tabla de posiciones (ranking)
  const leaderboard = [
    { 
      rank: 1, 
      name: 'Sofia Chen', 
      avatar: 'https://ui-avatars.io/api/?name=Sofia+Chen&background=27AE60&color=fff',
      score: 3500, 
      change: '+150', 
      trend: 'up',
      certificates: 15,
      web3Address: '0x1a2b...3c4d'
    },
    { 
      rank: 2, 
      name: 'Carlos Mendoza', 
      avatar: 'https://ui-avatars.io/api/?name=Carlos+Mendoza&background=3498DB&color=fff',
      score: 3100, 
      change: '+95', 
      trend: 'up',
      certificates: 12,
      web3Address: '0x5e6f...7g8h'
    },
    { 
      rank: 3, 
      name: 'Alex Rivera', 
      avatar: 'https://ui-avatars.io/api/?name=Alex+Rivera&background=073B4C&color=fff',
      score: 2875, 
      change: '+120', 
      trend: 'up',
      certificates: 8,
      web3Address: '0x9i0j...1k2l',
      isCurrentUser: true
    },
    { 
      rank: 4, 
      name: 'María González', 
      avatar: 'https://ui-avatars.io/api/?name=Maria+Gonzalez&background=E74C3C&color=fff',
      score: 2850, 
      change: '+80', 
      trend: 'up',
      certificates: 10,
      web3Address: '0x3m4n...5o6p'
    },
    { 
      rank: 5, 
      name: 'Ana Silva', 
      avatar: 'https://ui-avatars.io/api/?name=Ana+Silva&background=9B59B6&color=fff',
      score: 2650, 
      change: '-20', 
      trend: 'down',
      certificates: 7,
      web3Address: '0x7q8r...9s0t'
    }
  ];

  // Datos de certificaciones y exámenes
  const certificationData = {
    totalCertificates: 8,
    examsPassed: 24,
    totalExams: 30,
    passRate: 80,
    recentCertificates: [
      { name: 'Blockchain Fundamentals', date: '2024-12-15', level: 'Advanced', verified: true },
      { name: 'Smart Contracts', date: '2024-11-28', level: 'Expert', verified: true },
      { name: 'DeFi Protocols', date: '2024-10-20', level: 'Advanced', verified: true },
      { name: 'Web3 Security', date: '2024-09-15', level: 'Intermediate', verified: true }
    ]
  };

  return (
    <Container maxWidth={false} sx={{ py: 3, px: 2, maxWidth: 'calc(100vw - 280px)' }}>

      <Grid container spacing={3}>
        {/* BLOQUE 1: DASHBOARD PERSONAL */}
        <Grid item xs={12} xl={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaUserTie style={{ color: '#073B4C', fontSize: '24px', marginRight: '8px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Dashboard Personal
                </Typography>
                {currentUser.web3Verified && (
                  <Chip 
                    label="✓ Web3 Verified" 
                    color="success" 
                    variant="outlined" 
                    size="small"
                    sx={{ ml: 2, fontWeight: 'bold' }}
                  />
                )}
              </Box>

              <Grid container spacing={2}>
                {/* Información del usuario */}
                <Grid item xs={12}>
                  <Card sx={{ 
                    background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
                    color: 'white',
                    borderRadius: 3
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 2.5 }}>
                      <Avatar 
                        src={currentUser.avatar}
                        sx={{ 
                          width: 70, 
                          height: 70, 
                          mx: 'auto', 
                          mb: 1.5,
                          border: '3px solid #C1FF72'
                        }}
                      />
                      <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                        {currentUser.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1.5 }}>
                        Nivel {currentUser.skillLevel}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        mb: 1
                      }}>
                        <FaTrophy style={{ color: '#C1FF72', marginRight: '6px' }} />
                        <Typography variant="subtitle1" fontWeight="bold">
                          Rank #{currentUser.rank}
                        </Typography>
                      </Box>
                      <Typography variant="h4" fontWeight="bold" color="#C1FF72">
                        {currentUser.score.toLocaleString()} pts
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Resumen de logros */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#073B4C" sx={{ mb: 2 }}>
                      Resumen de Logros
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FaBook style={{ color: '#F39C12', marginRight: '6px', fontSize: '16px' }} />
                          <Typography variant="body2">Cursos Completados</Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" color="#F39C12">
                          {currentUser.completedCourses}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FaCertificate style={{ color: '#E74C3C', marginRight: '6px', fontSize: '16px' }} />
                          <Typography variant="body2">Certificados</Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" color="#E74C3C">
                          {currentUser.certificatesEarned}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FaCheckCircle style={{ color: '#27AE60', marginRight: '6px', fontSize: '16px' }} />
                          <Typography variant="body2">Exámenes Aprobados</Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" color="#27AE60">
                          {currentUser.examsPassed}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* BLOQUE 2: TABLA DE POSICIONES */}
        <Grid item xs={12} xl={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaTrophy style={{ color: '#F39C12', fontSize: '24px', marginRight: '8px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Tabla de Posiciones
                </Typography>
                <Chip 
                  label="Basado en puntos Web3" 
                  color="primary" 
                  variant="outlined" 
                  size="small"
                  sx={{ ml: 2 }}
                />
              </Box>

              <TableContainer sx={{ maxHeight: 400 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#F8F9FA' }}>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C', fontSize: '0.8rem' }}>Pos</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C', fontSize: '0.8rem' }}>Usuario</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C', fontSize: '0.8rem' }}>Puntos</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C', fontSize: '0.8rem' }}>Cambio</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#073B4C', fontSize: '0.8rem' }}>Cert</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leaderboard.map((user) => (
                      <TableRow 
                        key={user.rank}
                        sx={{ 
                          backgroundColor: user.isCurrentUser ? '#E8F5E8' : 'transparent',
                          '&:hover': { backgroundColor: user.isCurrentUser ? '#E8F5E8' : '#F8F9FA' }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{
                              width: 26,
                              height: 26,
                              borderRadius: '50%',
                              backgroundColor: 
                                user.rank === 1 ? '#FFD700' : 
                                user.rank === 2 ? '#C0C0C0' : 
                                user.rank === 3 ? '#CD7F32' : '#E0E0E0',
                              color: user.rank <= 3 ? 'white' : '#666',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              fontSize: '0.7rem',
                              mr: 0.5
                            }}>
                              {user.rank}
                            </Box>
                            {user.rank <= 3 && <FaMedal style={{ color: '#F39C12', fontSize: '12px' }} />}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar 
                              src={user.avatar} 
                              sx={{ width: 28, height: 28, mr: 1 }}
                            />
                            <Typography 
                              variant="body2" 
                              fontWeight={user.isCurrentUser ? 'bold' : 'normal'}
                              color={user.isCurrentUser ? '#073B4C' : 'inherit'}
                              fontSize="0.8rem"
                            >
                              {user.name.split(' ')[0]}
                              {user.isCurrentUser && ' (Tú)'}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" fontWeight="bold" color="#073B4C" fontSize="0.8rem">
                            {user.score.toLocaleString()}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={user.change}
                            size="small"
                            color={user.trend === 'up' ? 'success' : 'error'}
                            variant="outlined"
                            sx={{ fontSize: '0.65rem', height: '20px' }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="#666" fontSize="0.8rem">
                            {user.certificates}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* BLOQUE 3: CERTIFICACIONES Y EXÁMENES */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FaCertificate style={{ color: '#E74C3C', fontSize: '24px', marginRight: '8px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Certificaciones
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {/* Estadísticas generales */}
                <Grid item xs={6} sm={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#E74C3C" sx={{ mb: 0.5 }}>
                      {certificationData.totalCertificates}
                    </Typography>
                    <Typography variant="caption" color="#666">
                      Certificados Obtenidos
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#27AE60" sx={{ mb: 0.5 }}>
                      {certificationData.examsPassed}
                    </Typography>
                    <Typography variant="caption" color="#666">
                      Exámenes Aprobados
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 2, borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold" color="#073B4C">
                        Tasa de Aprobación
                      </Typography>
                      <Typography variant="subtitle2" fontWeight="bold" color="#073B4C">
                        {certificationData.passRate}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={certificationData.passRate}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: '#E4DFDA',
                        '& .MuiLinearProgress-bar': { backgroundColor: '#27AE60' }
                      }}
                    />
                    <Typography variant="caption" color="#666" sx={{ mt: 0.5, display: 'block' }}>
                      {certificationData.examsPassed} de {certificationData.totalExams} exámenes completados
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Certificaciones recientes */}
              <Typography variant="subtitle1" fontWeight="bold" color="#073B4C" sx={{ mb: 2 }}>
                Certificaciones Recientes
              </Typography>
              
              <Grid container spacing={2}>
                {certificationData.recentCertificates.map((cert, index) => (
                  <Grid item xs={12} sm={6} lg={3} key={index}>
                    <Paper 
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        border: '1px solid #E4DFDA',
                        height: '100%',
                        '&:hover': { borderColor: '#C1FF72', boxShadow: '0 4px 12px rgba(193,255,114,0.2)' }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#073B4C">
                          {cert.name}
                        </Typography>
                        {cert.verified && (
                          <FaCheckCircle style={{ color: '#27AE60', fontSize: '16px' }} />
                        )}
                      </Box>
                      
                      <Typography variant="caption" color="#666" sx={{ mb: 1, display: 'block' }}>
                        {new Date(cert.date).toLocaleDateString('es-ES')}
                      </Typography>
                      
                      <Chip 
                        label={cert.level}
                        size="small"
                        color={
                          cert.level === 'Expert' ? 'error' :
                          cert.level === 'Advanced' ? 'warning' : 'info'
                        }
                        variant="outlined"
                        sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
