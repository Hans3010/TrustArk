import Layout from './components/Layout/Layout';
import Desarrollo from './pages/Desarrollo';
import Diseno from './pages/Diseno';
import Marketing from './pages/Marketing';
import Finanzas from './pages/Finanzas';
import Profile from './pages/Profile';
import ProfileStats from './pages/ProfileStats';
import ProfileEdit from './pages/ProfileEdit';
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
        return <ExamPage examType="javascript" />;
      case 'python-course':
        return <ExamPage examType="python" />;
      case 'react-course':
        return <ExamPage examType="react" />;
      case 'solidity-course':
        return <ExamPage examType="solidity" />;
      case 'blockchain-course':
        return <ExamPage examType="blockchain" />;
      case 'devops-course':
        return <ExamPage examType="devops" />;

      // Exámenes de diseño
      case 'ui-ux-course':
        return <ExamPage examType="ui-ux" />;
      case 'nft-design':
        return <ExamPage examType="nft-design" />;
      case 'figma-course':
        return <ExamPage examType="figma" />;
      case '3d-design':
        return <ExamPage examType="3d-design" />;
      case 'branding-course':
        return <ExamPage examType="branding" />;

      // Exámenes de marketing
      case 'crypto-marketing':
        return <ExamPage examType="crypto-marketing" />;
      case 'community-course':
        return <ExamPage examType="community" />;
      case 'defi-marketing':
        return <ExamPage examType="defi-marketing" />;
      case 'social-web3':
        return <ExamPage examType="social-web3" />;
      case 'analytics-course':
        return <ExamPage examType="analytics" />;

      // Exámenes de finanzas
      case 'defi-course':
        return <ExamPage examType="defi" />;
      case 'trading-course':
        return <ExamPage examType="trading" />;
      case 'yield-farming':
        return <ExamPage examType="yield-farming" />;
      case 'portfolio-course':
        return <ExamPage examType="portfolio" />;
      case 'tokenomics':
        return <ExamPage examType="tokenomics" />;

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
