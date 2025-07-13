import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="flex h-screen bg-[#E4DFDA]">
      {/* Sidebar - Discord Style */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header mejorado con Material UI */}
        <Header currentPage={currentPage} />

        {/* Page Content */}
        <main className="flex-1 bg-[#E4DFDA] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
