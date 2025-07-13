import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  PhotoCamera as PhotoCameraIcon,
  Add as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const ProfileEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSkillDialog, setShowSkillDialog] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: 'Juan Pérez',
    title: 'Desarrollador Full Stack',
    email: 'juan.perez@trustark.com',
    phone: '+52 555 123 4567',
    location: 'Ciudad de México, México',
    bio: 'Desarrollador apasionado con 3 años de experiencia en tecnologías web modernas. Especializado en React, Node.js y arquitecturas escalables.',
    linkedin: 'https://linkedin.com/in/juanperez',
    github: 'https://github.com/juanperez',
    website: 'https://juanperez.dev',
  });

  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL'
  ]);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Aquí restaurarías los datos originales
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
      setShowSkillDialog(false);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color="#073B4C" gutterBottom>
          ✏️ Editar Mi Perfil
        </Typography>
        <Typography variant="h6" color="#222222">
          Mantén tu información profesional actualizada
        </Typography>
      </Box>

      {/* Success Alert */}
      {showSuccess && (
        <Alert 
          severity="success" 
          sx={{ mb: 3, backgroundColor: '#C1FF72', color: '#073B4C' }}
        >
          ¡Perfil actualizado exitosamente!
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Profile Photo Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    backgroundColor: '#C1FF72',
                    fontSize: '4rem',
                    border: '4px solid #E4DFDA',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                >
                  👤
                </Avatar>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: '#073B4C',
                    color: '#C1FF72',
                    '&:hover': { backgroundColor: '#0A4F63' },
                    border: '3px solid white'
                  }}
                >
                  <PhotoCameraIcon />
                </IconButton>
              </Box>
              
              <Typography variant="h5" fontWeight="bold" color="#073B4C" gutterBottom>
                {profileData.name}
              </Typography>
              <Typography variant="body1" color="#222222" gutterBottom>
                {profileData.title}
              </Typography>
              
              <Chip 
                label="Perfil Verificado" 
                sx={{ 
                  backgroundColor: '#C1FF72', 
                  color: '#073B4C',
                  fontWeight: 'bold',
                  mt: 2
                }} 
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Main Profile Form */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="#073B4C">
                  Información Personal
                </Typography>
                {!isEditing ? (
                  <Button
                    startIcon={<EditIcon />}
                    onClick={() => setIsEditing(true)}
                    variant="contained"
                    sx={{ 
                      backgroundColor: '#073B4C',
                      '&:hover': { backgroundColor: '#0A4F63' }
                    }}
                  >
                    Editar
                  </Button>
                ) : (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                      variant="contained"
                      sx={{ 
                        backgroundColor: '#C1FF72',
                        color: '#073B4C',
                        '&:hover': { backgroundColor: '#A8E85C' }
                      }}
                    >
                      Guardar
                    </Button>
                    <Button
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      variant="outlined"
                      sx={{ 
                        borderColor: '#222222',
                        color: '#222222',
                        '&:hover': { borderColor: '#073B4C', color: '#073B4C' }
                      }}
                    >
                      Cancelar
                    </Button>
                  </Box>
                )}
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre Completo"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Título Profesional"
                    value={profileData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Teléfono"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ubicación"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Biografía"
                    multiline
                    rows={4}
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight="bold" color="#073B4C" gutterBottom>
                Enlaces Profesionales
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="LinkedIn"
                    value={profileData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="GitHub"
                    value={profileData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Sitio Web"
                    value={profileData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#073B4C' }
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="#073B4C">
                  Habilidades Técnicas
                </Typography>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => setShowSkillDialog(true)}
                  variant="outlined"
                  sx={{ 
                    borderColor: '#C1FF72',
                    color: '#073B4C',
                    '&:hover': { borderColor: '#A8E85C', backgroundColor: 'rgba(193, 255, 114, 0.1)' }
                  }}
                >
                  Agregar Habilidad
                </Button>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={isEditing ? () => removeSkill(skill) : undefined}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#C1FF72' : '#E4DFDA',
                      color: index % 2 === 0 ? '#073B4C' : '#222222',
                      fontWeight: 'medium',
                      '& .MuiChip-deleteIcon': {
                        color: index % 2 === 0 ? '#073B4C' : '#222222',
                      }
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Skill Dialog */}
      <Dialog open={showSkillDialog} onClose={() => setShowSkillDialog(false)}>
        <DialogTitle>Agregar Nueva Habilidad</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Nombre de la habilidad"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSkillDialog(false)}>Cancelar</Button>
          <Button onClick={addSkill} variant="contained">Agregar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileEdit;
