const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
        <h2 className="text-2xl font-bold text-lime-green mb-6">
          Configuración
        </h2>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="border-b border-dark-cyan pb-6">
            <h3 className="text-lg font-semibold text-lime-green mb-4">
              Perfil
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-warm-gray font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-dark-cyan border border-dark-cyan rounded-lg text-warm-gray focus:outline-none focus:border-lime-green"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-warm-gray font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-dark-cyan border border-dark-cyan rounded-lg text-warm-gray focus:outline-none focus:border-lime-green"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="border-b border-dark-cyan pb-6">
            <h3 className="text-lg font-semibold text-lime-green mb-4">
              Notificaciones
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-warm-gray">Notificaciones por email</span>
                <button className="bg-lime-green text-dark-gray px-4 py-2 rounded-lg font-semibold">
                  Activado
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-warm-gray">Notificaciones push</span>
                <button className="bg-gray-600 text-warm-gray px-4 py-2 rounded-lg font-semibold">
                  Desactivado
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-lg font-semibold text-lime-green mb-4">
              Seguridad
            </h3>
            <div className="space-y-4">
              <button className="bg-lime-green text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Cambiar Contraseña
              </button>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Activar 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
