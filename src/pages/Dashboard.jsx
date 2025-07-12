const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
          <h3 className="text-[#c1ff72] font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-[#e4dfda]">1,234</p>
          <p className="text-sm text-[#e4dfda] opacity-75 mt-2">
            +12% desde el mes pasado
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
          <h3 className="text-[#c1ff72] font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-[#e4dfda]">$45,678</p>
          <p className="text-sm text-[#e4dfda] opacity-75 mt-2">
            +8% desde el mes pasado
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
          <h3 className="text-[#c1ff72] font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-[#e4dfda]">856</p>
          <p className="text-sm text-[#e4dfda] opacity-75 mt-2">
            +23% desde el mes pasado
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
          <h3 className="text-[#c1ff72] font-semibold mb-2">Growth</h3>
          <p className="text-3xl font-bold text-[#e4dfda]">+15%</p>
          <p className="text-sm text-[#e4dfda] opacity-75 mt-2">
            Crecimiento mensual
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h3 className="text-xl font-semibold text-[#c1ff72] mb-4">
          Actividad Reciente
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 p-3 bg-[#073b4c] rounded-lg">
              <div className="w-10 h-10 bg-[#c1ff72] rounded-full flex items-center justify-center">
                <span className="text-[#222222] font-bold">A</span>
              </div>
              <div className="flex-1">
                <p className="text-[#e4dfda] font-medium">
                  Nueva actividad #{item}
                </p>
                <p className="text-sm text-[#e4dfda] opacity-75">
                  Hace 2 horas
                </p>
              </div>
              <button className="text-[#c1ff72] hover:bg-[#c1ff72] hover:text-[#222222] px-3 py-1 rounded transition-colors">
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
