const Finanzas = () => {
  return (
    <div className="space-y-8">
      {/* Header principal */}
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">💰</span>
        </div>
        <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
          Evaluaciones Financieras
        </h1>
        <p className="text-xl text-[#e4dfda] opacity-90 mb-6">
          Certifica tu expertise en finanzas y análisis económico
        </p>
        <p className="text-lg text-[#e4dfda] opacity-75 max-w-3xl mx-auto">
          Demuestra tu conocimiento en análisis financiero, inversiones,
          contabilidad y las nuevas tecnologías financieras del blockchain.
        </p>
      </div>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">📈</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">Análisis Real</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Estados financieros y casos reales del mercado
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">₿</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">DeFi & Crypto</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Finanzas descentralizadas y activos digitales
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🏦</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">FinTech</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Tecnologías financieras emergentes
          </p>
        </div>
      </div>

      {/* Especialidades disponibles */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h3 className="text-[#c1ff72] font-semibold mb-4 text-xl">
          Áreas de Evaluación
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">📋 Contabilidad</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              NIIF, estados financieros, auditoría
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">📈 Inversiones</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Portafolios, valoración, riesgo
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">
              💹 Análisis Financiero
            </h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Ratios, proyecciones, modelado
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">₿ Criptomonedas</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Trading, DeFi, blockchain economics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finanzas;
