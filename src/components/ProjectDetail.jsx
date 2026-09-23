import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import Swal from "sweetalert2";
import { toSlug } from "../utils/slug";

/* =========================================
   TECH ICONS
========================================= */

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  JavaScript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

/* =========================================
   TECH BADGE
========================================= */

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        px-3
        py-2
        md:px-4
        md:py-2.5
        bg-gradient-to-r
        from-[#F04470]/10
        to-[#D62965]/10
        rounded-xl
        border
        border-[#F04470]/10
        hover:border-[#F04470]/35
        transition-all
        duration-300
        cursor-default
      "
    >
      {/* Hover Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#F04470]/0
          to-[#D62965]/0
          group-hover:from-[#F04470]/10
          group-hover:to-[#D62965]/10
          transition-all
          duration-500
        "
      />

      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon
          className="
            w-3.5
            h-3.5
            md:w-4
            md:h-4
            text-[#F04470]
            group-hover:text-[#F58AA7]
            transition-colors
          "
        />

        <span
          className="
            text-xs
            md:text-sm
            font-medium
            text-[#F58AA7]/90
            group-hover:text-[#F58AA7]
            transition-colors
          "
        >
          {tech}
        </span>
      </div>
    </div>
  );
};

/* =========================================
   FEATURE ITEM
========================================= */

const FeatureItem = ({ feature }) => {
  return (
    <li
      className="
        group
        flex
        items-start
        space-x-3
        p-2.5
        md:p-3.5
        rounded-xl
        hover:bg-[#F04470]/5
        transition-all
        duration-300
        border
        border-transparent
        hover:border-[#F04470]/10
      "
    >
      <div className="relative mt-2">
        <div
          className="
            absolute
            -inset-1
            bg-gradient-to-r
            from-[#F04470]/25
            to-[#D62965]/25
            rounded-full
            blur
            group-hover:opacity-100
            opacity-0
            transition-opacity
            duration-300
          "
        />

        <div
          className="
            relative
            w-1.5
            h-1.5
            md:w-2
            md:h-2
            rounded-full
            bg-gradient-to-r
            from-[#F04470]
            to-[#D62965]
            group-hover:scale-125
            transition-transform
            duration-300
          "
        />
      </div>

      <span
        className="
          text-sm
          md:text-base
          text-[#b9a6ae]
          group-hover:text-white
          transition-colors
        "
      >
        {feature}
      </span>
    </li>
  );
};

/* =========================================
   PROJECT STATS
========================================= */

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:gap-4
        p-3
        md:p-4
        bg-[#0d080c]
        rounded-xl
        overflow-hidden
        relative
        border
        border-[#F04470]/10
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#F04470]/10
          to-[#D62965]/10
          opacity-60
          blur-2xl
          z-0
        "
      />

      {/* Total Technology */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          space-x-2
          md:space-x-3
          bg-white/[0.035]
          p-2
          md:p-3
          rounded-lg
          border
          border-[#F04470]/15
          transition-all
          duration-300
          hover:scale-105
          hover:border-[#F04470]/40
          hover:shadow-[0_8px_25px_rgba(240,68,112,0.10)]
        "
      >
        <div
          className="
            bg-[#F04470]/10
            p-1.5
            md:p-2
            rounded-full
          "
        >
          <Code2
            className="
              text-[#F58AA7]
              w-4
              h-4
              md:w-6
              md:h-6
            "
            strokeWidth={1.5}
          />
        </div>

        <div className="flex-grow">
          <div
            className="
              text-lg
              md:text-xl
              font-semibold
              text-[#F58AA7]
            "
          >
            {techStackCount}
          </div>

          <div className="text-[10px] md:text-xs text-[#88737d]">
            Total Teknologi
          </div>
        </div>
      </div>

      {/* Total Features */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          space-x-2
          md:space-x-3
          bg-white/[0.035]
          p-2
          md:p-3
          rounded-lg
          border
          border-[#D62965]/15
          transition-all
          duration-300
          hover:scale-105
          hover:border-[#D62965]/40
          hover:shadow-[0_8px_25px_rgba(214,41,101,0.10)]
        "
      >
        <div
          className="
            bg-[#D62965]/10
            p-1.5
            md:p-2
            rounded-full
          "
        >
          <Layers
            className="
              text-[#F04470]
              w-4
              h-4
              md:w-6
              md:h-6
            "
            strokeWidth={1.5}
          />
        </div>

        <div className="flex-grow">
          <div
            className="
              text-lg
              md:text-xl
              font-semibold
              text-[#F04470]
            "
          >
            {featuresCount}
          </div>

          <div className="text-[10px] md:text-xs text-[#88737d]">
            Fitur Utama
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   GITHUB CLICK HANDLER
========================================= */

const handleGithubClick = (githubLink) => {
  if (!githubLink || githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#F04470",
      background: "#120811",
      color: "#ffffff",
    });

    return false;
  }

  return true;
};

/* =========================================
   PROJECT DETAILS
========================================= */

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  /* =========================================
     GET PROJECT DATA
  ========================================= */

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    /* 
       Cari project berdasarkan slug
       yang dibuat dari Title
    */
    const selectedProject = storedProjects.find(
      (p) => toSlug(p.Title) === slug
    );

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,

        Features: selectedProject.Features || [],

        TechStack: selectedProject.TechStack || [],

        Github:
          selectedProject.Github || "Private",

        Link:
          selectedProject.Link || "",
      };

      setProject(enhancedProject);
    }
  }, [slug]);

  /* =========================================
     LIVE DEMO HANDLER
  ========================================= */

  const handleLiveDemo = () => {
    /*
      Jika project tidak memiliki Link
      maka arahkan ke halaman 404.
    */

    if (!project?.Link || project.Link.trim() === "") {
      navigate("/404");
      return;
    }

    /*
      Jika Link tersedia,
      buka di tab baru.
    */

    window.open(
      project.Link,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================
     PROJECT NOT FOUND
  ========================================= */

  if (!project) {
    return (
      <div
        className="
          min-h-screen
          bg-[#090609]
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center space-y-6 animate-fadeIn">
          <div
            className="
              w-16
              h-16
              md:w-24
              md:h-24
              mx-auto
              border-4
              border-[#F04470]/20
              border-t-[#F04470]
              rounded-full
              animate-spin
              shadow-[0_0_25px_rgba(240,68,112,0.15)]
            "
          />

          <h2 className="text-xl md:text-3xl font-bold text-white">
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }

  /* =========================================
     PROJECT URL
  ========================================= */

  const projectUrl = `https://adikko.com/project/${toSlug(
    project.Title
  )}`;

  return (
    <>
      {/* =====================================
          SEO
      ===================================== */}

      <Helmet>
        <title>
          {project.Title} — Adik Nur Halimah
        </title>

        <meta
          name="description"
          content={
            project.Description
              ? project.Description.slice(0, 155)
              : `Project ${project.Title} oleh Adik Nur Halimah — Software Developer | Frontend Web Developer.`
          }
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={projectUrl}
        />

        <meta
          property="og:title"
          content={`${project.Title} — Adik Nur Halimah`}
        />

        <meta
          property="og:description"
          content={project.Description?.slice(0, 155)}
        />

        <meta
          property="og:url"
          content={projectUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        {project.Img && (
          <meta
            property="og:image"
            content={project.Img}
          />
        )}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${project.Title}",
              "description": "${project.Description?.replace(
                /"/g,
                '\\"'
              )}",
              "url": "${projectUrl}",
              "author": {
                "@type": "Person",
                "name": "Adik Nur Halimah",
                "url": "https://adikko.com"
              }
            }
          `}
        </script>
      </Helmet>

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div
        className="
          min-h-screen
          bg-[#090609]
          px-[2%]
          sm:px-0
          relative
          overflow-hidden
        "
      >
        {/* ===================================
            BACKGROUND
        =================================== */}

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute -inset-[10px] opacity-30">

            {/* Pink Blob */}
            <div
              className="
                absolute
                top-0
                -left-4
                w-72
                md:w-96
                h-72
                md:h-96
                bg-[#F04470]
                rounded-full
                mix-blend-screen
                filter
                blur-3xl
                opacity-25
                animate-blob
              "
            />

            {/* Magenta Blob */}
            <div
              className="
                absolute
                top-0
                -right-4
                w-72
                md:w-96
                h-72
                md:h-96
                bg-[#D62965]
                rounded-full
                mix-blend-screen
                filter
                blur-3xl
                opacity-25
                animate-blob
                animation-delay-2000
              "
            />

            {/* Soft Pink Blob */}
            <div
              className="
                absolute
                -bottom-8
                left-20
                w-72
                md:w-96
                h-72
                md:h-96
                bg-[#F58AA7]
                rounded-full
                mix-blend-screen
                filter
                blur-3xl
                opacity-15
                animate-blob
                animation-delay-4000
              "
            />
          </div>

          <div
            className="
              absolute
              inset-0
              bg-[url('/grid.svg')]
              opacity-[0.02]
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#090609]/20
              via-[#090609]/40
              to-[#090609]
            "
          />
        </div>

        {/* ===================================
            CONTENT
        =================================== */}

        <div className="relative">
          <div
            className="
              max-w-7xl
              mx-auto
              px-4
              md:px-6
              py-8
              md:py-16
            "
          >
            {/* =================================
                BREADCRUMB / BACK
            ================================= */}

            <div
              className="
                flex
                items-center
                space-x-2
                md:space-x-4
                mb-8
                md:mb-12
                animate-fadeIn
              "
            >
              <button
                onClick={() => navigate(-1)}
                className="
                  group
                  inline-flex
                  items-center
                  space-x-1.5
                  md:space-x-2
                  px-3
                  md:px-5
                  py-2
                  md:py-2.5
                  bg-white/[0.035]
                  backdrop-blur-xl
                  rounded-xl
                  text-white/90
                  hover:bg-[#F04470]/10
                  transition-all
                  duration-300
                  border
                  border-white/[0.08]
                  hover:border-[#F04470]/30
                  hover:text-[#F58AA7]
                  text-sm
                  md:text-base
                "
              >
                <ArrowLeft
                  className="
                    w-4
                    h-4
                    md:w-5
                    md:h-5
                    group-hover:-translate-x-1
                    transition-transform
                  "
                />

                <span>Back</span>
              </button>

              <div
                className="
                  flex
                  items-center
                  space-x-1
                  md:space-x-2
                  text-sm
                  md:text-base
                  text-[#806c75]
                "
              >
                <span>Projects</span>

                <ChevronRight
                  className="w-3 h-3 md:w-4 md:h-4"
                />

                <span className="text-white/90 truncate">
                  {project.Title}
                </span>
              </div>
            </div>

            {/* =================================
                MAIN GRID
            ================================= */}

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16">

              {/* =================================
                  LEFT COLUMN
              ================================= */}

              <div
                className="
                  space-y-6
                  md:space-y-10
                  animate-slideInLeft
                "
              >
                {/* TITLE */}
                <div className="space-y-4 md:space-y-6">
                  <h1
                    className="
                      text-3xl
                      md:text-6xl
                      font-bold
                      bg-gradient-to-r
                      from-[#F58AA7]
                      via-[#F04470]
                      to-[#D62965]
                      bg-clip-text
                      text-transparent
                      leading-tight
                    "
                  >
                    {project.Title}
                  </h1>

                  <div className="relative h-1 w-16 md:w-24">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#F04470]
                        to-[#D62965]
                        rounded-full
                        animate-pulse
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#F04470]
                        to-[#D62965]
                        rounded-full
                        blur-sm
                      "
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="prose prose-invert max-w-none">
                  <p
                    className="
                      text-base
                      md:text-lg
                      text-[#b9a6ae]
                      leading-relaxed
                    "
                  >
                    {project.Description}
                  </p>
                </div>

                {/* PROJECT STATS */}
                <ProjectStats project={project} />

                {/* =================================
                    ACTION BUTTONS
                ================================= */}

                <div className="flex flex-wrap gap-3 md:gap-4">

                  {/* LIVE DEMO */}
                  <button
                    type="button"
                    onClick={handleLiveDemo}
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      space-x-1.5
                      md:space-x-2
                      px-4
                      md:px-8
                      py-2.5
                      md:py-4
                      bg-gradient-to-r
                      from-[#F04470]/10
                      to-[#D62965]/10
                      hover:from-[#F04470]/20
                      hover:to-[#D62965]/20
                      text-[#F58AA7]
                      rounded-xl
                      transition-all
                      duration-300
                      border
                      border-[#F04470]/20
                      hover:border-[#F04470]/45
                      backdrop-blur-xl
                      overflow-hidden
                      text-sm
                      md:text-base
                    "
                  >
                    {/* Hover Effect */}
                    <div
                      className="
                        absolute
                        inset-0
                        translate-y-[100%]
                        bg-gradient-to-r
                        from-[#F04470]/10
                        to-[#D62965]/10
                        transition-transform
                        duration-300
                        group-hover:translate-y-[0%]
                      "
                    />

                    <ExternalLink
                      className="
                        relative
                        w-4
                        h-4
                        md:w-5
                        md:h-5
                        group-hover:rotate-12
                        transition-transform
                      "
                    />

                    <span className="relative font-medium">
                      {project.Link
                        ? "Live Demo"
                        : "Demo Not Available"}
                    </span>
                  </button>

                  {/* GITHUB */}
                  <a
                    href={
                      project.Github &&
                      project.Github !== "Private"
                        ? project.Github
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      space-x-1.5
                      md:space-x-2
                      px-4
                      md:px-8
                      py-2.5
                      md:py-4
                      bg-gradient-to-r
                      from-[#D62965]/10
                      to-[#F04470]/10
                      hover:from-[#D62965]/20
                      hover:to-[#F04470]/20
                      text-[#F58AA7]
                      rounded-xl
                      transition-all
                      duration-300
                      border
                      border-[#D62965]/20
                      hover:border-[#D62965]/45
                      backdrop-blur-xl
                      overflow-hidden
                      text-sm
                      md:text-base
                    "
                    onClick={(e) =>
                      !handleGithubClick(project.Github) &&
                      e.preventDefault()
                    }
                  >
                    {/* Hover Effect */}
                    <div
                      className="
                        absolute
                        inset-0
                        translate-y-[100%]
                        bg-gradient-to-r
                        from-[#D62965]/10
                        to-[#F04470]/10
                        transition-transform
                        duration-300
                        group-hover:translate-y-[0%]
                      "
                    />

                    <Github
                      className="
                        relative
                        w-4
                        h-4
                        md:w-5
                        md:h-5
                        group-hover:rotate-12
                        transition-transform
                      "
                    />

                    <span className="relative font-medium">
                      Github
                    </span>
                  </a>
                </div>

                {/* =================================
                    TECHNOLOGIES
                ================================= */}

                <div className="space-y-4 md:space-y-6">
                  <h3
                    className="
                      text-lg
                      md:text-xl
                      font-semibold
                      text-white/90
                      mt-[3rem]
                      md:mt-0
                      flex
                      items-center
                      gap-2
                      md:gap-3
                    "
                  >
                    <Code2
                      className="
                        w-4
                        h-4
                        md:w-5
                        md:h-5
                        text-[#F04470]
                      "
                    />

                    Technologies Used
                  </h3>

                  {project.TechStack.length > 0 ? (
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.TechStack.map(
                        (tech, index) => (
                          <TechBadge
                            key={index}
                            tech={tech}
                          />
                        )
                      )}
                    </div>
                  ) : (
                    <p
                      className="
                        text-sm
                        md:text-base
                        text-[#806c75]
                        opacity-70
                      "
                    >
                      No technologies added.
                    </p>
                  )}
                </div>
              </div>

              {/* =================================
                  RIGHT COLUMN
              ================================= */}

              <div
                className="
                  space-y-6
                  md:space-y-10
                  animate-slideInRight
                "
              >
                {/* PROJECT IMAGE */}
                <div
                  className="
                    relative
                    rounded-2xl
                    overflow-hidden
                    border
                    border-white/[0.08]
                    shadow-2xl
                    group
                    bg-[#0d080c]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#090609]
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      z-10
                    "
                  />

                  <img
                    src={project.Img}
                    alt={project.Title}
                    className={`
                      w-full
                      object-cover
                      transform
                      transition-transform
                      duration-700
                      will-change-transform
                      group-hover:scale-105
                      ${
                        isImageLoaded
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                    onLoad={() =>
                      setIsImageLoaded(true)
                    }
                  />

                  {/* Image Border */}
                  <div
                    className="
                      absolute
                      inset-0
                      border-2
                      border-[#F04470]/0
                      group-hover:border-[#F04470]/20
                      transition-colors
                      duration-300
                      rounded-2xl
                      z-20
                    "
                  />
                </div>

                {/* =================================
                    KEY FEATURES
                ================================= */}

                <div
                  className="
                    bg-white/[0.02]
                    backdrop-blur-xl
                    rounded-2xl
                    p-8
                    border
                    border-white/[0.08]
                    space-y-6
                    hover:border-[#F04470]/20
                    transition-colors
                    duration-300
                    group
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-white/90
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Star
                      className="
                        w-5
                        h-5
                        text-[#F04470]
                        group-hover:rotate-[20deg]
                        transition-transform
                        duration-300
                      "
                    />

                    Key Features
                  </h3>

                  {project.Features.length > 0 ? (
                    <ul className="list-none space-y-2">
                      {project.Features.map(
                        (feature, index) => (
                          <FeatureItem
                            key={index}
                            feature={feature}
                          />
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-[#806c75] opacity-70">
                      No features added.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            ANIMATIONS
        ===================================== */}

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }

            33% {
              transform: translate(30px, -50px) scale(1.1);
            }

            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }

            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          .animate-blob {
            animation: blob 10s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          .animate-fadeIn {
            animation: fadeIn 0.7s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.7s ease-out;
          }

          .animate-slideInRight {
            animation: slideInRight 0.7s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ProjectDetails;