const MiScore = () => {
  const skills = [
    { name: 'Desarrollo Frontend', score: 845, max: 1000, color: '#4CAF50' },
    { name: 'Diseño UI/UX', score: 720, max: 1000, color: '#2196F3' },
    { name: 'Marketing Digital', score: 680, max: 1000, color: '#FF9800' },
    { name: 'Análisis Financiero', score: 590, max: 1000, color: '#9C27B0' },
    { name: 'Gestión de Proyectos', score: 750, max: 1000, color: '#607D8B' },
  ];

  const totalScore = skills.reduce((acc, skill) => acc + skill.score, 0);
  const maxPossible = skills.length * 1000;
  const percentage = Math.round((totalScore / maxPossible) * 100);

  return (
    <div className="space-y-8">
      {/* Header con score total */}
      <div className="text-center">
        <div className="bg-[#222222] p-8 rounded-lg border border-[#073b4c]">
          <div className="mb-6">
            <span className="text-6xl">⭐</span>
          </div>
          <h1 className="text-4xl font-bold text-[#c1ff72] mb-4">
            Mi Score de Confianza
          </h1>

          <div className="text-7xl font-bold text-[#e4dfda] mb-4">
            {totalScore}
          </div>
          <div className="text-xl text-[#e4dfda] opacity-75 mb-4">
            de {maxPossible} puntos posibles ({percentage}%)
          </div>

          <div className="w-full bg-[#073b4c] rounded-full h-4 mb-6">
            <div
              className="bg-[#c1ff72] h-4 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}></div>
          </div>

          <p className="text-lg text-[#e4dfda] opacity-90">
            Tu reputación verificada en blockchain
          </p>
        </div>
      </div>

      {/* Desglose por habilidades */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h2 className="text-2xl font-bold text-[#c1ff72] mb-6">
          Desglose por Habilidades
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-[#073b4c] rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-[#e4dfda] font-semibold">{skill.name}</h3>
                <span className="text-[#c1ff72] font-bold">
                  {skill.score}/{skill.max}
                </span>
              </div>

              <div className="w-full bg-[#222222] rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(skill.score / skill.max) * 100}%`,
                    backgroundColor: skill.color,
                  }}></div>
              </div>

              <div className="mt-2 text-sm text-[#e4dfda] opacity-75">
                {Math.round((skill.score / skill.max) * 100)}% completado
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historial reciente */}
      <div className="bg-[#222222] p-6 rounded-lg border border-[#073b4c]">
        <h2 className="text-2xl font-bold text-[#c1ff72] mb-6">
          Actividad Reciente
        </h2>

        <div className="space-y-4">
          {[
            {
              action: 'Examen Frontend React',
              points: '+45',
              date: 'Hace 2 días',
            },
            {
              action: 'Certificado AWS Cloud',
              points: '+120',
              date: 'Hace 1 semana',
            },
            {
              action: 'Evaluación UX Design',
              points: '+35',
              date: 'Hace 2 semanas',
            },
            {
              action: 'Proyecto Marketing Digital',
              points: '+80',
              date: 'Hace 3 semanas',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-[#073b4c] rounded-lg">
              <div>
                <p className="text-[#e4dfda] font-medium">{activity.action}</p>
                <p className="text-sm text-[#e4dfda] opacity-75">
                  {activity.date}
                </p>
              </div>
              <span className="text-[#c1ff72] font-bold text-lg">
                {activity.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiScore;
