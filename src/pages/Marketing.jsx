const Marketing = () => {
  return (
    <div className="space-y-8">
      {/* Header principal */}
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">📈</span>
        </div>
        <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
          Evaluaciones de Marketing
        </h1>
        <p className="text-xl text-[#e4dfda] opacity-90 mb-6">
          Certifica tus habilidades en marketing digital y estrategia
        </p>
        <p className="text-lg text-[#e4dfda] opacity-75 max-w-3xl mx-auto">
          Demuestra tu expertise en marketing digital, análisis de datos,
          estrategias de contenido y gestión de campañas publicitarias.
        </p>
      </div>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">
            Analytics Reales
          </h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Casos de estudio con datos reales de campañas
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">ROI Verificado</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Demuestra tu capacidad para generar resultados
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">Growth Hacking</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Estrategias de crecimiento y optimización
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
            <h4 className="text-[#e4dfda] font-medium mb-2">
              📊 Marketing Digital
            </h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              SEM, PPC, analytics, conversiones
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">
              📲 Redes Sociales
            </h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Community management, content strategy
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">🔍 SEO/SEM</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Optimización orgánica y paga
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">
              📧 Email Marketing
            </h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Automatización, segmentación, nurturing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
