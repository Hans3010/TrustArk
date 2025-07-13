import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="flex h-screen bg-[#001826]">
      <div className="w-5"></div>
      {/* Sidebar - Discord Style */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="w-30"></div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Page Content */}
        <main className="flex-1 p-6 bg-[#001826] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
