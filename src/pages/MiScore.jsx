import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Container,
  Paper,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction
} from '@mui/material';
import {
  FaTrophy,
  FaStar,
  FaChartLine,
  FaCertificate,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaChartPie,
  FaTasks,
  FaCalendar,
  FaAward,
  FaCheckCircle,
  FaCubes,
  FaUsers,
  FaShieldAlt
} from 'react-icons/fa';

const MiScore = () => {
  const skills = [
    { 
      name: 'Desarrollo Frontend', 
      score: 845, 
      max: 1000, 
      color: '#4CAF50',
      icon: FaCode,
      level: 'Expert',
      improvement: '+12% este mes'
    },
    { 
      name: 'Diseño UI/UX', 
      score: 720, 
      max: 1000, 
      color: '#2196F3',
      icon: FaPalette,
      level: 'Advanced',
      improvement: '+8% este mes'
    },
    { 
      name: 'Marketing Digital', 
      score: 680, 
      max: 1000, 
      color: '#FF9800',
      icon: FaBullhorn,
      level: 'Advanced',
      improvement: '+15% este mes'
    },
    { 
      name: 'Análisis Financiero', 
      score: 590, 
      max: 1000, 
      color: '#9C27B0',
      icon: FaChartPie,
      level: 'Intermediate',
      improvement: '+5% este mes'
    },
    { 
      name: 'Gestión de Proyectos', 
      score: 750, 
      max: 1000, 
      color: '#607D8B',
      icon: FaTasks,
      level: 'Advanced',
      improvement: '+10% este mes'
    },
  ];

  const recentActivity = [
    {
      action: 'Examen Frontend React',
      points: '+45',
      date: 'Hace 2 días',
      type: 'exam',
      verified: true
    },
    {
      action: 'Certificado AWS Cloud',
      points: '+120',
      date: 'Hace 1 semana',
      type: 'certificate',
      verified: true
    },
    {
      action: 'Evaluación UX Design',
      points: '+35',
      date: 'Hace 2 semanas',
      type: 'evaluation',
      verified: true
    },
    {
      action: 'Proyecto Marketing Digital',
      points: '+80',
      date: 'Hace 3 semanas',
      type: 'project',
      verified: true
    },
  ];

  const totalScore = skills.reduce((acc, skill) => acc + skill.score, 0);
  const maxPossible = skills.length * 1000;
  const percentage = Math.round((totalScore / maxPossible) * 100);

  const getSkillLevelColor = (level) => {
    switch(level) {
      case 'Expert': return '#E74C3C';
      case 'Advanced': return '#F39C12';
      case 'Intermediate': return '#3498DB';
      default: return '#95A5A6';
    }
  };

  return (
    <Container maxWidth={false} sx={{ py: 2, px: 2, maxWidth: 'calc(100vw - 280px)', ml: 'auto' }}>
      {/* Header Section */}
      <Box sx={{ 
        mb: 2, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
        borderRadius: 2,
        p: 2,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: -8,
          right: -8,
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: 'rgba(193, 255, 114, 0.1)',
          zIndex: 1
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -10,
          left: -10,
          width: 35,
          height: 35,
          borderRadius: '50%',
          backgroundColor: 'rgba(193, 255, 114, 0.08)',
          zIndex: 1
        }} />
        
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <FaStar style={{ 
            fontSize: '32px', 
            color: '#C1FF72', 
            marginBottom: '8px',
            filter: 'drop-shadow(0 2px 4px rgba(193, 255, 114, 0.3))'
          }} />
          
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            color="#C1FF72" 
            sx={{ 
              mb: 0.5,
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #C1FF72, #A8E063)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Mi Score de Confianza
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 1.5,
              opacity: 0.95,
              fontWeight: 300,
              letterSpacing: '0.2px'
            }}
          >
            Tu reputación verificada en blockchain
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap'
          }}>
            <Chip 
              icon={<FaCubes style={{ fontSize: '10px' }} />}
              label="Verificación Blockchain"
              size="small"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)',
                fontSize: '10px',
                height: '24px'
              }}
            />
            <Chip 
              icon={<FaChartLine style={{ fontSize: '10px' }} />}
              label="Habilidades Validadas"
              size="small"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)',
                fontSize: '10px',
                height: '24px'
              }}
            />
            <Chip 
              icon={<FaTrophy style={{ fontSize: '10px' }} />}
              label="Reputación Descentralizada"
              size="small"
              sx={{ 
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                color: '#C1FF72',
                fontWeight: 'bold',
                border: '1px solid rgba(193, 255, 114, 0.3)',
                fontSize: '10px',
                height: '24px'
              }}
            />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {/* Score Principal */}
        <Grid item xs={12} md={4} lg={3}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
            color: 'white',
            height: 'fit-content'
          }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <FaTrophy style={{ 
                fontSize: '48px', 
                color: '#C1FF72', 
                marginBottom: '12px',
                filter: 'drop-shadow(0 4px 8px rgba(193, 255, 114, 0.3))'
              }} />
              
              <Typography variant="h3" fontWeight="bold" color="#C1FF72" sx={{ mb: 1.5 }}>
                {totalScore.toLocaleString()}
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                de {maxPossible.toLocaleString()} puntos posibles
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={percentage}
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#C1FF72' }
                  }}
                />
                <Typography variant="h6" fontWeight="bold" color="#C1FF72" sx={{ mt: 0.5 }}>
                  {percentage}% Completado
                </Typography>
              </Box>
              
              <Chip 
                label="✓ Blockchain Verified" 
                size="small"
                sx={{ 
                  backgroundColor: '#C1FF72', 
                  color: '#073B4C', 
                  fontWeight: 'bold',
                  fontSize: '11px'
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Estadísticas Resumidas */}
        <Grid item xs={12} md={4} lg={4.5}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', height: 'fit-content' }}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="body1" fontWeight="bold" color="#073B4C" sx={{ mb: 1.5 }}>
                Estadísticas Resumidas
              </Typography>
              
              <Grid container spacing={1.5}>
                <Grid item xs={6}>
                  <Paper sx={{ 
                    p: 1.5, 
                    textAlign: 'center', 
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <FaCertificate style={{ color: '#E74C3C', fontSize: '16px', marginBottom: '4px' }} />
                    <Typography variant="h6" fontWeight="bold" color="#E74C3C" sx={{ mb: 0, lineHeight: 1, fontSize: '18px' }}>
                      8
                    </Typography>
                    <Typography variant="caption" color="#666" fontWeight="medium" sx={{ fontSize: '10px' }}>
                      Certificados
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6}>
                  <Paper sx={{ 
                    p: 1.5, 
                    textAlign: 'center', 
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <FaAward style={{ color: '#F39C12', fontSize: '16px', marginBottom: '4px' }} />
                    <Typography variant="h6" fontWeight="bold" color="#F39C12" sx={{ mb: 0, lineHeight: 1, fontSize: '18px' }}>
                      24
                    </Typography>
                    <Typography variant="caption" color="#666" fontWeight="medium" sx={{ fontSize: '10px' }}>
                      Exámenes
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6}>
                  <Paper sx={{ 
                    p: 1.5, 
                    textAlign: 'center', 
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <FaChartLine style={{ color: '#27AE60', fontSize: '16px', marginBottom: '4px' }} />
                    <Typography variant="h6" fontWeight="bold" color="#27AE60" sx={{ mb: 0, lineHeight: 1, fontSize: '18px' }}>
                      #3
                    </Typography>
                    <Typography variant="caption" color="#666" fontWeight="medium" sx={{ fontSize: '10px' }}>
                      Ranking Global
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6}>
                  <Paper sx={{ 
                    p: 1.5, 
                    textAlign: 'center', 
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <FaStar style={{ color: '#3498DB', fontSize: '16px', marginBottom: '4px' }} />
                    <Typography variant="h6" fontWeight="bold" color="#3498DB" sx={{ mb: 0, lineHeight: 1, fontSize: '18px' }}>
                      4.9
                    </Typography>
                    <Typography variant="caption" color="#666" fontWeight="medium" sx={{ fontSize: '10px' }}>
                      Rating Promedio
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Actividad Reciente */}
        <Grid item xs={12} md={4} lg={4.5}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', height: 'fit-content' }}>
            <CardContent sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <FaCalendar style={{ color: '#3498DB', fontSize: '14px', marginRight: '6px' }} />
                <Typography variant="body1" fontWeight="bold" color="#073B4C">
                  Actividad Reciente
                </Typography>
              </Box>

              <List sx={{ p: 0 }}>
                {recentActivity.slice(0, 3).map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ px: 0, py: 0.5 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ 
                          backgroundColor: activity.type === 'certificate' ? '#E74C3C20' :
                                          activity.type === 'exam' ? '#F39C1220' :
                                          activity.type === 'evaluation' ? '#3498DB20' : '#27AE6020',
                          color: activity.type === 'certificate' ? '#E74C3C' :
                                activity.type === 'exam' ? '#F39C12' :
                                activity.type === 'evaluation' ? '#3498DB' : '#27AE60',
                          width: 28,
                          height: 28
                        }}>
                          {activity.type === 'certificate' ? <FaCertificate style={{ fontSize: '12px' }} /> :
                           activity.type === 'exam' ? <FaAward style={{ fontSize: '12px' }} /> :
                           activity.type === 'evaluation' ? <FaChartLine style={{ fontSize: '12px' }} /> : <FaTasks style={{ fontSize: '12px' }} />}
                        </Avatar>
                      </ListItemAvatar>
                      
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Typography variant="body2" fontWeight="bold" color="#073B4C" sx={{ fontSize: '12px' }}>
                              {activity.action}
                            </Typography>
                            {activity.verified && (
                              <FaCheckCircle style={{ color: '#27AE60', fontSize: '9px' }} />
                            )}
                          </Box>
                        }
                        secondary={
                          <Typography variant="caption" color="#666" sx={{ fontSize: '10px' }}>
                            {activity.date}
                          </Typography>
                        }
                      />
                      
                      <ListItemSecondaryAction>
                        <Chip 
                          label={activity.points}
                          size="small"
                          sx={{ 
                            backgroundColor: '#27AE6020', 
                            color: '#27AE60',
                            fontWeight: 'bold',
                            fontSize: '10px',
                            height: '18px'
                          }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < 2 && <Divider sx={{ my: 0.25 }} />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>      {/* Progreso por Habilidades - Sección Separada */}
      <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', mt: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight="bold" color="#073B4C" sx={{ mb: 3 }}>
            Desglose por Habilidades
          </Typography>
          
          <Grid container spacing={2}>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Grid item xs={12} lg={6} key={index}>
                  <Paper sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    border: '1px solid #E4DFDA',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      borderColor: skill.color + '40'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ 
                        backgroundColor: skill.color + '20', 
                        color: skill.color,
                        mr: 2,
                        width: 56,
                        height: 56
                      }}>
                        <IconComponent style={{ fontSize: '28px' }} />
                      </Avatar>
                      
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6" fontWeight="bold" color="#073B4C">
                            {skill.name}
                          </Typography>
                          <Typography variant="h6" fontWeight="bold" color={skill.color}>
                            {skill.score}/{skill.max}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Chip 
                            label={skill.level}
                            size="small"
                            sx={{ 
                              backgroundColor: getSkillLevelColor(skill.level) + '20',
                              color: getSkillLevelColor(skill.level),
                              fontWeight: 'bold'
                            }}
                          />
                          <Typography variant="body2" color="#27AE60" fontWeight="bold">
                            {skill.improvement}
                          </Typography>
                        </Box>
                        
                        <LinearProgress 
                          variant="determinate" 
                          value={(skill.score / skill.max) * 100}
                          sx={{ 
                            height: 8, 
                            borderRadius: 4,
                            backgroundColor: '#E4DFDA',
                            '& .MuiLinearProgress-bar': { backgroundColor: skill.color }
                          }}
                        />
                        
                        <Typography variant="body2" color="#666" sx={{ mt: 1 }}>
                          {Math.round((skill.score / skill.max) * 100)}% completado
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MiScore;
