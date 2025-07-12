const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
        <h2 className="text-2xl font-bold text-lime-green mb-4">
          Analytics Dashboard
        </h2>
        <p className="text-warm-gray">
          Aquí puedes ver todas las métricas y análisis de tu plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-dark-gray">
        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-4">
            Gráfico de Ventas
          </h3>
          <div className="h-64 bg-dark-cyan rounded-lg flex items-center justify-center">
            <p className="text-warm-gray">📈 Gráfico placeholder</p>
          </div>
        </div>

        <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
          <h3 className="text-lime-green font-semibold mb-4">
            Distribución de Usuarios
          </h3>
          <div className="h-64 bg-dark-cyan rounded-lg flex items-center justify-center">
            <p className="text-warm-gray">🥧 Gráfico placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
