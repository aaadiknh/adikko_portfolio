import { useEffect, useState } from "react";
import {
  Music2,
  Code2,
  Gamepad2,
  Headphones,
} from "lucide-react";

export default function PresenceWidget() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const res = await fetch(
          "http://localhost:3001/api/presence"
        );
        const data = await res.json();
        const normalized = (data.activities || [])
          .slice(0, 2)
          .map((a, idx) => {
            if (a.type === "spotify") {
              return {
                key: `spotify-${idx}`,
                title: a.title,
                subtitle: a.artist,
                image: a.image,
                type: "spotify",
                icon: "spotify",
                iconImage: a.iconImage || null,
              };
            }

            if (a.type === "coding") {
              return {
                key: `coding-${idx}`,
                title: a.details || "Coding",
                subtitle: a.state || a.app,
                type: "coding",
                icon: "vscode",
                iconImage: a.iconImage || null,
              };
            }

            return {
              key: `activity-${idx}`,
              title: a.name || "Playing a Game",
              subtitle: a.state || a.type,
              type: a.type || "unknown",
              icon: "gaming",
              iconImage: a.iconImage || null,
            };
          });

        setActivities(normalized);
      } catch (error) {
        console.error("Failed to fetch presence:", error);
      }
    };

    fetchPresence();

    const interval = setInterval(fetchPresence, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!activities.length) return null;

  const getIcon = (iconType, className = "w-5 h-5") => {
    const icons = {
      spotify: <Music2 className={className} />,
      vscode: <Code2 className={className} />,
      gaming: <Gamepad2 className={className} />,
      default: <Headphones className={className} />,
    };

    return icons[iconType] || icons.default;
  };

  const getColors = (type) => {
    const colors = {
      spotify: {
        bg: "from-[#F04470]/15 to-[#D62965]/10",
        border: "border-[#F04470]/30",
        text: "text-[#F04470]",
        badge:
          "bg-[#F04470]/10 border-[#F04470]/30",
        glow:
          "shadow-[0_8px_25px_rgba(240,68,112,0.10)]",
        indicator: "bg-[#F04470]",
      },
      coding: {
        bg: "from-[#D62965]/15 to-[#F04470]/10",
        border: "border-[#D62965]/30",
        text: "text-[#F58AA7]",
        badge:
          "bg-[#D62965]/10 border-[#D62965]/30",
        glow:
          "shadow-[0_8px_25px_rgba(214,41,101,0.10)]",
        indicator: "bg-[#D62965]",
      },
      gaming: {
        bg: "from-[#F04470]/15 to-[#D62965]/10",
        border: "border-[#F04470]/30",
        text: "text-[#F58AA7]",
        badge:
          "bg-[#F04470]/10 border-[#F04470]/30",
        glow:
          "shadow-[0_8px_25px_rgba(240,68,112,0.10)]",
        indicator: "bg-[#F04470]",
      },
      default: {
        bg: "from-[#F58AA7]/10 to-[#F04470]/10",
        border: "border-[#F04470]/20",
        text: "text-[#F58AA7]",
        badge:
          "bg-[#F04470]/10 border-[#F04470]/25",
        glow:
          "shadow-[0_8px_25px_rgba(240,68,112,0.08)]",
        indicator: "bg-[#F58AA7]",
      },
    };
    return colors[type] || colors.default;
  };

  const getActivityLabel = (type) => {
    const labels = {
      spotify: "NOW PLAYING",
      coding: "CODING",
      gaming: "PLAYING",
      default: "ACTIVE",
    };

    return labels[type] || labels.default;
  };

  return (
    <div className="w-full">
      <div className="w-full space-y-2">
        {activities.map((act) => {
          const colors = getColors(act.type);
          return (
            <div
              key={act.key}
              className="group relative"
            >
              <div
                className={`
                  relative
                  overflow-hidden
                  backdrop-blur-md
                  bg-gradient-to-br
                  ${colors.bg}
                  rounded-xl
                  border
                  ${colors.border}
                  ${colors.glow}
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                `}
              >
                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    w-24
                    h-24
                    rounded-full
                    bg-[#F04470]/10
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                />
                <div className="relative z-10 p-3 flex items-center gap-2.5">
                  <div className="relative flex-shrink-0">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-lg
                        overflow-hidden
                        bg-black/30
                        backdrop-blur-sm
                        ring-2
                        ring-white/[0.08]
                        group-hover:ring-[#F04470]/30
                        transition-all
                        duration-300
                      "
                    >
                      {act.image ? (
                        <img
                          src={act.image}
                          alt={act.title}
                          className="w-full h-full object-cover"
                        />
                      ) : act.iconImage ? (
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <img
                            src={act.iconImage}
                            alt={act.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className={colors.text}>
                            {getIcon(
                              act.icon,
                              "w-7 h-7"
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {act.type === "spotify" && (
                      <div
                        className="
                          absolute
                          -bottom-0.5
                          -right-0.5
                          bg-[#F04470]
                          rounded
                          p-0.5
                          shadow-[0_0_10px_rgba(240,68,112,0.45)]
                        "
                      >
                        <div className="flex items-end gap-0.5 h-2">
                          <div className="w-0.5 bg-white rounded-full animate-music-1" />
                          <div className="w-0.5 bg-white rounded-full animate-music-2" />
                          <div className="w-0.5 bg-white rounded-full animate-music-3" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`
                        inline-flex
                        items-center
                        gap-1
                        px-1.5
                        py-0.5
                        rounded
                        ${colors.badge}
                        border
                        backdrop-blur-sm
                        mb-1
                      `}
                    >
                      <div
                        className={`
                          w-1
                          h-1
                          rounded-full
                          ${colors.indicator}
                          animate-pulse
                        `}
                      />
                      <span
                        className={`
                          text-[9px]
                          pt-[0.5px]
                          font-bold
                          ${colors.text}
                          uppercase
                          tracking-wider
                        `}
                      >
                        {getActivityLabel(act.type)}
                      </span>
                    </div>
                    <h3
                      className="
                        text-white
                        font-bold
                        text-sm
                        truncate
                        mb-0.5
                      "
                    >
                      {act.title}
                    </h3>
                    <p
                      className="
                        text-[#9b8790]
                        text-xs
                        truncate
                      "
                    >
                      {act.subtitle}
                    </p>
                  </div>
                  {act.type === "spotify" && (
                    <div>
                      <img
                        src="Spotify.png"
                        className="
                          w-auto
                          h-6
                          opacity-70
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes music-1 {
          0%, 100% {
            height: 30%;
          }
          50% {
            height: 90%;
          }
        }
        @keyframes music-2 {
          0%, 100% {
            height: 60%;
          }
          50% {
            height: 100%;
          }
        }
        @keyframes music-3 {
          0%, 100% {
            height: 40%;
          }
          50% {
            height: 85%;
          }
        }
        .animate-music-1 {
          animation: music-1 0.6s ease-in-out infinite;
        }
        .animate-music-2 {
          animation: music-2 0.6s ease-in-out 0.15s infinite;
        }
        .animate-music-3 {
          animation: music-3 0.6s ease-in-out 0.3s infinite;
        }
      `}</style>
    </div>
  );
}