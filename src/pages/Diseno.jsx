const Diseno = () => {
  return (
    <div className="space-y-8">
      {/* Header principal */}
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">🎨</span>
        </div>
        <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
          Evaluaciones de Diseño
        </h1>
        <p className="text-xl text-[#e4dfda] opacity-90 mb-6">
          Demuestra tu creatividad y habilidades visuales
        </p>
        <p className="text-lg text-[#e4dfda] opacity-75 max-w-3xl mx-auto">
          Explora diferentes especialidades del diseño y demuestra tus
          habilidades en composición, teoría del color, UX/UI y herramientas de
          diseño.
        </p>
      </div>

      {/* Cards informativas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🎭</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">
            Proyectos Reales
          </h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Evaluaciones basadas en casos de estudio reales
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">🖼️</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">Portfolio NFT</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Crea tu portfolio verificado en blockchain
          </p>
        </div>

        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
          <div className="text-3xl mb-3">⭐</div>
          <h3 className="text-[#c1ff72] font-semibold mb-2">Score Creativo</h3>
          <p className="text-[#e4dfda] opacity-75 text-sm">
            Construye tu reputación como diseñador profesional
          </p>
        </div>
      </div>

      {/* Especialidades disponibles */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h3 className="text-[#c1ff72] font-semibold mb-4 text-xl">
          Especialidades Disponibles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">🎭 UI/UX Design</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Experiencia de usuario, wireframes, prototipos
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">
              🖼️ Diseño Gráfico
            </h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Identidad visual, composición, tipografía
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">🎨 Diseño Web</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Interfaces web, responsive design, CSS
            </p>
          </div>
          <div className="p-4 bg-[#073b4c] rounded-lg">
            <h4 className="text-[#e4dfda] font-medium mb-2">🏷️ Branding</h4>
            <p className="text-sm text-[#e4dfda] opacity-75">
              Identidad de marca, logos, estrategia visual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseno;
