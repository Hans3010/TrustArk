const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-warm-gray">1,234</p>
          <p className="text-sm text-warm-gray opacity-75 mt-2">
            +12% desde el mes pasado
          </p>
        </div>

        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-warm-gray">$45,678</p>
          <p className="text-sm text-warm-gray opacity-75 mt-2">
            +8% desde el mes pasado
          </p>
        </div>

        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-warm-gray">856</p>
          <p className="text-sm text-warm-gray opacity-75 mt-2">
            +23% desde el mes pasado
          </p>
        </div>

        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-2">Growth</h3>
          <p className="text-3xl font-bold text-warm-gray">+15%</p>
          <p className="text-sm text-warm-gray opacity-75 mt-2">
            Crecimiento mensual
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
        <h3 className="text-xl font-semibold text-lime-green mb-4">
          Actividad Reciente
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 p-3 bg-dark-cyan rounded-lg">
              <div className="w-10 h-10 bg-lime-green rounded-full flex items-center justify-center">
                <span className="text-dark-gray font-bold">A</span>
              </div>
              <div className="flex-1">
                <p className="text-warm-gray font-medium">
                  Nueva actividad #{item}
                </p>
                <p className="text-sm text-warm-gray opacity-75">
                  Hace 2 horas
                </p>
              </div>
              <button className="text-lime-green hover:bg-lime-green hover:text-dark-gray px-3 py-1 rounded transition-colors">
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
