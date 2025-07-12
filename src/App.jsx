import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import useNavigation from './hooks/useNavigation';

function App() {
  const { currentPage, setCurrentPage } = useNavigation('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'users':
        return <Users />;
      case 'settings':
        return <Settings />;
      case 'messages':
        return <Messages />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
