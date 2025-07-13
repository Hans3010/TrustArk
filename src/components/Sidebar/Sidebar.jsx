import { useState } from "react";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [selectedServer, setSelectedServer] = useState("home");

  const servers = [
    { id: "home", icon: "🏠", name: "Home", color: "#c1ff72" },
    { id: "desarrollo", icon: "💻", name: "Desarrollo", color: "#c1ff72" },
    { id: "diseno", icon: "🎨", name: "Diseño", color: "#c1ff72" },
    { id: "marketing", icon: "📈", name: "Marketing", color: "#c1ff72" },
    { id: "finanzas", icon: "💰", name: "Finanzas", color: "#c1ff72" },
  ];

  const getServerChannels = (serverId) => {
    const channels = {
      home: [
        { id: "mi-score", name: "mi-score", icon: "⭐" },
        { id: "leaderboard", name: "tabla-posiciones", icon: "🏆" },
        { id: "certificados", name: "mis-certificados", icon: "📜" },
        { id: "nft", name: "mi-nft", icon: "🎖️" },
      ],
      desarrollo: [
        { id: "frontend", name: "frontend", icon: "🌐" },
        { id: "backend", name: "backend", icon: "⚙️" },
        { id: "fullstack", name: "fullstack", icon: "🔗" },
        { id: "mobile", name: "mobile", icon: "📱" },
        { id: "devops", name: "devops", icon: "🚀" },
        { id: "blockchain", name: "blockchain", icon: "⛓️" },
      ],
      diseno: [
        { id: "ui-ux", name: "ui-ux", icon: "🎭" },
        { id: "grafico", name: "diseño-gráfico", icon: "🖼️" },
        { id: "web", name: "diseño-web", icon: "🎨" },
        { id: "producto", name: "diseño-producto", icon: "📐" },
        { id: "branding", name: "branding", icon: "🏷️" },
      ],
      marketing: [
        { id: "digital", name: "marketing-digital", icon: "📊" },
        { id: "social-media", name: "redes-sociales", icon: "📲" },
        { id: "seo", name: "seo-sem", icon: "🔍" },
        { id: "contenido", name: "marketing-contenido", icon: "✍️" },
        { id: "email", name: "email-marketing", icon: "📧" },
      ],
      finanzas: [
        { id: "contabilidad", name: "contabilidad", icon: "📋" },
        { id: "inversion", name: "inversiones", icon: "📈" },
        { id: "analisis", name: "análisis-financiero", icon: "💹" },
        { id: "criptomonedas", name: "criptomonedas", icon: "₿" },
        { id: "fintech", name: "fintech", icon: "🏦" },
      ],
    };
    return channels[serverId] || [];
  };

  return (
    <div className="flex h-screen">
      {/* Main Sidebar - Server Icons */}
      <div className="w-[72px] bg-[#073b4c] flex flex-col items-center py-3 space-y-2">
        {servers.map((server) => (
          <div key={server.id} className="relative group">
            <button
              onClick={() => {
                setSelectedServer(server.id);
                setCurrentPage(server.id);
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200 relative ${
                selectedServer === server.id
                  ? "rounded-[16px] shadow-lg"
                  : "hover:rounded-[16px] bg-[#222222] hover:bg-[#073b4c]"
              }`}
              style={{
                backgroundColor:
                  selectedServer === server.id ? server.color : undefined,
                color: selectedServer === server.id ? "#073b4c" : "#e4dfda",
              }}
            >
              {server.icon}
            </button>

            {/* Active indicator */}
            {selectedServer === server.id && (
              <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#c1ff72] rounded-r-full"></div>
            )}

            {/* Tooltip */}
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-[#222222] text-[#e4dfda] px-3 py-2 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap border border-[#073b4c]">
              {server.name}
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="w-8 h-[2px] bg-[#222222] rounded-full my-2"></div>

        {/* Add Server Button */}
        <button className="w-12 h-12 rounded-full bg-[#222222] hover:bg-[#c1ff72] hover:rounded-[16px] flex items-center justify-center text-[#c1ff72] hover:text-[#073b4c] transition-all duration-200 text-2xl font-bold">
          +
        </button>
      </div>

      {/* Secondary Sidebar - Channels */}
      <div className="w-[240px] bg-[#073b4c] flex flex-col">
        {/* Server Header */}
        <div className="h-12 px-4 border-b border-[#222222] flex items-center">
          <h2 className="text-[#e4dfda] font-semibold text-base truncate">
            {servers.find((s) => s.id === selectedServer)?.name || "TrustArk"}
          </h2>
        </div>

        {/* Channels List */}
        <div className="flex-1 p-2 overflow-y-auto">
          <div className="mb-4">
            <div className="px-2 mb-1">
              <h3 className="text-[#e4dfda] opacity-75 text-xs font-semibold uppercase tracking-wide">
                {selectedServer === "home"
                  ? "Panel Principal"
                  : "Áreas de Evaluación"}
              </h3>
            </div>
            {getServerChannels(selectedServer).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setCurrentPage(channel.id)}
                className={`w-full flex items-center px-2 py-1 mx-1 rounded text-left hover:bg-[#222222] group ${
                  currentPage === channel.id
                    ? "bg-[#222222] text-[#c1ff72]"
                    : "text-[#e4dfda] opacity-75"
                }`}
              >
                <span className="mr-2 text-[#e4dfda] opacity-75">
                  {channel.icon}
                </span>
                <span className="text-sm font-medium">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* User Area */}
        <div className="h-[52px] bg-[#222222] px-2 flex items-center">
          <button
            onClick={() => setCurrentPage("profile")}
            className="flex items-center flex-1 min-w-0 hover:bg-[#073b4c] rounded px-1 py-1 transition-colors duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center mr-2">
              <span className="text-[#073b4c] text-sm font-bold">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#e4dfda] text-sm font-medium truncate">
                Usuario
              </div>
              <div className="text-[#e4dfda] opacity-75 text-xs truncate">
                En línea
              </div>
            </div>
          </button>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 rounded hover:bg-[#073b4c] flex items-center justify-center text-[#e4dfda] opacity-75 hover:text-[#c1ff72]">
              ⚙️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
