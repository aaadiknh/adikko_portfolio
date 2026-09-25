import React, { useState } from "react";
import { Eye, ArrowRight, ExternalLink } from "lucide-react";

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="
          inline-flex
          items-center
          space-x-1
          px-3
          py-1.5
          rounded-lg
          bg-white/[0.04]
          border
          border-white/[0.08]
          text-white/90
          hover:bg-[#F04470]/10
          hover:border-[#F04470]/30
          hover:text-[#F58AA7]
          transition-all
          duration-300
        "
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight
          className="
            w-4
            h-4
            transition-transform
            duration-300
            group-hover:translate-x-0.5
          "
        />
      </button>
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/75
            backdrop-blur-sm
            p-4
            animate-fade-in
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-2xl
              bg-[#120811]
              border
              border-[#F04470]/20
              p-6
              text-white
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
              shadow-[0_0_35px_rgba(240,68,112,0.08)]
              animate-slide-up
              sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="
                absolute
                -top-20
                -right-20
                w-40
                h-40
                rounded-full
                bg-[#F04470]/10
                blur-3xl
                pointer-events-none
              "
            />
            <button
              className="
                absolute
                top-4
                right-4
                rounded-xl
                p-2
                bg-white/[0.03]
                border
                border-white/[0.06]
                text-[#9b8790]
                hover:bg-[#F04470]/10
                hover:border-[#F04470]/30
                hover:text-[#F58AA7]
                transition-all
                duration-300
              "
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              <Eye className="h-5 w-5" />
            </button>
            <div className="relative z-10">
              <h2
                className="
                  mb-4
                  pr-10
                  text-2xl
                  font-bold
                  text-white
                  leading-tight
                "
              >
                {title}
              </h2>
              <div className="mb-5 h-px w-16 bg-gradient-to-r from-[#F04470] to-[#D62965]" />
              <p
                className="
                  mb-6
                  text-sm
                  leading-7
                  text-[#9b8790]
                "
              >
                {description}
              </p>
              <div className="flex justify-end space-x-3">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-[#F04470]
                    to-[#D62965]
                    px-4
                    py-2.5
                    font-medium
                    text-white
                    shadow-[0_8px_20px_rgba(240,68,112,0.18)]
                    hover:shadow-[0_10px_28px_rgba(240,68,112,0.30)]
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  Live Demo
                  <ExternalLink className="ml-2 inline-block h-5 w-5" />
                </a>
                <button
                  className="
                    rounded-xl
                    bg-white/[0.04]
                    border
                    border-white/[0.08]
                    px-4
                    py-2.5
                    font-medium
                    text-[#b9a6ae]
                    hover:bg-white/[0.08]
                    hover:border-[#F04470]/25
                    hover:text-white
                    transition-all
                    duration-300
                  "
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;