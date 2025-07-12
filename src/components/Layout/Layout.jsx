import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="flex h-screen bg-dark-cyan">
      {/* Sidebar - 35% */}
      <div className="w-[35%] min-w-[300px]">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      {/* Main Content - 65% */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-dark-gray p-6 border-b border-dark-cyan">
          <h1 className="text-2xl font-bold text-lime-green capitalize">
            {currentPage}
          </h1>
          <p className="text-warm-gray opacity-75 mt-1">
            Bienvenido a tu panel de control
          </p>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-dark-cyan overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
