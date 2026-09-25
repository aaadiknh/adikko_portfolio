import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-[#ffffff]
      hover:text-[#F58AA7]
      text-sm
      font-medium
      transition-all
      duration-300
      ease-in-out
      flex
      items-center
      gap-2
      bg-white/[0.055]
      hover:bg-[#F04470]/10
      rounded-md
      border
      border-[#F04470]/15
      hover:border-[#F04470]/40
      backdrop-blur-sm
      group
      relative
      overflow-hidden
      shadow-[0_5px_20px_rgba(240,68,112,0.05)]
      hover:shadow-[0_5px_20px_rgba(240,68,112,0.15)]
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform
          duration-300
          ${
            isShowingMore
              ? "group-hover:-translate-y-0.5"
              : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={
            isShowingMore
              ? "18 15 12 9 6 15"
              : "6 9 12 15 18 9"
          }
        />
      </svg>
    </span>
    <span
      className="
        absolute
        bottom-0
        left-0
        w-0
        h-0.5
        bg-gradient-to-r
        from-[#F04470]
        to-[#D62965]
        transition-all
        duration-300
        group-hover:w-full
        shadow-[0_0_8px_rgba(240,68,112,0.6)]
      "
    />
  </button>
);

const techStacks = [
  {
    icon: "html.svg",
    language: "HTML",
  },
  {
    icon: "css.svg",
    language: "CSS",
  },
  {
    icon: "javascript.svg",
    language: "JavaScript",
  },
  {
    icon: "tailwind.svg",
    language: "Tailwind CSS",
  },
  {
    icon: "reactjs.svg",
    language: "ReactJS",
  },
  {
    icon: "vite.svg",
    language: "Vite",
  },
  {
    icon: "dart.svg",
    language: "Dart",
  },
  {
    icon: "bootstrap.svg",
    language: "Bootstrap",
  },
  {
    icon: "firebase.svg",
    language: "Firebase",
  },
  {
    icon: "php.svg",
    language: "PHP",
  },
  {
    icon: "python.svg",
    language: "Python",
  },
  {
    icon: "flutter.svg",
    language: "Flutter",
  },
];

const tabs = [
  {
    label: "Projects",
    icon: Code,
  },
  {
    label: "Certificates",
    icon: Award,
  },
  {
    label: "Tech Stack",
    icon: Boxes,
  },
];

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [initialItems, setInitialItems] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? 4
      : 6
  );

  useEffect(() => {
    const handleResize = () => {
      setInitialItems(window.innerWidth < 768 ? 4 : 6);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [projectsResponse, certificatesResponse] =
        await Promise.all([
          supabase
            .from("projects")
            .select("*")
            .order("id", { ascending: false }),
          supabase
            .from("certificates")
            .select("*")
            .order("id", { ascending: false }),
        ]);
      if (projectsResponse.error) {
        throw projectsResponse.error;
      }
      if (certificatesResponse.error) {
        throw certificatesResponse.error;
      }

      const projectData = projectsResponse.data || [];
      const certificateData = certificatesResponse.data || [];
      setProjects(projectData);
      setCertificates(certificateData);
      localStorage.setItem(
        "projects",
        JSON.stringify(projectData)
      );
      localStorage.setItem(
        "certificates",
        JSON.stringify(certificateData)
      );
      window.dispatchEvent(
        new Event("portfolioDataUpdated")
      );
    } catch (error) {
      console.error(
        "Error fetching data from Supabase:",
        error.message
      );
    }
  }, []);

  useEffect(() => {
    const cachedProjects =
      localStorage.getItem("projects");
    const cachedCertificates =
      localStorage.getItem("certificates");
    if (cachedProjects) {
      try {
        setProjects(JSON.parse(cachedProjects));
      } catch (error) {
        console.error(
          "Error parsing cached projects:",
          error
        );
      }
    }
    if (cachedCertificates) {
      try {
        setCertificates(
          JSON.parse(cachedCertificates)
        );
      } catch (error) {
        console.error(
          "Error parsing cached certificates:",
          error
        );
      }
    }
    fetchData();
  }, [fetchData]);

  const handleChange = (newValue) => {
    setValue(newValue);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      id="Portofolio"
      className="
        md:px-[10%]
        px-[5%]
        w-full
        sm:mt-0
        mt-[3rem]
        relative
        overflow-hidden
        isolate
      "
    >
      <div
        className="
          text-center
          pb-10
          relative
          z-10
        "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="
            inline-block
            text-3xl
            md:text-5xl
            font-bold
            text-center
            mx-auto
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-[#ff6b6b] to-[#ff4d8d]
            drop-shadow-[0_0_25px_rgba(240,68,112,0.12)]
          "
        >
          Portfolio Showcase
        </h2>
        <p
          className="
            text-[#a9929b]
            max-w-2xl
            mx-auto
            text-sm
            md:text-base
            mt-2
            leading-relaxed
          "
        >
          Explore my journey through projects,
          certifications, and technical expertise.
          Each section represents a milestone in my
          continuous learning path.
        </p>
      </div>
      <div
        className="
          w-full
          rounded-[20px]
          border
          border-[#Ffffff]/15
          bg-white/[0.055]
          backdrop-blur-2xl
          p-2
          sm:p-3
          relative
          z-10
          shadow-[0_15px_50px_rgba(240,68,112,0.06)]
        "
      >
        <div
          className="
            grid
            grid-cols-3
            gap-1
            sm:gap-2
            min-h-[70px]
          "
          role="tablist"
          aria-label="Portfolio sections"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = value === index;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleChange(index)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`portfolio-tabpanel-${index}`}
                id={`portfolio-tab-${index}`}
                className={`
                  relative
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  gap-1
                  sm:gap-2
                  px-2
                  sm:px-4
                  py-3
                  sm:py-4
                  rounded-xl
                  font-semibold
                  text-xs
                  sm:text-sm
                  md:text-base
                  transition-all
                  duration-300
                  ease-in-out
                  border
                  ${
                    isActive
                      ? `
                        text-white
                        bg-gradient-to-br
                        from-[#F04470]/20
                        via-[#F04470]/10
                        to-[#D62965]/15
                        border-[#F04470]/30
                        shadow-[0_8px_25px_rgba(240,68,112,0.15)]
                      `
                      : `
                        text-[#9b8790]
                        border-transparent
                        hover:text-[#F58AA7]
                        hover:bg-[#F04470]/[0.06]
                        hover:border-[#F04470]/15
                        hover:-translate-y-0.5
                      `
                  }
                `}
              >
                <Icon
                  className={`
                    w-5
                    h-5
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-[#F04470] scale-110 drop-shadow-[0_0_8px_rgba(240,68,112,0.5)]"
                        : "text-[#806c75]"
                    }
                  `}
                />
                <span>{tab.label}</span>
                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-10
                      sm:w-16
                      h-0.5
                      rounded-full
                      bg-gradient-to-r
                      from-[#F04470]
                      to-[#D62965]
                      shadow-[0_0_10px_rgba(240,68,112,0.8)]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div
        className="
          w-full
          pt-8
          sm:pt-10
          relative
          z-10
        "
      >
        {value === 0 && (
          <div
            role="tabpanel"
            id="portfolio-tabpanel-0"
            aria-labelledby="portfolio-tab-0"
          >
            <div
              className="
                container
                mx-auto
                flex
                justify-center
                items-center
                overflow-hidden
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-2
                  2xl:grid-cols-3
                  gap-5
                  w-full
                "
              >
                {displayedProjects.map(
                  (project, index) => (
                    <div
                      key={project.id || index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <CardProject
                        Img={project.Img}
                        Title={project.Title}
                        Description={
                          project.Description
                        }
                        Link={project.Link}
                        id={project.id}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() =>
                    toggleShowMore("projects")
                  }
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </div>
        )}
        {value === 1 && (
          <div
            role="tabpanel"
            id="portfolio-tabpanel-1"
            aria-labelledby="portfolio-tab-1"
          >
            <div
              className="
                container
                mx-auto
                flex
                justify-center
                items-center
                overflow-hidden
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  md:gap-5
                  gap-4
                  w-full
                "
              >
                {displayedCertificates.map(
                  (certificate, index) => (
                    <div
                      key={
                        certificate.id || index
                      }
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <Certificate
                        ImgSertif={certificate.Img}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() =>
                    toggleShowMore("certificates")
                  }
                  isShowingMore={
                    showAllCertificates
                  }
                />
              </div>
            )}
          </div>
        )}
        {value === 2 && (
          <div
            role="tabpanel"
            id="portfolio-tabpanel-2"
            aria-labelledby="portfolio-tab-2"
          >
            <div
              className="
                container
                mx-auto
                flex
                justify-center
                items-center
                overflow-hidden
                pb-[5%]
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-6
                  lg:gap-8
                  gap-5
                  w-full
                "
              >
                {techStacks.map(
                  (stack, index) => (
                    <div
                      key={`${stack.language}-${index}`}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <TechStackIcon
                        TechStackIcon={stack.icon}
                        Language={stack.language}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}