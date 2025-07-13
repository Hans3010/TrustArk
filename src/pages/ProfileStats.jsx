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
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color="#073B4C" gutterBottom>
          📊 Mis Estadísticas
        </Typography>
        <Typography variant="h6" color="#222222">
          Panel completo de tu progreso y logros académicos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Score Overview */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: '0 8px 24px rgba(7, 59, 76, 0.1)',
            background: 'linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)',
            color: 'white'
          }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <TrophyIcon sx={{ fontSize: 48, color: '#C1FF72', mb: 2 }} />
              <Typography variant="h2" fontWeight="bold" color="#C1FF72">
                75
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Score Total
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Top 15% de estudiantes
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Progress */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" color="#073B4C" gutterBottom>
                <TimelineIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Progreso Mensual
              </Typography>
              <Box sx={{ mt: 3 }}>
                {monthlyProgress.map((item, index) => (
                  <Box key={item.month} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="#222222">{item.month}</Typography>
                      <Typography variant="body2" color="#073B4C" fontWeight="bold">
                        {item.score}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.score}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#E4DFDA',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: index === monthlyProgress.length - 1 ? '#C1FF72' : '#073B4C',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Skills Breakdown */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" color="#073B4C" gutterBottom>
                <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Habilidades Técnicas
              </Typography>
              <Box sx={{ mt: 3 }}>
                {skillsData.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="#222222" fontWeight="medium">
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="#073B4C" fontWeight="bold">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: '#E4DFDA',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skill.color,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Achievements */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" color="#073B4C" gutterBottom>
                <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Logros Recientes
              </Typography>
              <Box sx={{ mt: 3 }}>
                {achievements.map((achievement, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      mb: 2,
                      borderRadius: 2,
                      border: '1px solid #E4DFDA',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(193, 255, 114, 0.2)',
                        borderColor: '#C1FF72'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ 
                        backgroundColor: achievement.color,
                        color: achievement.color === '#C1FF72' ? '#073B4C' : 'white'
                      }}>
                        <Typography variant="h6">{achievement.icon}</Typography>
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold" color="#073B4C">
                          {achievement.title}
                        </Typography>
                        <Typography variant="body2" color="#222222">
                          {new Date(achievement.date).toLocaleDateString('es-ES')}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Stats */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" color="#073B4C" gutterBottom>
                Resumen Rápido
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#C1FF72">
                      9
                    </Typography>
                    <Typography variant="body2" color="#073B4C">
                      Exámenes Completados
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#073B4C">
                      3
                    </Typography>
                    <Typography variant="body2" color="#073B4C">
                      Certificaciones
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#222222">
                      45
                    </Typography>
                    <Typography variant="body2" color="#073B4C">
                      Horas de Estudio
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#222222">
                      12
                    </Typography>
                    <Typography variant="body2" color="#073B4C">
                      Días Consecutivos
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileStats;
