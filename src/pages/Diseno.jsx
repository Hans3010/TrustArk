import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  FaPalette,
  FaMask,
  FaImage,
  FaStar,
  FaDesktop,
  FaPaintBrush,
  FaCode,
  FaTags,
} from 'react-icons/fa';

const Diseno = () => {
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
              <FaPalette />
            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: '#C1FF72', mb: 1 }}>
              Evaluaciones de Diseño
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#E4DFDA', opacity: 0.9, mb: 1 }}>
              Demuestra tu creatividad y habilidades visuales
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E4DFDA',
                opacity: 0.8,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}>
              Explora diferentes especialidades del diseño y demuestra tus
              habilidades en composición, teoría del color, UX/UI y herramientas
              de diseño.
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
                <FaMask />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Proyectos Reales
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Evaluaciones basadas en casos de estudio reales
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
                <FaImage />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Portfolio NFT
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Crea tu portfolio verificado en blockchain
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
                <FaStar />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Score Creativo
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Construye tu reputación como diseñador profesional
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
            Especialidades Disponibles
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
                    <FaMask style={{ color: '#C1FF72', fontSize: '1.2rem' }} />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      UI/UX Design
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Experiencia de usuario, wireframes, prototipos
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
                    <FaPaintBrush
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Diseño Gráfico
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Identidad visual, composición, tipografía
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
                    <FaDesktop
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Diseño Web
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Interfaces web, responsive design, CSS
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
                    <FaTags style={{ color: '#C1FF72', fontSize: '1.2rem' }} />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Branding
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Identidad de marca, logos, estrategia visual
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

export default Diseno;
