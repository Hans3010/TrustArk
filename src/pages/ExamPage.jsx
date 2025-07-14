import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  IconButton,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Alert,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Avatar,
  Fade,
  Grow,
} from '@mui/material';
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaCertificate,
  FaArrowLeft,
  FaEdit,
  FaClipboardList,
  FaBullseye,
  FaTrophy,
  FaRocket,
  FaHome,
  FaRedoAlt,
  FaFlag,
  FaCheck,
  FaTimes,
  FaDownload,
  FaShare,
  FaGem,
  FaUser,
  FaCalendar,
  FaStar,
} from 'react-icons/fa';
import useNavigation from '../hooks/useNavigation';

const ExamPage = ({ examType, setCurrentPage: navigateToPage }) => {
  const setCurrentPage = navigateToPage || useNavigation().setCurrentPage;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [examResults, setExamResults] = useState(null);

  // Preguntas para JavaScript Completo
  const javascriptQuestions = [
    {
      id: 1,
      question:
        '¿Cuál es la forma correcta de declarar una variable en JavaScript que no puede ser reasignada?',
      options: [
        "var myVariable = 'value';",
        "let myVariable = 'value';",
        "const myVariable = 'value';",
        "variable myVariable = 'value';",
      ],
      correct: 2,
      explanation:
        'const se utiliza para declarar variables que no pueden ser reasignadas después de su inicialización.',
    },
    {
      id: 2,
      question:
        '¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?',
      options: ['append()', 'add()', 'push()', 'insert()'],
      correct: 2,
      explanation:
        'El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.',
    },
    {
      id: 3,
      question:
        "¿Cuál es la diferencia principal entre '==' y '===' en JavaScript?",
      options: [
        'No hay diferencia, ambos son iguales',
        "'==' compara solo el valor, '===' compara valor y tipo",
        "'==' es más rápido que '==='",
        "'===' solo funciona con números",
      ],
      correct: 1,
      explanation:
        "'==' realiza coerción de tipos antes de comparar, mientras que '===' compara tanto el valor como el tipo sin coerción.",
    },
    {
      id: 4,
      question: '¿Qué hace el método map() en JavaScript?',
      options: [
        'Modifica el array original',
        'Crea un nuevo array con los resultados de llamar a una función para cada elemento',
        'Filtra elementos del array',
        'Ordena el array',
      ],
      correct: 1,
      explanation:
        'map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.',
    },
    {
      id: 5,
      question:
        '¿Cuál es la forma correcta de definir una función arrow en JavaScript?',
      options: [
        'function => (x) { return x * 2; }',
        'const myFunc = (x) => { return x * 2; }',
        'const myFunc = function(x) => { return x * 2; }',
        'arrow myFunc = (x) { return x * 2; }',
      ],
      correct: 1,
      explanation:
        'Las arrow functions se definen usando la sintaxis: const nombreFuncion = (parametros) => { cuerpo de la función }',
    },
    {
      id: 6,
      question: "¿Qué es el 'hoisting' en JavaScript?",
      options: [
        'Una forma de ordenar arrays',
        'El comportamiento de mover declaraciones al inicio del scope',
        'Un método para optimizar el código',
        'Una técnica de programación orientada a objetos',
      ],
      correct: 1,
      explanation:
        'Hoisting es el comportamiento de JavaScript de mover las declaraciones de variables y funciones al inicio de su scope durante la compilación.',
    },
    {
      id: 7,
      question:
        '¿Cuál es la forma correcta de manejar una Promise en JavaScript?',
      options: [
        'promise.handle().error()',
        'promise.then().catch()',
        'promise.success().fail()',
        'promise.resolve().reject()',
      ],
      correct: 1,
      explanation:
        'Las Promises se manejan usando .then() para el caso exitoso y .catch() para manejar errores.',
    },
    {
      id: 8,
      question: "¿Qué hace 'typeof null' en JavaScript?",
      options: [
        "Retorna 'null'",
        "Retorna 'undefined'",
        "Retorna 'object'",
        "Retorna 'boolean'",
      ],
      correct: 2,
      explanation:
        "typeof null retorna 'object' debido a un bug histórico en JavaScript que se mantiene por compatibilidad.",
    },
    {
      id: 9,
      question: "¿Cuál es la diferencia entre 'let' y 'var' en JavaScript?",
      options: [
        'No hay diferencia',
        "'let' tiene scope de bloque, 'var' tiene scope de función",
        "'var' es más moderno que 'let'",
        "'let' solo funciona en navegadores nuevos",
      ],
      correct: 1,
      explanation:
        "'let' tiene scope de bloque y no permite redeclaración, mientras que 'var' tiene scope de función y permite redeclaración.",
    },
    {
      id: 10,
      question: '¿Qué es el Event Loop en JavaScript?',
      options: [
        'Un tipo de bucle for especial',
        'El mecanismo que maneja la ejecución asíncrona',
        'Una función para manejar eventos DOM',
        'Un método para iterar sobre objetos',
      ],
      correct: 1,
      explanation:
        'El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asíncronas de forma no bloqueante.',
    },
  ];

  // Configuración de exámenes por tipo
  const examConfig = {
    javascript: {
      title: 'JavaScript Completo',
      description: 'Evaluación comprensiva de JavaScript moderno',
      questions: javascriptQuestions,
      duration: 1800, // 30 minutos
      passingScore: 70,
    },
    python: {
      title: 'Python & Web3',
      description: 'Python aplicado a desarrollo blockchain',
      questions: javascriptQuestions, // Por ahora reutilizamos las preguntas
      duration: 1800,
      passingScore: 70,
    },
    react: {
      title: 'React + DApps',
      description: 'React para aplicaciones descentralizadas',
      questions: javascriptQuestions,
      duration: 2100, // 35 minutos
      passingScore: 75,
    },
    // Agregar más configuraciones según sea necesario
  };

  const currentExam = examConfig[examType] || examConfig.javascript;
  const questions = currentExam.questions;

  const handleSubmitExam = useCallback(() => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correct) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    const passed = finalScore >= currentExam.passingScore;
    
    // Crear resultados del examen
    const results = {
      score: finalScore,
      correctAnswers,
      totalQuestions: questions.length,
      passed,
      examTitle: currentExam.title,
      examType: examType,
      completedAt: new Date().toISOString(),
      certificateId: passed ? `CERT-${Date.now()}` : null,
      stellarTxHash: passed ? `stellar_tx_${Date.now()}` : null
    };

    setScore(finalScore);
    setExamResults(results);
    setIsExamCompleted(true);

    // Si aprobó, mostrar certificado después de un delay y guardarlo
    if (passed) {
      // Guardar certificado en localStorage
      const certificate = {
        id: results.certificateId,
        name: `Certificado ${currentExam.title}`,
        icon: '🏆',
        rarity: finalScore >= 95 ? 'legendary' : finalScore >= 85 ? 'epic' : 'rare',
        examType: examType,
        score: finalScore,
        stellarTxHash: results.stellarTxHash,
        completedAt: results.completedAt,
        description: `Certificación en ${currentExam.title} con ${finalScore}% de acierto`
      };
      
      // Obtener certificados existentes del localStorage
      const existingCertificates = JSON.parse(localStorage.getItem('userCertificates') || '[]');
      
      // Agregar el nuevo certificado
      existingCertificates.push(certificate);
      
      // Guardar en localStorage
      localStorage.setItem('userCertificates', JSON.stringify(existingCertificates));
      
      setTimeout(() => {
        setShowCertificate(true);
      }, 2000);
    }

    // Aquí harías la llamada a la API para guardar los resultados
    try {
      // await fetch('/api/exams/submit', { ... })
      console.log('Resultados del examen:', results);
    } catch (error) {
      console.error('Error al enviar examen:', error);
    }
  }, [questions, selectedAnswers, currentExam, examType]);

  // Timer del examen
  useEffect(() => {
    if (isExamStarted && !isExamCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isExamCompleted) {
      handleSubmitExam();
    }
  }, [timeLeft, isExamStarted, isExamCompleted, handleSubmitExam]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setIsExamStarted(true);
    setTimeLeft(currentExam.duration);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];

  // Componente del Modal de Certificación NFT/POAP
  const CertificateModal = () => (
    <Dialog
      open={showCertificate}
      maxWidth="md"
      fullWidth
      onClose={() => setShowCertificate(false)}
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: 'linear-gradient(135deg, #073B4C 0%, #0A5F73 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }
      }}
    >
      {/* Efectos de fondo decorativos */}
      <Box sx={{
        position: 'absolute',
        top: -20,
        right: -20,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(193, 255, 114, 0.2) 0%, transparent 70%)',
        zIndex: 1
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(193, 255, 114, 0.15) 0%, transparent 70%)',
        zIndex: 1
      }} />

      <DialogContent sx={{ p: 0, position: 'relative', zIndex: 2 }}>
        <IconButton
          onClick={() => setShowCertificate(false)}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            zIndex: 3
          }}
        >
          <FaTimes />
        </IconButton>

        {/* Animación de celebración */}
        <Box sx={{ textAlign: 'center', py: 4, px: 3 }}>
          <Grow in={showCertificate} timeout={1000}>
            <Box>
              <FaTrophy style={{ 
                fontSize: '4rem', 
                color: '#C1FF72',
                filter: 'drop-shadow(0 4px 8px rgba(193, 255, 114, 0.4))',
                marginBottom: '16px'
              }} />
            </Box>
          </Grow>

          <Fade in={showCertificate} timeout={1500}>
            <Typography variant="h3" fontWeight="bold" color="#C1FF72" sx={{ mb: 2 }}>
              ¡Felicitaciones!
            </Typography>
          </Fade>

          <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
            Has obtenido tu certificado NFT
          </Typography>

          {/* Certificado */}
          <Card sx={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: 3,
            border: '2px solid rgba(193, 255, 114, 0.3)',
            backdropFilter: 'blur(10px)',
            mb: 3,
            p: 3
          }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3} textAlign="center">
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 1,
                    background: 'linear-gradient(45deg, #C1FF72, #A8E063)',
                    color: '#073B4C'
                  }}
                >
                  <FaCertificate style={{ fontSize: '2rem' }} />
                </Avatar>
                <Chip
                  icon={<FaGem style={{ fontSize: '12px' }} />}
                  label="NFT Certificate"
                  size="small"
                  sx={{
                    backgroundColor: '#C1FF72',
                    color: '#073B4C',
                    fontWeight: 'bold'
                  }}
                />
              </Grid>

              <Grid item xs={12} md={9}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {examResults?.examTitle} - {examResults?.examType}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <FaUser style={{ fontSize: '14px', opacity: 0.7 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Diego Guzman Montoya
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <FaCalendar style={{ fontSize: '14px', opacity: 0.7 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {new Date().toLocaleDateString('es-ES')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <FaStar style={{ fontSize: '14px', color: '#C1FF72' }} />
                    <Typography variant="body2" fontWeight="bold">
                      {examResults?.score}%
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="caption" sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.7rem',
                  opacity: 0.6,
                  display: 'block'
                }}>
                  Certificate ID: {examResults?.certificateId}
                </Typography>
                
                <Typography variant="caption" sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.7rem',
                  opacity: 0.6
                }}>
                  Stellar TX: {examResults?.stellarTxHash?.substring(0, 16)}...
                </Typography>
              </Grid>
            </Grid>
          </Card>

          {/* Información del POAP */}
          <Box sx={{
            background: 'rgba(193, 255, 114, 0.1)',
            borderRadius: 2,
            p: 2,
            mb: 3,
            border: '1px solid rgba(193, 255, 114, 0.3)'
          }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: '#C1FF72' }}>
              🎉 POAP Desbloqueado
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Tu certificado ha sido minteado como NFT en la blockchain de Stellar. 
              Este POAP (Proof of Attendance Protocol) certifica tu logro de manera permanente y verificable.
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<FaDownload />}
          onClick={() => {
            // Lógica para descargar certificado
            console.log('Descargando certificado...');
          }}
          sx={{
            borderColor: '#C1FF72',
            color: '#C1FF72',
            '&:hover': {
              borderColor: '#C1FF72',
              backgroundColor: 'rgba(193, 255, 114, 0.1)'
            }
          }}
        >
          Descargar
        </Button>

        <Button
          variant="outlined"
          startIcon={<FaShare />}
          onClick={() => {
            // Lógica para compartir
            console.log('Compartiendo certificado...');
          }}
          sx={{
            borderColor: '#C1FF72',
            color: '#C1FF72',
            '&:hover': {
              borderColor: '#C1FF72',
              backgroundColor: 'rgba(193, 255, 114, 0.1)'
            }
          }}
        >
          Compartir
        </Button>

        <Button
          variant="contained"
          startIcon={<FaRocket />}
          onClick={() => {
            setShowCertificate(false);
            setCurrentPage('profile');
          }}
          sx={{
            backgroundColor: '#C1FF72',
            color: '#073B4C',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#A8E063'
            }
          }}
        >
          Ver Perfil
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            setShowCertificate(false);
            setCurrentPage('desarrollo');
          }}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)'
            }
          }}
        >
          Seguir Aprendiendo
        </Button>
      </DialogActions>
    </Dialog>
  );

  // Pantalla de inicio del examen
  if (!isExamStarted) {
    return (
      <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
        {/* Header principal del examen */}
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
                <FaEdit />
              </Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: '#C1FF72', mb: 1 }}>
                {currentExam.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: '#E4DFDA', opacity: 0.9, mb: 1 }}>
                {currentExam.description}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#E4DFDA',
                  opacity: 0.8,
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}>
                Pon a prueba tus conocimientos con esta evaluación comprensiva.
                ¡Demuestra tu dominio y obtén tu certificación NFT!
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Información del examen */}
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
                  <FaClipboardList />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: '#073B4C', mb: 1 }}>
                  Preguntas
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: '#C1FF72', mb: 1 }}>
                  {questions.length}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  preguntas de selección múltiple
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
                  <FaClock />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: '#073B4C', mb: 1 }}>
                  Duración
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: '#C1FF72', mb: 1 }}>
                  {Math.round(currentExam.duration / 60)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  minutos para completar
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
                  Puntaje mínimo
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: '#C1FF72', mb: 1 }}>
                  {currentExam.passingScore}%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  para aprobar
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Instrucciones */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            backgroundColor: 'white',
            border: '1px solid rgba(7, 59, 76, 0.1)',
            mb: 4,
          }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <FaClipboardList
                style={{ color: '#073B4C', fontSize: '1.5rem' }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#073B4C' }}>
                Instrucciones del Examen
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Lee cada pregunta cuidadosamente
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Selecciona la respuesta correcta
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Puedes navegar entre preguntas
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Timer automático incluido
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Certificado NFT al aprobar
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FaCheck style={{ color: '#C1FF72', fontSize: '1rem' }} />
                    <Typography variant="body1" sx={{ color: '#073B4C' }}>
                      Puntos para tu score TrustArk
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Botón para comenzar */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            backgroundColor: 'white',
            border: '1px solid rgba(7, 59, 76, 0.1)',
          }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#073B4C',
                opacity: 0.8,
                mb: 3,
                fontSize: '1.1rem',
              }}>
              ¿Estás listo para comenzar? Una vez que inicies el examen, el
              timer comenzará a correr.
            </Typography>
            <Button
              onClick={handleStartExam}
              variant="contained"
              size="large"
              startIcon={<FaRocket />}
              sx={{
                backgroundColor: '#C1FF72',
                color: '#073B4C',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                px: 4,
                py: 2,
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(193, 255, 114, 0.3)',
                '&:hover': {
                  backgroundColor: '#A8E85C',
                  boxShadow: '0 6px 20px rgba(193, 255, 114, 0.4)',
                },
              }}>
              Comenzar Examen
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  // Pantalla de resultados
  if (isExamCompleted) {
    const passed = score >= currentExam.passingScore;
    return (
      <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
        {/* Header de resultados */}
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(7, 59, 76, 0.12)',
            mb: 4,
            background: passed
              ? 'linear-gradient(135deg, #C1FF72 0%, #A8E85C 100%)'
              : 'linear-gradient(135deg, #FF4444 0%, #CC3333 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}>
          <CardContent sx={{ p: 4, textAlign: 'center' }}>
            <Box
              sx={{
                color: passed ? '#073B4C' : 'white',
                fontSize: '4rem',
                mb: 3,
                display: 'flex',
                justifyContent: 'center',
              }}>
              {passed ? <FaCheckCircle /> : <FaTimesCircle />}
            </Box>

            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: passed ? '#073B4C' : 'white',
                mb: 2,
              }}>
              {passed ? '¡Felicitaciones!' : 'Examen No Aprobado'}
            </Typography>

            <Typography
              variant="h2"
              fontWeight="900"
              sx={{
                color: passed ? '#073B4C' : 'white',
                mb: 2,
              }}>
              {score}%
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: passed ? '#073B4C' : 'white',
                opacity: 0.9,
                maxWidth: '600px',
                mx: 'auto',
              }}>
              {passed
                ? `Has aprobado exitosamente el examen de ${currentExam.title}`
                : `Necesitas ${currentExam.passingScore}% para aprobar. ¡No te rindas, sigue estudiando!`}
            </Typography>
          </CardContent>
        </Card>

        {/* Estadísticas del examen */}
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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: '#073B4C', mb: 2 }}>
                  Respuestas Correctas
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: '#C1FF72', mb: 1 }}>
                  {Math.round(questions.length * (score / 100))} /{' '}
                  {questions.length}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  preguntas acertadas
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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: '#073B4C', mb: 2 }}>
                  Puntos Ganados
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: '#C1FF72', mb: 1 }}>
                  +{passed ? Math.round(score * 2) : Math.round(score * 0.5)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  para tu TrustScore
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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: '#073B4C', mb: 2 }}>
                  Estado
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    color: passed ? '#C1FF72' : '#FF4444',
                    mb: 1,
                  }}>
                  {passed ? 'APROBADO' : 'REPROBADO'}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#073B4C', opacity: 0.7 }}>
                  resultado final
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Certificado NFT (solo si aprobó) */}
        {passed && (
          <Card
            onClick={() => setShowCertificate(true)}
            sx={{
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              background: 'linear-gradient(135deg, #C1FF72 0%, #A8E85C 100%)',
              border: '2px solid #073B4C',
              mb: 4,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              },
            }}>
            <CardContent sx={{ p: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                  color: '#073B4C',
                }}>
                <Box sx={{ fontSize: '3rem' }}>
                  <FaTrophy />
                </Box>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    ¡Certificado NFT Desbloqueado!
                  </Typography>
                  <Typography variant="body1">
                    Has ganado una certificación verificable en blockchain para{' '}
                    {currentExam.title}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCertificate(true);
                      }}
                      sx={{
                        borderColor: '#073B4C',
                        color: '#073B4C',
                        fontSize: '0.75rem',
                        '&:hover': {
                          borderColor: '#073B4C',
                          backgroundColor: 'rgba(7, 59, 76, 0.1)',
                        },
                      }}>
                      Ver Detalles
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage('profile');
                      }}
                      sx={{
                        backgroundColor: '#073B4C',
                        color: '#C1FF72',
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: '#0A4F63',
                        },
                      }}>
                      Ir a Perfil
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ fontSize: '3rem' }}>
                  <FaCertificate />
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Acciones */}
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
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                onClick={() => window.location.reload()}
                variant="outlined"
                startIcon={<FaHome />}
                sx={{
                  borderColor: '#073B4C',
                  color: '#073B4C',
                  fontWeight: 'semibold',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#073B4C',
                    backgroundColor: 'rgba(7, 59, 76, 0.1)',
                  },
                }}>
                Volver al Dashboard
              </Button>
              {!passed && (
                <Button
                  onClick={() => window.location.reload()}
                  variant="contained"
                  startIcon={<FaRedoAlt />}
                  sx={{
                    backgroundColor: '#C1FF72',
                    color: '#073B4C',
                    fontWeight: 'semibold',
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#A8E85C',
                    },
                  }}>
                  Reintentar Examen
                </Button>
              )}
              {passed && (
                <Button
                  onClick={() => setShowCertificate(true)}
                  variant="contained"
                  startIcon={<FaCertificate />}
                  sx={{
                    backgroundColor: '#C1FF72',
                    color: '#073B4C',
                    fontWeight: 'semibold',
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#A8E85C',
                    },
                  }}>
                  Ver Certificado
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }

  // Pantalla del examen en progreso
  return (
    <Box sx={{ p: 3, backgroundColor: '#E4DFDA', minHeight: '100vh' }}>
      {/* Header del examen en progreso */}
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(7, 59, 76, 0.12)',
          mb: 4,
          background: 'linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: '#C1FF72', mb: 1 }}>
                {currentExam.title}
              </Typography>
              <Typography variant="h6" sx={{ color: '#E4DFDA', opacity: 0.9 }}>
                Pregunta {currentQuestion + 1} de {questions.length}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(193, 255, 114, 0.2)',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: '1px solid rgba(193, 255, 114, 0.3)',
              }}>
              <FaClock style={{ color: '#C1FF72', fontSize: '1.2rem' }} />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#C1FF72' }}>
                {formatTime(timeLeft)}
              </Typography>
            </Box>
          </Box>

          {/* Barra de progreso */}
          <Box sx={{ mt: 3 }}>
            <LinearProgress
              variant="determinate"
              value={((currentQuestion + 1) / questions.length) * 100}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(0, 24, 38, 0.3)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#C1FF72',
                  borderRadius: 4,
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: '#E4DFDA',
                opacity: 0.8,
                mt: 1,
                fontWeight: 'semibold',
              }}>
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              completado
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Pregunta actual */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          backgroundColor: 'white',
          border: '1px solid rgba(7, 59, 76, 0.1)',
          mb: 4,
        }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
              <Chip
                label={currentQuestion + 1}
                sx={{
                  backgroundColor: '#C1FF72',
                  color: '#073B4C',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  height: 32,
                  mt: 0.5,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: '#073B4C',
                  fontWeight: 'semibold',
                  lineHeight: 1.4,
                  flex: 1,
                }}>
                {currentQ.question}
              </Typography>
            </Box>
          </Box>

          <FormControl component="fieldset" sx={{ width: '100%' }}>
            <RadioGroup
              value={selectedAnswers[currentQ.id] || ''}
              onChange={(e) =>
                handleAnswerSelect(currentQ.id, parseInt(e.target.value))
              }
              sx={{ gap: 2 }}>
              {currentQ.options.map((option, index) => {
                const letters = ['A', 'B', 'C', 'D'];
                const isSelected = selectedAnswers[currentQ.id] === index;

                return (
                  <Paper
                    key={index}
                    elevation={isSelected ? 3 : 1}
                    sx={{
                      p: 2,
                      border: isSelected
                        ? '2px solid #C1FF72'
                        : '1px solid rgba(7, 59, 76, 0.2)',
                      backgroundColor: isSelected
                        ? 'rgba(193, 255, 114, 0.1)'
                        : 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: '#C1FF72',
                        backgroundColor: isSelected
                          ? 'rgba(193, 255, 114, 0.15)'
                          : 'rgba(193, 255, 114, 0.05)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                    onClick={() => handleAnswerSelect(currentQ.id, index)}>
                    <FormControlLabel
                      value={index}
                      control={
                        <Radio
                          sx={{
                            color: '#073B4C',
                            '&.Mui-checked': {
                              color: '#C1FF72',
                            },
                          }}
                        />
                      }
                      label={
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            width: '100%',
                          }}>
                          <Chip
                            label={letters[index]}
                            size="small"
                            sx={{
                              backgroundColor: isSelected
                                ? '#C1FF72'
                                : '#073B4C',
                              color: isSelected ? '#073B4C' : '#E4DFDA',
                              fontWeight: 'bold',
                              minWidth: 32,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#073B4C',
                              flex: 1,
                              lineHeight: 1.5,
                            }}>
                            {option}
                          </Typography>
                        </Box>
                      }
                      sx={{
                        margin: 0,
                        width: '100%',
                        '& .MuiFormControlLabel-label': {
                          width: '100%',
                        },
                      }}
                    />
                  </Paper>
                );
              })}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      {/* Navegación y estado */}
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
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}>
            <Button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              variant="outlined"
              startIcon={<FaArrowLeft />}
              sx={{
                borderColor:
                  currentQuestion === 0 ? 'rgba(7, 59, 76, 0.3)' : '#073B4C',
                color:
                  currentQuestion === 0 ? 'rgba(7, 59, 76, 0.5)' : '#073B4C',
                fontWeight: 'semibold',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  borderColor:
                    currentQuestion === 0 ? 'rgba(7, 59, 76, 0.3)' : '#C1FF72',
                  backgroundColor:
                    currentQuestion === 0
                      ? 'transparent'
                      : 'rgba(193, 255, 114, 0.1)',
                },
                '&:disabled': {
                  borderColor: 'rgba(7, 59, 76, 0.3)',
                  color: 'rgba(7, 59, 76, 0.5)',
                },
              }}>
              Anterior
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: '#C1FF72' }}>
                {Object.keys(selectedAnswers).length} / {questions.length}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#073B4C', opacity: 0.7 }}>
                preguntas respondidas
              </Typography>
            </Box>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmitExam}
                variant="contained"
                startIcon={<FaFlag />}
                sx={{
                  backgroundColor: '#C1FF72',
                  color: '#073B4C',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(193, 255, 114, 0.3)',
                  '&:hover': {
                    backgroundColor: '#A8E85C',
                    boxShadow: '0 6px 20px rgba(193, 255, 114, 0.4)',
                  },
                }}>
                Finalizar Examen
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                variant="contained"
                sx={{
                  backgroundColor: '#C1FF72',
                  color: '#073B4C',
                  fontWeight: 'semibold',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#A8E85C',
                  },
                }}>
                Siguiente →
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Modal de Certificado NFT */}
      {showCertificate && examResults && (
        <CertificateModal
          open={showCertificate}
          onClose={() => setShowCertificate(false)}
          examTitle={examResults.examTitle}
          score={examResults.score}
          stellarTxHash={examResults.stellarTxHash}
          certificateId={examResults.certificateId}
        />
      )}
    </Box>
  );
};

export default ExamPage;
