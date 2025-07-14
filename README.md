# 🚀 TrustArk - Plataforma de Certificación Web3

TrustArk es una plataforma revolucionaria de certificación y evaluación de habilidades técnicas que utiliza tecnología blockchain (Stellar) para crear certificados NFT verificables. Los usuarios pueden demostrar sus competencias en desarrollo, diseño, marketing y finanzas a través de exámenes especializados.

## Características Principales

- **Evaluaciones Especializadas**: Exámenes en JavaScript, React, Python, UI/UX, Marketing Digital, Finanzas DeFi
- **Certificados NFT**: Certificaciones verificables en blockchain Stellar
- **Sistema de Scoring**: Puntuación de confianza basada en rendimiento
- **Interfaz Moderna**: Diseño tipo Discord con Material UI
- **Verificación Blockchain**: Transacciones verificables en Stellar Network

## Tecnologías Utilizadas

### Frontend

- **React 18** - Framework principal
- **Material UI (MUI)** - Componentes y diseño
- **React Icons** - Iconografía moderna
- **Tailwind CSS** - Estilos utilitarios
- **Vite** - Build tool y dev server

### Backend & Blockchain

- **API REST** - Gestión de datos de usuarios y exámenes
- **Stellar Network** - Blockchain para certificados NFT
- **JSON Web APIs** - Comunicación con servicios externos

## 📁 Estructura del Proyecto

```

TrustArk/
├── src/
│ ├── components/
│ │ ├── Header/
│ │ │ └── Header.jsx # Cabecera de la aplicación
│ │ ├── Layout/
│ │ │ └── Layout.jsx # Layout principal
│ │ └── Sidebar/
│ │ └── Sidebar.jsx # Navegación lateral tipo Discord
│ ├── pages/
│ │ ├── Profile.jsx # Perfil de usuario con API integration
│ │ ├── ExamPage.jsx # Sistema de exámenes interactivos
│ │ ├── Desarrollo.jsx # Área de desarrollo/programación
│ │ ├── Diseno.jsx # Área de diseño y UX/UI
│ │ ├── Marketing.jsx # Área de marketing digital
│ │ ├── Finanzas.jsx # Área de finanzas y DeFi
│ │ ├── MiScore.jsx # Dashboard de puntuación personal
│ │ ├── Leaderboard.jsx # Tabla de posiciones global
│ │ ├── Home.jsx # Panel principal
│ │ ├── ProfileEdit.jsx # Edición de perfil
│ │ └── ProfileStats.jsx # Estadísticas detalladas
│ ├── hooks/
│ │ └── useNavigation.js # Hook de navegación personalizado
│ ├── assets/ # Imágenes y recursos estáticos
│ ├── App.jsx # Componente raíz
│ └── main.jsx # Punto de entrada
├── public/ # Archivos públicos
├── package.json # Dependencias del proyecto
└── README.md # Documentación

```

## Funcionalidades por Módulo

### Dashboard Principal

- Overview de estadísticas personales
- Acceso rápido a áreas de especialización
- Últimos certificados obtenidos

### Área de Desarrollo

**Especializaciones disponibles:**

- JavaScript Completo (Principiante)
- Python & Web3 (Intermedio)
- React + DApps (Avanzado)
- Solidity Mastery (Avanzado)
- Blockchain Dev (Intermedio)
- DevOps & Cloud (Avanzado)

### Área de Diseño

**Especializaciones disponibles:**

- UI/UX para Web3
- Diseño de NFTs
- Figma Avanzado
- Diseño 3D
- Branding Digital

### Área de Marketing

**Especializaciones disponibles:**

- Marketing Crypto
- Community Building
- DeFi Marketing
- Social Media Web3
- Analytics & Data

### Área de Finanzas

**Especializaciones disponibles:**

- DeFi Completo
- Trading Cripto
- Yield Farming
- Portfolio Web3
- Tokenomics

## Sistema de Certificación NFT

### Tipos de Rareza

- **Diamond** (90-100%): Certificados de excelencia
- **Platinum** (80-89%): Certificados avanzados
- **Gold** (70-79%): Certificados estándar
- **Silver** (60-69%): Certificados básicos

### Información del Certificado

- Token ID único
- Hash de verificación
- Transacción Stellar
- Habilidades certificadas
- Fecha de emisión
- Score del examen

## 🔧 Scripts Disponibles

````bash
# Desarrollo
npm run dev

# Build para producción
npm run build

## 🎨 Paleta de Colores

```css
/* Colores principales */
--primary-blue: #073B4C      /* Azul oscuro principal */
--primary-green: #C1FF72     /* Verde lima (acentos) */
--background: #E4DFDA        /* Gris cálido de fondo */
--dark-bg: #001826          /* Fondo oscuro del sidebar */
--secondary-dark: #222222    /* Gris oscuro secundario */

/* Gradientes */
--gradient-header: linear-gradient(135deg, #073B4C 0%, #0A4F63 100%)
--gradient-score: linear-gradient(135deg, #C1FF72 0%, #A8E85C 100%)
````

## 📱 Componentes Principales

### `<ExamPage />`

Sistema completo de exámenes con:

- Pantalla de inicio con información del examen
- Interface de preguntas con timer
- Sistema de navegación entre preguntas
- Pantalla de resultados con certificado NFT

### `<Profile />`

Perfil de usuario integrado con API:

- Información personal editable
- Historial de exámenes completados
- Galería de certificados NFT
- Estadísticas de rendimiento

### `<Sidebar />`

Navegación estilo Discord:

- Íconos de especialización
- Lista de cursos disponibles
- Información de estudiantes por curso
- Avatar de usuario con score

## Seguridad y Verificación

- **Blockchain Verification**: Cada certificado se registra en Stellar Network
- **Hash Verification**: Cada examen genera un hash único verificable
- **Immutable Records**: Los certificados no pueden ser modificados
- **Public Verification**: Cualquiera puede verificar la autenticidad

## Contacto

**TrustArk Team**

- André: +591 78821439
- Hans: +591 78503310
- Kenji: +591 78447843
- Diego: +591 63525425
