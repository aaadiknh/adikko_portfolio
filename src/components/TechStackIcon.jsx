import React from "react";

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div
      className="
        group relative
        p-6 rounded-2xl
        bg-white/[0.055]
        border border-[#F04470]/15
        hover:border-[#F04470]/45
        hover:bg-[#F04470]/[0.05]
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center
        gap-3
        hover:scale-105
        cursor-pointer
        shadow-[0_10px_30px_rgba(240,68,112,0.06)]
        hover:shadow-[0_12px_35px_rgba(240,68,112,0.16)]
        overflow-hidden
      "
    >
      {/* Subtle Hover Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#F04470]/[0.08]
          via-transparent
          to-[#D62965]/[0.08]
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* Icon Glow */}
        <div
          className="
            absolute -inset-3
            bg-gradient-to-r
            from-[#F04470]
            to-[#D62965]
            rounded-full
            opacity-0
            group-hover:opacity-25
            blur-xl
            transition-all duration-500
          "
        />

        {/* Icon Background */}
        <div
          className="
            absolute -inset-1
            bg-gradient-to-r
            from-[#F04470]
            to-[#D62965]
            rounded-full
            opacity-0
            group-hover:opacity-40
            blur
            transition-all duration-300
          "
        />

        <div
          className="
            relative
            p-2
            rounded-xl
            bg-[#090609]/70
            border border-[#F04470]/10
            group-hover:border-[#F04470]/30
            transition-all duration-300
          "
        >
          <img
            src={TechStackIcon}
            alt={`${Language} icon`}
            className="
              relative
              h-16 w-16
              md:h-20 md:w-20
              object-contain
              transform
              transition-all duration-300
              group-hover:scale-110
              group-hover:drop-shadow-[0_0_10px_rgba(240,68,112,0.45)]
            "
          />
        </div>
      </div>

      {/* Language Name */}
      <span
        className="
          relative z-10
          text-[#b9a5ad]
          font-semibold
          text-sm md:text-base
          tracking-wide
          group-hover:text-[#F58AA7]
          transition-colors duration-300
        "
      >
        {Language}
      </span>

      {/* Bottom Accent */}
      <div
        className="
          absolute bottom-0 left-1/2
          -translate-x-1/2
          w-0 h-[2px]
          rounded-full
          bg-gradient-to-r
          from-[#F04470]
          to-[#D62965]
          group-hover:w-1/2
          transition-all duration-500
          shadow-[0_0_10px_rgba(240,68,112,0.7)]
        "
      />
    </div>
  );
};

export default TechStackIcon;