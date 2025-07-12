const Desarrollo = () => {
  return (
    <div className="space-y-8">
      {/* Header principal */}
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">💻</span>
        </div>
        <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
          Evaluaciones de Desarrollo
        </h1>
        <p className="text-xl text-[#e4dfda] opacity-90 mb-6">
          Demuestra tus habilidades técnicas y mejora tu score de confianza
        </p>
        <p className="text-lg text-[#e4dfda] opacity-75 max-w-3xl mx-auto">
          Selecciona una especialización del menú lateral para acceder a
          exámenes diseñados por expertos que evaluarán tus conocimientos y
          habilidades prácticas en desarrollo de software.
        </p>
      </div>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">
            Evaluaciones Precisas
          </h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Exámenes diseñados por expertos de la industria
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">📈</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">Mejora tu Score</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Cada examen aprobado aumenta tu puntaje de confianza
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🏆</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">
            Certificación NFT
          </h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Obtén certificados verificables en blockchain
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
        <h3 className="text-[#c1ff72] font-semibold mb-3">
          ¿Listo para comenzar?
        </h3>
        <p className="text-[#e4dfda] opacity-75 mb-4">
          Elige una especialización del menú lateral para ver los exámenes
          disponibles
        </p>
        <div className="flex items-center justify-center space-x-2 text-[#c1ff72]">
          <span>👈</span>
          <span className="font-medium">Selecciona una opción del menú</span>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
