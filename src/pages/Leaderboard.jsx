const Leaderboard = () => {
  const rankings = [
    {
      rank: 1,
      name: 'Alex Martinez',
      score: 4250,
      specialty: 'Full Stack',
      avatar: '🥇',
    },
    {
      rank: 2,
      name: 'Sofia Chen',
      score: 4100,
      specialty: 'UI/UX Design',
      avatar: '🥈',
    },
    {
      rank: 3,
      name: 'Carlos Rodriguez',
      score: 3950,
      specialty: 'DevOps',
      avatar: '🥉',
    },
    {
      rank: 4,
      name: 'Elena Popov',
      score: 3850,
      specialty: 'Data Science',
      avatar: '⭐',
    },
    {
      rank: 5,
      name: 'Ahmed Hassan',
      score: 3720,
      specialty: 'Blockchain',
      avatar: '⭐',
    },
    {
      rank: 6,
      name: 'Maria Silva',
      score: 3680,
      specialty: 'Marketing',
      avatar: '⭐',
    },
    {
      rank: 7,
      name: 'John Smith',
      score: 3590,
      specialty: 'Finance',
      avatar: '⭐',
    },
    // Usuario actual
    {
      rank: 42,
      name: 'Tú',
      score: 3585,
      specialty: 'Frontend',
      avatar: '👤',
      isUser: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">🏆</span>
        </div>
        <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
          Tabla de Posiciones Global
        </h1>
        <p className="text-xl text-[#e4dfda] opacity-90 mb-6">
          Compite con desarrolladores y profesionales de todo el mundo
        </p>
      </div>

      {/* Tu posición actual */}
      <div className="bg-[#c1ff72] p-6 rounded-lg border-2 border-[#c1ff72]">
        <div className="flex items-center justify-between text-[#222222]">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">👤</div>
            <div>
              <h3 className="text-2xl font-bold">Tu Posición Actual</h3>
              <p className="text-lg opacity-75">Ranking Global #42</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">3,585</div>
            <div className="text-lg opacity-75">puntos</div>
          </div>
        </div>
      </div>

      {/* Top 10 */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h2 className="text-2xl font-bold text-[#c1ff72] mb-6">Top Global</h2>

        <div className="space-y-3">
          {rankings.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                user.isUser
                  ? 'bg-[#c1ff72] text-[#222222] border-2 border-[#c1ff72]'
                  : 'bg-[#073b4c] hover:bg-[#0a4a5a]'
              }`}>
              <div className="flex items-center space-x-4">
                <div
                  className={`text-2xl font-bold w-8 text-center ${
                    user.isUser ? 'text-[#222222]' : 'text-[#c1ff72]'
                  }`}>
                  #{user.rank}
                </div>

                <div className="text-3xl">{user.avatar}</div>

                <div>
                  <h3
                    className={`font-semibold ${
                      user.isUser ? 'text-[#222222]' : 'text-[#e4dfda]'
                    }`}>
                    {user.name}
                  </h3>
                  <p
                    className={`text-sm opacity-75 ${
                      user.isUser ? 'text-[#222222]' : 'text-[#e4dfda]'
                    }`}>
                    {user.specialty}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div
                  className={`text-xl font-bold ${
                    user.isUser ? 'text-[#222222]' : 'text-[#c1ff72]'
                  }`}>
                  {user.score.toLocaleString()}
                </div>
                <div
                  className={`text-sm opacity-75 ${
                    user.isUser ? 'text-[#222222]' : 'text-[#e4dfda]'
                  }`}>
                  puntos
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c] text-center">
        <h3 className="text-[#c1ff72] font-semibold mb-3">
          ¿Quieres subir en el ranking?
        </h3>
        <p className="text-[#e4dfda] opacity-75 mb-4">
          Completa más evaluaciones y mejora tu score de confianza
        </p>
        <button className="bg-[#c1ff72] text-[#222222] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
          Ver Exámenes Disponibles
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
