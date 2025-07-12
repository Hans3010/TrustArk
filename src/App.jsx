import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Desarrollo from './pages/Desarrollo';
import Diseno from './pages/Diseno';
import Marketing from './pages/Marketing';
import Finanzas from './pages/Finanzas';
import Profile from './pages/Profile';
// Páginas específicas de exámenes

import MiScore from './pages/MiScore';
import Leaderboard from './pages/Leaderboard';
/*
import Certificados from './pages/Certificados';
import MiNft from './pages/MiNft';*/
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentPage, setCurrentPage } = useNavigation('home');

  const renderPage = () => {
    switch (currentPage) {
      // Páginas principales
      case 'home':
        return <Home />;
      case 'desarrollo':
        return <Desarrollo />;
      case 'diseno':
        return <Diseno />;
      case 'marketing':
        return <Marketing />;
      case 'finanzas':
        return <Finanzas />;

      // Perfil del usuario
      case 'profile':
        return <Profile />;

      // Páginas del home
      case 'mi-score':
        return <MiScore />;
      case 'leaderboard':
        return <Leaderboard />;
      /* case 'certificados':
        return <Certificados />;
      case 'mi-nft':
        return <MiNft />;*/

      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
