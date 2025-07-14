import Layout from './components/Layout/Layout';
import Desarrollo from './pages/Desarrollo';
import Diseno from './pages/Diseno';
import Marketing from './pages/Marketing';
import Finanzas from './pages/Finanzas';
import Profile from './pages/Profile';
import ProfileStats from './pages/ProfileStats';
import ProfileEdit from './pages/ProfileEdit';
import Home from './pages/Home'
// Páginas específicas de exámenes
import ExamPage from './pages/ExamPage';
import MiScore from './pages/MiScore';
import Leaderboard from './pages/Leaderboard';
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentPage, setCurrentPage } = useNavigation('home');

  const renderPage = () => {
    switch (currentPage) {
      // Páginas principales
      case 'profile':
        return <Profile />;
      case 'desarrollo':
        return <Desarrollo />;
      case 'diseno':
        return <Diseno />;
      case 'marketing':
        return <Marketing />;
      case 'finanzas':
        return <Finanzas />;

      // Perfil del usuario
      case 'profile-stats':
        return <ProfileStats />;
      case 'profile-edit':
        return <ProfileEdit />;

      // Exámenes específicos de desarrollo
      case 'javascript-course':
        return <ExamPage examType="javascript" setCurrentPage={setCurrentPage} />;
      case 'python-course':
        return <ExamPage examType="python" setCurrentPage={setCurrentPage} />;
      case 'react-course':
        return <ExamPage examType="react" setCurrentPage={setCurrentPage} />;
      case 'solidity-course':
        return <ExamPage examType="solidity" setCurrentPage={setCurrentPage} />;
      case 'blockchain-course':
        return <ExamPage examType="blockchain" setCurrentPage={setCurrentPage} />;
      case 'devops-course':
        return <ExamPage examType="devops" setCurrentPage={setCurrentPage} />;

      // Exámenes de diseño
      case 'ui-ux-course':
        return <ExamPage examType="ui-ux" setCurrentPage={setCurrentPage} />;
      case 'nft-design':
        return <ExamPage examType="nft-design" setCurrentPage={setCurrentPage} />;
      case 'figma-course':
        return <ExamPage examType="figma" setCurrentPage={setCurrentPage} />;
      case '3d-design':
        return <ExamPage examType="3d-design" setCurrentPage={setCurrentPage} />;
      case 'branding-course':
        return <ExamPage examType="branding" setCurrentPage={setCurrentPage} />;

      // Exámenes de marketing
      case 'crypto-marketing':
        return <ExamPage examType="crypto-marketing" setCurrentPage={setCurrentPage} />;
      case 'community-course':
        return <ExamPage examType="community" setCurrentPage={setCurrentPage} />;
      case 'defi-marketing':
        return <ExamPage examType="defi-marketing" setCurrentPage={setCurrentPage} />;
      case 'social-web3':
        return <ExamPage examType="social-web3" setCurrentPage={setCurrentPage} />;
      case 'analytics-course':
        return <ExamPage examType="analytics" setCurrentPage={setCurrentPage} />;

      // Exámenes de finanzas
      case 'defi-course':
        return <ExamPage examType="defi" setCurrentPage={setCurrentPage} />;
      case 'trading-course':
        return <ExamPage examType="trading" setCurrentPage={setCurrentPage} />;
      case 'yield-farming':
        return <ExamPage examType="yield-farming" setCurrentPage={setCurrentPage} />;
      case 'portfolio-course':
        return <ExamPage examType="portfolio" setCurrentPage={setCurrentPage} />;
      case 'tokenomics':
        return <ExamPage examType="tokenomics" setCurrentPage={setCurrentPage} />;

      // Páginas del perfil
      case 'mi-score':
        return <MiScore />;
      case 'leaderboard':
        return <Leaderboard />;

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
