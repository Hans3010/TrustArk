import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Paper,
  Avatar,
  Chip,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  EmojiEvents as TrophyIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const ProfileStats = () => {
  const skillsData = [
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'CSS/SCSS', level: 80, color: '#1572B6' },
    { name: 'TypeScript', level: 65, color: '#3178C6' },
  ];

  const monthlyProgress = [
    { month: 'Ene', score: 45 },
    { month: 'Feb', score: 52 },
    { month: 'Mar', score: 58 },
    { month: 'Abr', score: 65 },
    { month: 'May', score: 70 },
    { month: 'Jun', score: 75 },
  ];

  const achievements = [
    { title: 'Primera Certificación', date: '2024-01-15', icon: '🎓', color: '#C1FF72' },
    { title: 'Score +70', date: '2024-03-20', icon: '⭐', color: '#073B4C' },
    { title: 'Especialista React', date: '2024-05-10', icon: '⚛️', color: '#61DAFB' },
    { title: 'Top 10 Leaderboard', date: '2024-06-15', icon: '🏆', color: '#FFD700' },
  ];

  return (
    <Box sx={{ 
      p: 4, 
      backgroundColor: '#F8F9FA', 
      minHeight: '100vh' 
    }}>
      {/* Header Principal Minimalista */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="300" color="#2C3E50" sx={{ mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="h6" color="#7F8C8D" fontWeight="400">
          Panel de control y estadísticas
        </Typography>
      </Box>

      {/* Métricas Principales */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" fontWeight="600" color="#E74C3C" sx={{ mb: 1 }}>
                75
              </Typography>
              <Typography variant="body2" color="#7F8C8D" fontWeight="500">
                Score Total
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" fontWeight="600" color="#3498DB" sx={{ mb: 1 }}>
                9
              </Typography>
              <Typography variant="body2" color="#7F8C8D" fontWeight="500">
                Exámenes
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" fontWeight="600" color="#27AE60" sx={{ mb: 1 }}>
                45h
              </Typography>
              <Typography variant="body2" color="#7F8C8D" fontWeight="500">
                Tiempo
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" fontWeight="600" color="#F39C12" sx={{ mb: 1 }}>
                #4
              </Typography>
              <Typography variant="body2" color="#7F8C8D" fontWeight="500">
                Ranking
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Contenido Principal */}
      <Grid container spacing={3}>
        {/* Progreso Mensual */}
        <Grid item xs={8}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF',
            height: 320
          }}>
            <Typography variant="h6" fontWeight="500" color="#2C3E50" sx={{ mb: 3 }}>
              Progreso Mensual
            </Typography>
            <Grid container spacing={3} sx={{ height: 240, alignItems: 'center' }}>
              {monthlyProgress.map((item, index) => (
                <Grid item xs={2} key={item.month}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      height: 120,
                      width: 8,
                      backgroundColor: '#ECF0F1',
                      borderRadius: 4,
                      mx: 'auto',
                      mb: 2,
                      position: 'relative'
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: `${item.score}%`,
                        backgroundColor: index === monthlyProgress.length - 1 ? '#E74C3C' : '#BDC3C7',
                        borderRadius: 4,
                        transition: 'all 0.3s ease'
                      }} />
                    </Box>
                    <Typography variant="body2" color="#7F8C8D" fontWeight="500">
                      {item.month}
                    </Typography>
                    <Typography variant="caption" color="#2C3E50" fontWeight="600">
                      {item.score}%
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* Ranking */}
        <Grid item xs={4}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF',
            height: 320
          }}>
            <Typography variant="h6" fontWeight="500" color="#2C3E50" sx={{ mb: 3 }}>
              Ranking Global
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { rank: 2, name: 'Sofia Chen', score: 4100 },
                { rank: 3, name: 'Carlos Rodriguez', score: 3950 },
                { rank: 4, name: 'Alex Rodriguez', score: 3000, isUser: true },
                { rank: 5, name: 'Elena Popov', score: 2850 }
              ].map((user) => (
                <Box 
                  key={user.rank}
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 1,
                    backgroundColor: user.isUser ? '#FFF5F5' : '#FAFBFC',
                    border: user.isUser ? '1px solid #FEB2B2' : '1px solid #E2E8F0'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography 
                      variant="h6" 
                      fontWeight="600"
                      sx={{ color: user.isUser ? '#E74C3C' : '#7F8C8D', minWidth: 24 }}
                    >
                      #{user.rank}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      fontWeight="500"
                      sx={{ color: user.isUser ? '#2C3E50' : '#4A5568' }}
                    >
                      {user.name}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    fontWeight="600"
                    sx={{ color: user.isUser ? '#E74C3C' : '#2C3E50' }}
                  >
                    {user.score.toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Skills Progress */}
        <Grid item xs={12}>
          <Card sx={{ 
            p: 3, 
            borderRadius: 2,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            backgroundColor: '#FFFFFF'
          }}>
            <Typography variant="h6" fontWeight="500" color="#2C3E50" sx={{ mb: 3 }}>
              Progreso por Habilidades
            </Typography>
            <Grid container spacing={4}>
              {[
                { skill: 'Marketing Digital', progress: 85, color: '#E74C3C' },
                { skill: 'Finanzas', progress: 65, color: '#3498DB' },
                { skill: 'Desarrollo Web', progress: 90, color: '#27AE60' },
                { skill: 'Diseño UX/UI', progress: 70, color: '#F39C12' }
              ].map((item) => (
                <Grid item xs={3} key={item.skill}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" fontWeight="500" color="#2C3E50">
                        {item.skill}
                      </Typography>
                      <Typography variant="body2" fontWeight="600" color={item.color}>
                        {item.progress}%
                      </Typography>
                    </Box>
                    <Box sx={{
                      width: '100%',
                      height: 6,
                      backgroundColor: '#ECF0F1',
                      borderRadius: 3,
                      overflow: 'hidden'
                    }}>
                      <Box sx={{
                        width: `${item.progress}%`,
                        height: '100%',
                        backgroundColor: item.color,
                        borderRadius: 3,
                        transition: 'all 0.3s ease'
                      }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileStats;
