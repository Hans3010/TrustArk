import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Desarrollo from './pages/Desarrollo';
import Diseno from './pages/Diseno';
import Marketing from './pages/Marketing';
import Finanzas from './pages/Finanzas';
import Profile from './pages/Profile';
import ProfileStats from './pages/ProfileStats';
import ProfileEdit from './pages/ProfileEdit';
// Páginas específicas de exámenes

import MiScore from './pages/MiScore';
import Leaderboard from './pages/Leaderboard';
/*
import Certificados from './pages/Certificados';
import MiNft from './pages/MiNft';*/
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentPage, setCurrentPage } = useNavigation('profile');

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
      case 'profile-overview':
        return <Profile />;
      case 'profile-stats':
        return <ProfileStats />;
      case 'profile-edit':
        return <ProfileEdit />;
      case 'profile-certificates':
        return <Profile />; // Por ahora redirige al perfil principal
      case 'profile-exams':
        return <Profile />; // Por ahora redirige al perfil principal
      case 'profile-achievements':
        return <Profile />; // Por ahora redirige al perfil principal

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
        return <Profile />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
