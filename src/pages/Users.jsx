const Users = () => {
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@email.com', status: 'Activo' },
    {
      id: 2,
      name: 'María García',
      email: 'maria@email.com',
      status: 'Inactivo',
    },
    {
      id: 3,
      name: 'Carlos López',
      email: 'carlos@email.com',
      status: 'Activo',
    },
    { id: 4, name: 'Ana Martínez', email: 'ana@email.com', status: 'Activo' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-dark-gray p-6 rounded-lg border border-dark-cyan">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-lime-green">
            Gestión de Usuarios
          </h2>
          <button className="bg-lime-green text-dark-gray px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            + Nuevo Usuario
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-cyan">
                <th className="text-left py-3 px-4 text-lime-green font-semibold">
                  ID
                </th>
                <th className="text-left py-3 px-4 text-lime-green font-semibold">
                  Nombre
                </th>
                <th className="text-left py-3 px-4 text-lime-green font-semibold">
                  Email
                </th>
                <th className="text-left py-3 px-4 text-lime-green font-semibold">
                  Estado
                </th>
                <th className="text-left py-3 px-4 text-lime-green font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-dark-cyan hover:bg-dark-cyan transition-colors">
                  <td className="py-3 px-4 text-warm-gray">{user.id}</td>
                  <td className="py-3 px-4 text-warm-gray font-medium">
                    {user.name}
                  </td>
                  <td className="py-3 px-4 text-warm-gray">{user.email}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'Activo'
                          ? 'bg-lime-green text-dark-gray'
                          : 'bg-gray-600 text-warm-gray'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-lime-green hover:underline">
                        Editar
                      </button>
                      <button className="text-red-400 hover:underline">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
