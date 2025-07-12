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
} from '@mui/material';
import {
  Edit as EditIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'nombre',
    email: 'usuario@trustark.com',
    phone: '+1 234 567 8900',
    address: 'Ciudad, País',
    bio: 'detalles de los que busca ser el dev',
  });
  const [tempUserInfo, setTempUserInfo] = useState(userInfo);

  const examData = [
    { id: 1, name: 'examen 1', score: 3, total: 10, color: '#ff6b6b' },
    { id: 2, name: 'examen 2', score: 3, total: 10, color: '#4ecdc4' },
    { id: 3, name: 'examen 3', score: 3, total: 10, color: '#45b7d1' },
  ];

  const certificates = [
    { id: 1, name: 'Certificado JavaScript', date: '2024', icon: '🏆' },
    { id: 2, name: 'Certificado React', date: '2024', icon: '⭐' },
    { id: 3, name: 'Certificado Node.js', date: '2024', icon: '🎖️' },
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

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header Section - Score, Avatar, Name */}
      <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Score */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" fontWeight="bold" sx={{ fontSize: '4rem', color: '#333' }}>
              75
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Score
            </Typography>
          </Box>

          {/* Avatar Circle */}
          <Avatar
            sx={{
              width: 120,
              height: 120,
              backgroundColor: '#e0e0e0',
              border: '3px solid #ddd',
            }}
          >
            {/* Empty circle for user photo */}
          </Avatar>

          {/* User Name and Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              nombre
            </Typography>
            <Typography variant="body1" color="text.secondary">
              detalles de los que busca ser el dev
            </Typography>
            
            {/* Edit Button */}
            <IconButton
              onClick={handleEditSave}
              sx={{
                mt: 1,
                backgroundColor: editMode ? '#4caf50' : '#2196f3',
                color: 'white',
                '&:hover': {
                  backgroundColor: editMode ? '#45a049' : '#1976d2',
                },
              }}
            >
              {editMode ? <CheckCircleIcon /> : <EditIcon />}
            </IconButton>
            {editMode && (
              <IconButton
                onClick={handleEditCancel}
                sx={{
                  ml: 1,
                  backgroundColor: '#f44336',
                  color: 'white',
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                ✕
              </IconButton>
            )}
          </Box>
        </Box>
      </Card>

      {/* Mi Información Section */}
      <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            mi información
          </Typography>
          
          {editMode ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Nombre"
                value={tempUserInfo.name}
                onChange={(e) => setTempUserInfo({ ...tempUserInfo, name: e.target.value })}
                size="small"
                fullWidth
              />
              <TextField
                label="Email"
                value={tempUserInfo.email}
                onChange={(e) => setTempUserInfo({ ...tempUserInfo, email: e.target.value })}
                size="small"
                fullWidth
              />
              <TextField
                label="Teléfono"
                value={tempUserInfo.phone}
                onChange={(e) => setTempUserInfo({ ...tempUserInfo, phone: e.target.value })}
                size="small"
                fullWidth
              />
              <TextField
                label="Dirección"
                value={tempUserInfo.address}
                onChange={(e) => setTempUserInfo({ ...tempUserInfo, address: e.target.value })}
                size="small"
                fullWidth
              />
              <TextField
                label="Biografía"
                value={tempUserInfo.bio}
                onChange={(e) => setTempUserInfo({ ...tempUserInfo, bio: e.target.value })}
                multiline
                rows={3}
                size="small"
                fullWidth
              />
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1"><strong>Email:</strong> {userInfo.email}</Typography>
              <Typography variant="body1"><strong>Teléfono:</strong> {userInfo.phone}</Typography>
              <Typography variant="body1"><strong>Dirección:</strong> {userInfo.address}</Typography>
              <Typography variant="body1"><strong>Biografía:</strong> {userInfo.bio}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Exams Section - 3 boxes in a row */}
      <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            {examData.map((exam) => (
              <Paper
                key={exam.id}
                sx={{
                  flex: 1,
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 3,
                  border: '2px solid #ddd',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <Typography variant="h4" fontWeight="bold" color="#333">
                  3/10
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight="medium">
                  {exam.name}
                </Typography>
              </Paper>
            ))}
            {/* Arrow indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#999' }}>
              <Typography variant="h4">›</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Certificates Section */}
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            certificado
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {certificates.map((cert) => (
              <Paper
                key={cert.id}
                sx={{
                  width: 100,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  border: '2px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Typography variant="h4">
                  {cert.icon}
                </Typography>
              </Paper>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
