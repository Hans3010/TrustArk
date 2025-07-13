import logo from "../assets/Logo.png";

const Home = () => {
  return (
    <div className="space-y-6 h-full">
      {/* Logotipo y slogan - Componente principal superior */}
      <div className="bg-[#222222] p-8 rounded-lg border border-[#073b4c] text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={logo} alt="TrustArk Logo" className="h-132 w-auto" />
          <p className="text-xl text-[#e4dfda] opacity-90">
            Tu plataforma de confianza para el futuro digital
          </p>
          <p className="text-lg text-[#e4dfda] opacity-75 max-w-2xl">
            Conectamos, protegemos y potenciamos tu experiencia en el mundo
            digital con la máxima seguridad y transparencia.
          </p>
        </div>
      </div>

      {/* Contenedores inferiores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {/* Puntaje actual */}
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#c1ff72] mb-4">
              Tu Puntaje Actual
            </h3>
            <div className="text-5xl font-bold text-[#e4dfda] mb-2">847</div>
            <div className="text-[#e4dfda] opacity-75 mb-4">
              Puntos de Confianza
            </div>
            <div className="text-sm text-[#c1ff72]">+23 puntos esta semana</div>
          </div>
        </div>

        {/* Opción para ir a tabla de posiciones */}
        <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#c1ff72] mb-4">
              Tabla de Posiciones
            </h3>
            <div className="text-[#e4dfda] opacity-75 mb-6">
              Ve tu ranking y compite con otros usuarios
            </div>
            <button className="bg-[#c1ff72] text-[#222222] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-lg">
              Ver Posiciones
            </button>
            <div className="text-sm text-[#e4dfda] opacity-60 mt-3">
              Tu posición actual: #42
            </div>
          </div>
        </div>
      </div>

      {/* Links de redes de TrustArk */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-lg font-bold text-[#c1ff72] mb-4 md:mb-0">
            Síguenos en nuestras redes
          </h3>
          <div className="flex space-x-6">
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e4dfda] hover:text-[#c1ff72] transition-colors"
            >
              <span className="text-xl">🐦</span>
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e4dfda] hover:text-[#c1ff72] transition-colors"
            >
              <span className="text-xl">📱</span>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e4dfda] hover:text-[#c1ff72] transition-colors"
            >
              <span className="text-xl">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e4dfda] hover:text-[#c1ff72] transition-colors"
            >
              <span className="text-xl">🌐</span>
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
