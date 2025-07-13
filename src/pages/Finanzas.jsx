import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import {
  FaDollarSign,
  FaChartLine,
  FaBitcoin,
  FaUniversity,
  FaCalculator,
  FaChartPie,
  FaCoins,
} from 'react-icons/fa';

const Finanzas = () => {
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
              <FaDollarSign />
            </Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: '#C1FF72', mb: 1 }}>
              Evaluaciones Financieras
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#E4DFDA', opacity: 0.9, mb: 1 }}>
              Certifica tu expertise en finanzas y análisis económico
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E4DFDA',
                opacity: 0.8,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}>
              Demuestra tu conocimiento en análisis financiero, inversiones,
              contabilidad y las nuevas tecnologías financieras del blockchain.
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
                <FaChartLine />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                Análisis Real
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Estados financieros y casos reales del mercado
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
                <FaBitcoin />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                DeFi & Crypto
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Finanzas descentralizadas y activos digitales
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
                <FaUniversity />
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C', mb: 1 }}>
                FinTech
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                Tecnologías financieras emergentes
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
                    <FaCalculator
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Contabilidad
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    NIIF, estados financieros, auditoría
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
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Inversiones
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Portafolios, valoración, riesgo
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
                    <FaChartPie
                      style={{ color: '#C1FF72', fontSize: '1.2rem' }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Análisis Financiero
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Ratios, proyecciones, modelado
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
                    <FaCoins style={{ color: '#C1FF72', fontSize: '1.2rem' }} />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ color: '#E4DFDA' }}>
                      Criptomonedas
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#E4DFDA', opacity: 0.8 }}>
                    Trading, DeFi, blockchain economics
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

export default Finanzas;
