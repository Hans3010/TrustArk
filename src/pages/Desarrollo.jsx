import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  FaCode,
  FaBullseye,
  FaChartLine,
  FaTrophy,
  FaArrowRight,
} from 'react-icons/fa';

const Desarrollo = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header principal - mismo estilo que el perfil */}
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(7, 59, 76, 0.12)',
          mb: 4,
          background: 'linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}>
            <Box
              sx={{
                color: '#C1FF72',
                fontSize: '4rem',
                mb: 2,
              }}>
              <FaCode />
            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: '#C1FF72', mb: 1 }}>
              Evaluaciones de Desarrollo
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#E4DFDA', opacity: 0.9, mb: 1 }}>
              Demuestra tus habilidades técnicas y mejora tu score de confianza
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E4DFDA',
                opacity: 0.8,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}>
              Selecciona una especialización del menú lateral para acceder a
              exámenes diseñados por expertos que evaluarán tus conocimientos y
              habilidades prácticas en desarrollo de software.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Cards informativas - usando el grid de 3 columnas */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              backgroundColor: 'white',
              border: '1px solid rgba(7, 59, 76, 0.1)',
              height: '100%',
            }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Box
                sx={{
                  color: '#073B4C',
                  fontSize: '3rem',
                  mb: 2,
                }}>
                <FaBullseye />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Evaluaciones Precisas
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Exámenes diseñados por expertos de la industria
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              backgroundColor: 'white',
              border: '1px solid rgba(7, 59, 76, 0.1)',
              height: '100%',
            }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Box
                sx={{
                  color: '#073B4C',
                  fontSize: '3rem',
                  mb: 2,
                }}>
                <FaChartLine />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Mejora tu Score
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Cada examen aprobado aumenta tu puntaje de confianza
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              backgroundColor: 'white',
              border: '1px solid rgba(7, 59, 76, 0.1)',
              height: '100%',
            }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Box
                sx={{
                  color: '#073B4C',
                  fontSize: '3rem',
                  mb: 2,
                }}>
                <FaTrophy />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Certificación NFT
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Obtén certificados verificables en blockchain
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to action - igual que en el perfil */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          backgroundColor: 'white',
          border: '1px solid rgba(7, 59, 76, 0.1)',
        }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                ¿Listo para comenzar?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#073B4C', opacity: 0.8 }}>
                Elige una especialización del menú lateral para ver los exámenes
                disponibles
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#C1FF72',
                backgroundColor: 'rgba(193, 255, 114, 0.1)',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: '1px solid rgba(193, 255, 114, 0.3)',
              }}>
              <FaArrowRight style={{ fontSize: '1.2rem' }} />
              <Typography
                variant="body1"
                fontWeight="semibold"
                sx={{ color: '#073B4C' }}>
                Selecciona una opción del menú
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Desarrollo;
