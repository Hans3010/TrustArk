import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="flex h-screen bg-[#073b4c]">
      {/* Sidebar - Discord Style */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#222222] p-6 border-b border-[#073b4c]">
          <h1 className="text-2xl font-bold text-[#c1ff72] capitalize">
            {currentPage}
          </h1>
          <p className="text-[#e4dfda] opacity-75 mt-1">
            Bienvenido a tu panel de control
          </p>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-[#073b4c] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
