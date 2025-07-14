import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Avatar,
  Chip,
  CircularProgress,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from '@mui/material';
import {
  FaWallet,
  FaChartLine,
  FaUsers,
  FaCoins,
  FaHistory,
  FaStar,
  FaShieldAlt,
  FaNetworkWired
} from 'react-icons/fa';

const Dashboard = () => {
  const [accountData, setAccountData] = useState(null);
  const [ledgerData, setLedgerData] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stellar Horizon API base URL
  const STELLAR_HORIZON_URL = 'https://horizon.stellar.org';
  
  // Cuenta de ejemplo - en producción esto vendría de autenticación
  const ACCOUNT_ID = 'GDQNY3PBOJOKYZSRMK2S7LHHGWZIUISD4QORETLMXEWXBI7KFZZMKTL3';

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Obtener información de la cuenta
      const accountResponse = await fetch(`${STELLAR_HORIZON_URL}/accounts/${ACCOUNT_ID}`);
      if (!accountResponse.ok) throw new Error('Error al obtener datos de la cuenta');
      const accountInfo = await accountResponse.json();

      // Obtener información del ledger actual
      const ledgerResponse = await fetch(`${STELLAR_HORIZON_URL}/ledgers?order=desc&limit=1`);
      if (!ledgerResponse.ok) throw new Error('Error al obtener datos del ledger');
      const ledgerInfo = await ledgerResponse.json();

      // Obtener historial de transacciones
      const transactionsResponse = await fetch(`${STELLAR_HORIZON_URL}/accounts/${ACCOUNT_ID}/transactions?order=desc&limit=10`);
      if (!transactionsResponse.ok) throw new Error('Error al obtener transacciones');
      const transactionsInfo = await transactionsResponse.json();

      setAccountData(accountInfo);
      setLedgerData(ledgerInfo.records[0]);
      setTransactionHistory(transactionsInfo.records);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 7
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAssetDisplay = (asset) => {
    if (asset.asset_type === 'native') return 'XLM';
    return `${asset.asset_code} (${asset.asset_issuer.substring(0, 8)}...)`;
  };

  if (loading) {
    return (
      <Container maxWidth={false} sx={{ py: 4, px: 2, maxWidth: 'calc(100vw - 280px)', ml: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Cargando datos de Stellar...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth={false} sx={{ py: 4, px: 2, maxWidth: 'calc(100vw - 280px)', ml: 'auto' }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} sx={{ py: 2, px: 2, maxWidth: 'calc(100vw - 280px)', ml: 'auto' }}>
      {/* Header */}
      <Box sx={{ 
        mb: 3, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
        borderRadius: 3,
        p: 3,
        color: 'white'
      }}>
        <FaNetworkWired style={{ fontSize: '48px', color: '#C1FF72', marginBottom: '16px' }} />
        <Typography variant="h3" fontWeight="bold" color="#C1FF72" sx={{ mb: 1 }}>
          Dashboard Stellar
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Monitoreo en tiempo real de la red Stellar
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Información de la cuenta */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaWallet style={{ color: '#073B4C', fontSize: '24px', marginRight: '12px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Información de la Cuenta
                </Typography>
              </Box>

              {accountData && (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, backgroundColor: '#F8F9FA', borderRadius: 2 }}>
                      <Typography variant="body2" color="#666" fontWeight="bold">
                        Account ID
                      </Typography>
                      <Typography variant="body1" fontFamily="monospace" sx={{ wordBreak: 'break-all' }}>
                        {accountData.id}
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <FaCoins style={{ color: '#F39C12', fontSize: '32px', marginBottom: '8px' }} />
                      <Typography variant="h6" fontWeight="bold" color="#F39C12">
                        {accountData.sequence}
                      </Typography>
                      <Typography variant="body2" color="#666">
                        Sequence Number
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <FaShieldAlt style={{ color: '#27AE60', fontSize: '32px', marginBottom: '8px' }} />
                      <Typography variant="h6" fontWeight="bold" color="#27AE60">
                        {accountData.subentry_count}
                      </Typography>
                      <Typography variant="body2" color="#666">
                        Subentries
                      </Typography>
                    </Paper>
                  </Grid>

                  {/* Balances */}
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="bold" color="#073B4C" sx={{ mb: 2 }}>
                      Balances
                    </Typography>
                    <Grid container spacing={2}>
                      {accountData.balances.map((balance, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <Paper sx={{ 
                            p: 2, 
                            borderRadius: 2,
                            border: balance.asset_type === 'native' ? '2px solid #C1FF72' : '1px solid #E4DFDA'
                          }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box>
                                <Typography variant="h6" fontWeight="bold" color="#073B4C">
                                  {formatAmount(balance.balance)}
                                </Typography>
                                <Typography variant="body2" color="#666">
                                  {getAssetDisplay(balance)}
                                </Typography>
                              </Box>
                              {balance.asset_type === 'native' && (
                                <Chip 
                                  label="Native"
                                  size="small"
                                  sx={{ backgroundColor: '#C1FF72', color: '#073B4C', fontWeight: 'bold' }}
                                />
                              )}
                            </Box>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Información del Ledger */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaChartLine style={{ color: '#3498DB', fontSize: '24px', marginRight: '12px' }} />
                <Typography variant="h6" fontWeight="bold" color="#073B4C">
                  Estado del Ledger
                </Typography>
              </Box>

              {ledgerData && (
                <Box>
                  <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2, mb: 2 }}>
                    <Typography variant="h4" fontWeight="bold" color="#3498DB">
                      {ledgerData.sequence}
                    </Typography>
                    <Typography variant="body2" color="#666">
                      Ledger Actual
                    </Typography>
                  </Paper>

                  <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="#E74C3C">
                      {ledgerData.transaction_count}
                    </Typography>
                    <Typography variant="body2" color="#666">
                      Transacciones
                    </Typography>
                  </Paper>

                  <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2, mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold" color="#27AE60">
                      {ledgerData.operation_count}
                    </Typography>
                    <Typography variant="body2" color="#666">
                      Operaciones
                    </Typography>
                  </Paper>

                  <Paper sx={{ p: 2, borderRadius: 2 }}>
                    <Typography variant="body2" color="#666" fontWeight="bold" sx={{ mb: 1 }}>
                      Última actualización
                    </Typography>
                    <Typography variant="body2">
                      {formatDate(ledgerData.closed_at)}
                    </Typography>
                  </Paper>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Historial de Transacciones */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaHistory style={{ color: '#9C27B0', fontSize: '24px', marginRight: '12px' }} />
                <Typography variant="h5" fontWeight="bold" color="#073B4C">
                  Historial de Transacciones
                </Typography>
              </Box>

              <List sx={{ p: 0 }}>
                {transactionHistory.map((transaction, index) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem sx={{ px: 0, py: 2 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ 
                          backgroundColor: '#9C27B020', 
                          color: '#9C27B0',
                          width: 48,
                          height: 48
                        }}>
                          <FaHistory style={{ fontSize: '20px' }} />
                        </Avatar>
                      </ListItemAvatar>
                      
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Typography variant="body1" fontWeight="bold" color="#073B4C">
                              Transaction #{transaction.ledger}
                            </Typography>
                            <Chip 
                              label={transaction.successful ? 'Exitosa' : 'Fallida'}
                              size="small"
                              sx={{ 
                                backgroundColor: transaction.successful ? '#27AE6020' : '#E74C3C20',
                                color: transaction.successful ? '#27AE60' : '#E74C3C',
                                fontWeight: 'bold'
                              }}
                            />
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" color="#666" sx={{ mb: 0.5 }}>
                              Hash: {transaction.hash.substring(0, 16)}...
                            </Typography>
                            <Typography variant="body2" color="#666">
                              {formatDate(transaction.created_at)} • {transaction.operation_count} operaciones
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < transactionHistory.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>

              {transactionHistory.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="body1" color="#666">
                    No hay transacciones recientes
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
