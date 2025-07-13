import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  FaChartLine,
  FaChartBar,
  FaBullseye,
  FaRocket,
  FaMobileAlt,
  FaSearch,
  FaEnvelope,
} from 'react-icons/fa';

const Marketing = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header principal */}
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
              <FaChartLine />
            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: '#C1FF72', mb: 1 }}>
              Evaluaciones de Marketing
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#E4DFDA', opacity: 0.9, mb: 1 }}>
              Certifica tus habilidades en marketing digital y estrategia
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E4DFDA',
                opacity: 0.8,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}>
              Demuestra tu expertise en marketing digital, análisis de datos,
              estrategias de contenido y gestión de campañas publicitarias.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Cards informativas */}
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
                <FaChartBar />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Analytics Reales
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Casos de estudio con datos reales de campañas
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
                <FaBullseye />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                ROI Verificado
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Demuestra tu capacidad para generar resultados
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
                <FaRocket />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Growth Hacking
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Estrategias de crecimiento y optimización
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Especialidades disponibles */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          backgroundColor: 'white',
          border: '1px solid rgba(7, 59, 76, 0.1)',
        }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: '#073B4C', mb: 3 }}>
            Áreas de Evaluación
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#073B4C',
                  borderRadius: 2,
                }}>
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}>
                    <FaChartBar
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Marketing Digital
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    SEM, PPC, analytics, conversiones
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#073B4C',
                  borderRadius: 2,
                }}>
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}>
                    <FaMobileAlt
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Redes Sociales
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Community management, content strategy
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#073B4C',
                  borderRadius: 2,
                }}>
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}>
                    <FaSearch
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      SEO/SEM
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Optimización orgánica y paga
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: '#073B4C',
                  borderRadius: 2,
                }}>
                <CardContent sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}>
                    <FaEnvelope
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Email Marketing
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Automatización, segmentación, nurturing
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Marketing;
