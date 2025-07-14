import React, { useState, useEffect } from 'react';
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
  Divider,
  CircularProgress,
  Alert
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
  const [userData, setUserData] = useState(null);
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Obtener datos del usuario
      const userResponse = await fetch(
        'https://hackaton-stellar-88871125366.us-central1.run.app/api/users/bxl2z9sEKACwTUpn4WbA'
      );
      const userResult = await userResponse.json();

      // Obtener datos de exámenes
      const examResponse = await fetch(
        'https://hackaton-stellar-88871125366.us-central1.run.app/api/exams/user/u1'
      );
      const examResult = await examResponse.json();

      if (userResult.success && examResult.success) {
        setUserData(userResult.data);
        setExamData(examResult.data);
      } else {
        throw new Error('Error al cargar los datos');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Procesar datos para el componente
  const processUserData = () => {
    if (!userData || !examData) return null;

    const totalExams = examData.length;
    const passedExams = examData.filter(exam => exam.score > 0).length;
    const totalScore = examData.reduce((sum, exam) => sum + exam.score, 0);
    const averageScore = totalExams > 0 ? (totalScore / totalExams).toFixed(1) : 0;
    
    // Determinar nivel basado en puntaje promedio
    let skillLevel = 'Beginner';
    if (averageScore >= 2.5) skillLevel = 'Expert';
    else if (averageScore >= 2) skillLevel = 'Advanced';
    else if (averageScore >= 1.5) skillLevel = 'Intermediate';

    return {
      name: userData.name || 'Usuario',
      avatar: `https://ui-avatars.io/api/?name=${encodeURIComponent(userData.name || 'Usuario')}&background=073B4C&color=fff`,
      score: userData.totalScore || 0,
      rank: userData.totalScore >= 90 ? 1 : userData.totalScore >= 85 ? 2 : userData.totalScore >= 80 ? 3 : 4,
      completedCourses: totalExams,
      certificatesEarned: passedExams,
      examsPassed: passedExams,
      totalStudyHours: totalExams * 2, // Estimación
      weeklyProgress: 85,
      skillLevel,
      web3Verified: true,
      stellarAddress: userData.stellarAddress
    };
  };

  const processExamData = () => {
    if (!examData) return [];

    return examData.map((exam, index) => ({
      name: exam.examName,
      date: exam.timestamp,
      level: exam.examType,
      verified: exam.stellarTxSent,
      score: exam.score,
      hash: exam.stellarTxHash
    })).slice(0, 4); // Mostrar solo los 4 más recientes
  };

  // Datos simulados para el leaderboard (se mantienen algunos datos de ejemplo)
  const generateLeaderboard = (currentUser) => {
    const baseUsers = [
      { 
        name: 'Sofia Chen', 
        score: 95, 
        change: '+15', 
        trend: 'up',
        certificates: 15,
        web3Address: 'GD73MZR4...NFEN7OPV'
      },
      { 
        name: 'Carlos Mendoza', 
        score: 92, 
        change: '+8', 
        trend: 'up',
        certificates: 12,
        web3Address: 'GC45XYZ8...ABCD1234'
      },
      { 
        name: 'María González', 
        score: 88, 
        change: '+12', 
        trend: 'up',
        certificates: 10,
        web3Address: 'GA12BCD3...EFG56789'
      },
      { 
        name: 'Ana Silva', 
        score: 82, 
        change: '-5', 
        trend: 'down',
        certificates: 7,
        web3Address: 'GB78HIJ9...KLM01234'
      },
      { 
        name: 'Pedro Ramírez', 
        score: 78, 
        change: '+3', 
        trend: 'up',
        certificates: 6,
        web3Address: 'GF89LMN0...PQR56789'
      }
    ];

    // Insertar usuario actual en la posición correcta
    const userEntry = {
      name: currentUser.name,
      score: currentUser.score,
      change: '+8',
      trend: 'up',
      certificates: currentUser.certificatesEarned,
      web3Address: currentUser.stellarAddress ? 
        currentUser.stellarAddress.substring(0, 8) + '...' + currentUser.stellarAddress.substring(-8) : 
        'GD73MZR4...NFEN7OPV',
      isCurrentUser: true
    };

    const allUsers = [...baseUsers, userEntry]
      .sort((a, b) => b.score - a.score)
      .map((user, index) => ({
        ...user,
        rank: index + 1,
        avatar: `https://ui-avatars.io/api/?name=${encodeURIComponent(user.name)}&background=${
          index === 0 ? '27AE60' : 
          index === 1 ? '3498DB' : 
          index === 2 ? 'E74C3C' : 
          index === 3 ? '9B59B6' : '073B4C'
        }&color=fff`
      }));

    return allUsers.slice(0, 6);
  };

  if (loading) {
    return (
      <Container maxWidth={false} sx={{ py: 4, px: 2, maxWidth: 'calc(100vw - 280px)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Cargando datos del usuario...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth={false} sx={{ py: 4, px: 2, maxWidth: 'calc(100vw - 280px)' }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Error al cargar los datos: {error}
        </Alert>
      </Container>
    );
  }

  const currentUser = processUserData();
  const recentCertifications = processExamData();

  if (!currentUser) return null;

  const leaderboard = generateLeaderboard(currentUser);

  // Calcular estadísticas de certificación
  const certificationData = {
    totalCertificates: currentUser.certificatesEarned,
    examsPassed: currentUser.examsPassed,
    totalExams: currentUser.completedCourses,
    passRate: currentUser.completedCourses > 0 ? 
      Math.round((currentUser.examsPassed / currentUser.completedCourses) * 100) : 0,
    recentCertificates: recentCertifications
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
                      <Typography variant="h6" fontWeight="bold" color="white" sx={{ mb: 0.5 }}>
                        {currentUser.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1.5, color: 'white' }}>
                        Nivel {currentUser.skillLevel}
                      </Typography>
                      {currentUser.stellarAddress && (
                        <Typography variant="caption" sx={{ 
                          opacity: 0.7, 
                          mb: 1, 
                          display: 'block', 
                          fontFamily: 'monospace', 
                          color: 'white',
                          wordBreak: 'break-all',
                          fontSize: '0.65rem',
                          lineHeight: 1.2,
                          maxWidth: '200px',
                          margin: '0 auto 8px auto'
                        }}>
                          {currentUser.stellarAddress.substring(0, 6)}...{currentUser.stellarAddress.substring(currentUser.stellarAddress.length - 6)}
                        </Typography>
                      )}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        mb: 1
                      }}>
                        <FaTrophy style={{ color: '#C1FF72', marginRight: '6px' }} />
                        <Typography variant="subtitle1" fontWeight="bold" color="white">
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
                      
                      <Typography variant="body2" color="#666" sx={{ mb: 1, display: 'block' }}>
                        {new Date(cert.date).toLocaleDateString('es-ES')}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Chip 
                          label={cert.level}
                          size="small"
                          color={
                            cert.level === 'Avanzado' ? 'error' :
                            cert.level === 'Intermedio' ? 'warning' : 'info'
                          }
                          variant="outlined"
                          sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
                        />
                        {cert.hash && (
                          <Chip 
                            label="Blockchain"
                            size="small"
                            sx={{ 
                              backgroundColor: '#C1FF72', 
                              color: '#073B4C', 
                              fontWeight: 'bold',
                              fontSize: '0.6rem'
                            }}
                          />
                        )}
                      </Box>

                      {cert.score && (
                        <Typography variant="caption" color="#27AE60" sx={{ mt: 1, display: 'block', fontWeight: 'bold' }}>
                          Puntuación: {cert.score}/3
                        </Typography>
                      )}
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
