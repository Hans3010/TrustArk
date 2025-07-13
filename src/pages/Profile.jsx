import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Chip,
  Grid,
  Paper,
  Divider,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Badge,
} from '@mui/material';
import {
  Edit as EditIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  EmojiEvents as TrophyIcon,
} from '@mui/icons-material';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@trustark.com',
    bio: 'Desarrollador Full Stack especializado en Web3 y tecnologías blockchain',
  });
  const [tempUserInfo, setTempUserInfo] = useState(userInfo);

  // Datos detallados de exámenes con información completa
  const examData = [
    { 
      id: 1, 
      name: 'JavaScript Fundamentals', 
      course: 'JavaScript Completo',
      score: 8, 
      total: 10, 
      attempts: 3,
      lastAttempt: '2024-01-15',
      difficulty: 'Principiante',
      timeSpent: '45 min',
      badge: '🟨',
      color: '#FFD93D'
    },
    { 
      id: 2, 
      name: 'React Advanced Concepts', 
      course: 'React + DApps',
      score: 9, 
      total: 10, 
      attempts: 2,
      lastAttempt: '2024-01-10',
      difficulty: 'Avanzado',
      timeSpent: '62 min',
      badge: '⚛️',
      color: '#61DAFB'
    },
    { 
      id: 3, 
      name: 'Solidity Smart Contracts', 
      course: 'Solidity Mastery',
      score: 7, 
      total: 10, 
      attempts: 4,
      lastAttempt: '2024-01-08',
      difficulty: 'Avanzado',
      timeSpent: '78 min',
      badge: '💎',
      color: '#8B5CF6'
    },
    { 
      id: 4, 
      name: 'DeFi Protocols', 
      course: 'DeFi Completo',
      score: 6, 
      total: 10, 
      attempts: 2,
      lastAttempt: '2024-01-05',
      difficulty: 'Intermedio',
      timeSpent: '55 min',
      badge: '🏦',
      color: '#10B981'
    },
  ];

  // Certificados NFT con metadata detallada
  const nftCertificates = [
    { 
      id: 1, 
      name: 'JavaScript Master', 
      course: 'JavaScript Completo',
      issueDate: '2024-01-15',
      tokenId: '#1247',
      rarity: 'Gold',
      icon: '🏆',
      network: 'Polygon',
      verified: true,
      skills: ['ES6+', 'Async/Await', 'DOM Manipulation'],
      examScore: '8/10'
    },
    { 
      id: 2, 
      name: 'React Developer Pro', 
      course: 'React + DApps',
      issueDate: '2024-01-10',
      tokenId: '#1156',
      rarity: 'Platinum',
      icon: '⭐',
      network: 'Ethereum',
      verified: true,
      skills: ['Hooks', 'Context', 'Web3 Integration'],
      examScore: '9/10'
    },
    { 
      id: 3, 
      name: 'Solidity Expert', 
      course: 'Solidity Mastery',
      issueDate: '2024-01-08',
      tokenId: '#0987',
      rarity: 'Diamond',
      icon: '🎖️',
      network: 'Ethereum',
      verified: true,
      skills: ['Smart Contracts', 'Security', 'Gas Optimization'],
      examScore: '7/10'
    },
  ];

  const handleEditSave = () => {
    if (editMode) {
      setUserInfo(tempUserInfo);
    } else {
      setTempUserInfo(userInfo);
    }
    setEditMode(!editMode);
  };

  const handleEditCancel = () => {
    setTempUserInfo(userInfo);
    setEditMode(false);
  };

  const calculateOverallScore = () => {
    const totalScore = examData.reduce((sum, exam) => sum + exam.score, 0);
    const totalPossible = examData.reduce((sum, exam) => sum + exam.total, 0);
    return Math.round((totalScore / totalPossible) * 100);
  };

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case 'Gold': return '#FFD700';
      case 'Platinum': return '#E5E4E2';
      case 'Diamond': return '#B9F2FF';
      default: return '#C1FF72';
    }
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header Compacto con Info Personal */}
      <Card sx={{ 
        borderRadius: 4, 
        boxShadow: '0 8px 32px rgba(7, 59, 76, 0.12)', 
        mb: 4, 
        background: 'linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {/* Avatar Compacto */}
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#C1FF72',
                color: '#073B4C',
                fontSize: '2rem',
                fontWeight: 'bold',
                border: '4px solid rgba(255,255,255,0.1)'
              }}
            >
              AR
            </Avatar>

            {/* Info Personal Compacta */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#C1FF72', mb: 0.5 }}>
                {userInfo.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#E4DFDA', mb: 1, opacity: 0.9 }}>
                {userInfo.email}
              </Typography>
              <Typography variant="body2" sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                {userInfo.bio}
              </Typography>
            </Box>

            {/* Score y Estadísticas */}
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C1FF72 0%, #A8E85C 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1
              }}>
                <Typography variant="h3" fontWeight="900" sx={{ color: '#073B4C', lineHeight: 1 }}>
                  {calculateOverallScore()}
                </Typography>
                <Typography variant="caption" sx={{ color: '#073B4C', fontWeight: 'bold' }}>
                  SCORE
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold" color="#C1FF72">{examData.length}</Typography>
                  <Typography variant="caption" color="#E4DFDA">Exámenes</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold" color="#C1FF72">{nftCertificates.length}</Typography>
                  <Typography variant="caption" color="#E4DFDA">NFTs</Typography>
                </Box>
              </Box>
            </Box>

            {/* Botón de Editar */}
            <IconButton
              onClick={handleEditSave}
              sx={{
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                '&:hover': { backgroundColor: 'rgba(193, 255, 114, 0.3)' }
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>

      {/* Información Personal Editeable - Tarjeta Independiente */}
      <Card sx={{ 
        borderRadius: 3, 
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        backgroundColor: 'white',
        border: '1px solid rgba(7, 59, 76, 0.1)',
        mb: 3
      }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ 
            color: '#073B4C',
            borderBottom: '2px solid #C1FF72',
            pb: 1,
            mb: 2
          }}>
            Información Personal
          </Typography>
          
          {editMode ? (
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Nombre"
                  value={tempUserInfo.name}
                  onChange={(e) => setTempUserInfo({ ...tempUserInfo, name: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Email"
                  value={tempUserInfo.email}
                  onChange={(e) => setTempUserInfo({ ...tempUserInfo, email: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', gap: 1, height: '100%', alignItems: 'center' }}>
                  <Button
                    onClick={handleEditSave}
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: '#C1FF72', color: '#073B4C' }}
                  >
                    Guardar
                  </Button>
                  <Button
                    onClick={handleEditCancel}
                    variant="outlined"
                    size="small"
                  >
                    Cancelar
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Biografía"
                  value={tempUserInfo.bio}
                  onChange={(e) => setTempUserInfo({ ...tempUserInfo, bio: e.target.value })}
                  multiline
                  rows={2}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 1.5, backgroundColor: '#E4DFDA', borderRadius: 2, height: '100%' }}>
                  <Typography variant="caption" color="#073B4C" fontWeight="bold">Email</Typography>
                  <Typography variant="body2" color="#222222">{userInfo.email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box sx={{ p: 1.5, backgroundColor: '#E4DFDA', borderRadius: 2, height: '100%' }}>
                  <Typography variant="caption" color="#073B4C" fontWeight="bold">Biografía</Typography>
                  <Typography variant="body2" color="#222222">{userInfo.bio}</Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Certificados NFT - Sección Principal */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            backgroundColor: 'white',
            border: '1px solid rgba(7, 59, 76, 0.1)',
            mb: 3
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TrophyIcon sx={{ color: '#C1FF72', mr: 1, fontSize: '1.5rem' }} />
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#073B4C' }}>
                  Certificados NFT
                </Typography>
                <Chip 
                  label={`${nftCertificates.length} Certificados`} 
                  size="small" 
                  sx={{ 
                    ml: 2,
                    backgroundColor: '#C1FF72',
                    color: '#073B4C',
                    fontWeight: 'bold'
                  }} 
                />
              </Box>

              <Grid container spacing={2}>
                {nftCertificates.map((cert) => (
                  <Grid item xs={12} md={6} lg={4} key={cert.id}>
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${getRarityColor(cert.rarity)}15 0%, ${getRarityColor(cert.rarity)}05 100%)`,
                        border: `2px solid ${getRarityColor(cert.rarity)}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 12px 32px ${getRarityColor(cert.rarity)}30`
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="h4">{cert.icon}</Typography>
                          <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ color: '#073B4C' }}>
                              {cert.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                              {cert.course}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip 
                          label={cert.rarity} 
                          size="small" 
                          sx={{ 
                            backgroundColor: getRarityColor(cert.rarity),
                            color: '#073B4C',
                            fontWeight: 'bold'
                          }} 
                        />
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#073B4C', mb: 0.5 }}>
                          Habilidades Certificadas:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          {cert.skills.map((skill, index) => (
                            <Chip 
                              key={index}
                              label={skill} 
                              size="small" 
                              sx={{ 
                                fontSize: '0.7rem',
                                backgroundColor: 'rgba(7, 59, 76, 0.1)',
                                color: '#073B4C'
                              }} 
                            />
                          ))}
                        </Box>
                      </Box>

                      <Divider sx={{ my: 1.5 }} />

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            Score Examen: <strong>{cert.examScore}</strong>
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            Red: <strong>{cert.network}</strong>
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            Token ID: <strong>{cert.tokenId}</strong>
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            {cert.issueDate}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Historial de Exámenes - Información Detallada */}
      <Card sx={{ 
        borderRadius: 3, 
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        backgroundColor: 'white',
        border: '1px solid rgba(7, 59, 76, 0.1)',
        mt: 3
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AssignmentIcon sx={{ color: '#C1FF72', mr: 1, fontSize: '1.5rem' }} />
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#073B4C' }}>
              Historial de Exámenes
            </Typography>
            <Chip 
              label={`${examData.length} Completados`} 
              size="small" 
              sx={{ 
                ml: 2,
                backgroundColor: '#073B4C',
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
          </Box>

          <Grid container spacing={2}>
            {examData.map((exam) => (
              <Grid item xs={12} md={6} key={exam.id}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '2px solid #E4DFDA',
                    background: `linear-gradient(135deg, ${exam.color}15 0%, ${exam.color}05 100%)`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 24px ${exam.color}30`,
                      borderColor: exam.color
                    }
                  }}
                >
                  {/* Header del examen */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h5">{exam.badge}</Typography>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#073B4C' }}>
                          {exam.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {exam.course}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip 
                      label={exam.difficulty} 
                      size="small" 
                      sx={{ 
                        backgroundColor: exam.color,
                        color: 'white',
                        fontWeight: 'bold'
                      }} 
                    />
                  </Box>

                  {/* Score visual */}
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" fontWeight="bold" sx={{ color: '#073B4C' }}>
                        Puntuación Final
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" sx={{ color: exam.color }}>
                        {exam.score}/{exam.total} ({Math.round((exam.score/exam.total)*100)}%)
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(exam.score/exam.total)*100} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': { backgroundColor: exam.color }
                      }} 
                    />
                  </Box>

                  {/* Estadísticas del examen */}
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: exam.color }}>
                          {exam.attempts}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          Intentos
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: exam.color }}>
                          {exam.timeSpent}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          Tiempo
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 1.5 }} />

                  {/* Información adicional */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#666' }}>
                        Último intento:
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" sx={{ color: '#073B4C' }}>
                        {exam.lastAttempt}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {exam.score >= 8 && <StarIcon sx={{ color: '#FFD700', fontSize: '1rem' }} />}
                      {exam.score >= 6 && <TrendingUpIcon sx={{ color: '#10B981', fontSize: '1rem' }} />}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
