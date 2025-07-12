const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: 'Juan Pérez',
      subject: 'Consulta sobre el proyecto',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: 'María García',
      subject: 'Reunión programada',
      time: '9:15 AM',
      unread: false,
    },
    {
      id: 3,
      sender: 'Carlos López',
      subject: 'Actualización del sistema',
      time: 'Ayer',
      unread: true,
    },
    {
      id: 4,
      sender: 'Ana Martínez',
      subject: 'Reporte mensual',
      time: 'Ayer',
      unread: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-lime-green">Mensajes</h2>
          <button className="bg-lime-green text-dark-gray px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            + Nuevo Mensaje
          </button>
        </div>

        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg border cursor-pointer transition-colors hover:bg-dark-cyan ${
                message.unread
                  ? 'border-lime-green bg-dark-cyan bg-opacity-50'
                  : 'border-dark-cyan'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-lime-green rounded-full flex items-center justify-center">
                    <span className="text-dark-gray font-bold">
                      {message.sender.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-warm-gray font-medium">
                        {message.sender}
                      </p>
                      {message.unread && (
                        <span className="w-2 h-2 bg-lime-green rounded-full"></span>
                      )}
                    </div>
                    <p className="text-warm-gray opacity-75">
                      {message.subject}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-warm-gray opacity-75">
                    {message.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
