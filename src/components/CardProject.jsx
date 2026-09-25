import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { toSlug } from "../utils/slug";

const CardProject = ({
  Img,
  Title,
  Description,
  Link: ProjectLink,
  id,
}) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          bg-gradient-to-br
          from-white/[0.10]
          via-white/[0.075]
          to-white/[0.045]
          backdrop-blur-2xl
          border
          border-white/[0.15]
          shadow-[0_12px_40px_rgba(0,0,0,0.12)]
          transition-all
          duration-500
          group-hover:border-white/[0.20]
          group-hover:bg-white/[0.11]
          group-hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)]
          group-hover:-translate-y-1
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.07]
            via-transparent
            to-white/[0.025]
            opacity-70
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          "
        />
        <div
          className="
            absolute
            -top-20
            -right-20
            w-40
            h-40
            rounded-full
            bg-white/[0.035]
            blur-3xl
            opacity-70
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
          "
        />
        <div
          className="
            absolute
            -bottom-24
            -left-20
            w-44
            h-44
            rounded-full
            bg-white/[0.025]
            blur-3xl
            opacity-60
            group-hover:opacity-90
            transition-opacity
            duration-500
            pointer-events-none
          "
        />
        <div className="relative p-5 z-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/[0.12]
              bg-white/[0.04]
              shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={Img}
              alt={Title}
              className="
                w-full
                h-full
                object-cover
                aspect-[16/8]
                transform
                group-hover:scale-105
                transition-transform
                duration-700
              "
            />
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/[0.18]
                via-transparent
                to-white/[0.04]
                opacity-70
                group-hover:opacity-50
                transition-opacity
                duration-500
                pointer-events-none
              "
            />
          </div>
          <div className="mt-5 space-y-3">
            <h3
              className="
                text-xl
                font-semibold
                text-white
                transition-colors
                duration-300
              "
            >
              {Title}
            </h3>
            <p
              className="
                text-[#f3e7eb]/75
                text-sm
                leading-relaxed
                line-clamp-2
              "
            >
              {Description}
            </p>
            <div className="pt-4 flex items-center justify-between gap-3">
              {ProjectLink ? (
                <a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="
                    inline-flex
                    items-center
                    space-x-2
                    text-[#f58aa7]
                    hover:text-[#F58AA7]
                    transition-colors
                    duration-200
                    group/demo
                  "
                >
                  <span className="text-sm font-medium">
                    Live Demo
                  </span>
                  <ExternalLink
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-200
                      group-hover/demo:translate-x-0.5
                      group-hover/demo:-translate-y-0.5
                    "
                  />
                </a>
              ) : (
                <span className="text-[#d8c2ca]/50 text-sm">
                  Demo Not Available
                </span>
              )}
              {id ? (
                <Link
                  to={`/project/${toSlug(Title)}`}
                  onClick={handleDetails}
                  className="
                    inline-flex
                    items-center
                    space-x-2
                    px-4
                    py-2
                    rounded-xl
                    bg-white/[0.08]
                    hover:bg-white/[0.13]
                    border
                    border-white/[0.14]
                    hover:border-white/[0.22]
                    text-[#fff1f5]
                    hover:text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                    shadow-[0_4px_15px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/[0.20]
                  "
                >
                  <span className="text-sm font-medium">
                    Details
                  </span>
                  <ArrowRight
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              ) : (
                <span className="text-[#d8c2ca]/50 text-sm">
                  Details Not Available
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          className="
            absolute
            inset-0
            border
            border-white/[0.04]
            rounded-2xl
            transition-colors
            duration-500
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};

export default CardProject;