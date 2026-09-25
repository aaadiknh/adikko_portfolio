import React, { useState, useEffect, memo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Code2,
  Settings,
  CloudDownload,
  CheckCircle2,
  Terminal,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Software Developer", "Technology Enthusiast"];
const TECH_STACK = ["React", "JavaScript", "Node.js", "Tailwind"];
const SOCIAL_LINKS = [
  {
    icon: Github,
    link: "https://github.com/aaadiknh",
    label: "GitHub Profile",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/adiknurhalimah/",
    label: "LinkedIn Profile",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/aaadiknhh_/",
    label: "Instagram Profile",
  },
];

const DeveloperIllustration = memo(({ isHovering }) => {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-visible">
      <motion.div
        animate={{
          scale: isHovering ? [1, 1.08, 1] : [1, 1.04, 1],
          opacity: isHovering ? [0.45, 0.6, 0.45] : [0.3, 0.42, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-[15%]
          rounded-full
          bg-[#F04470]/20
          blur-[90px]
        "
      />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[8%]
          right-[10%]
          w-20
          h-20
          rounded-full
          border
          border-[#F04470]/10
        "
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          y: [0, -8, 0],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          top-[3%]
          right-[27%]
          z-10
        "
      >
        <Settings
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            md:w-28
            md:h-28
            text-[#F58AA7]/90
            drop-shadow-[0_0_15px_rgba(240,68,112,0.15)]
          "
          strokeWidth={1.5}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[14%]
          left-[4%]
          z-30
        "
      >
        <div
          className="
            w-[105px]
            h-[82px]
            sm:w-[125px]
            sm:h-[95px]
            rounded-xl
            bg-[#1b0b14]/95
            border
            border-[#F04470]/40
            shadow-[0_15px_35px_rgba(240,68,112,0.14)]
            overflow-hidden
            backdrop-blur-xl
          "
        >
          <div
            className="
              h-5
              px-2
              flex
              items-center
              gap-1
              border-b
              border-[#F04470]/15
              bg-[#F04470]/5
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62965]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F04470]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58AA7]" />
          </div>

          <div className="p-2.5 space-y-2">
            <div className="flex gap-2 items-center">
              <span className="text-[#F04470] text-[10px]">
                &gt;
              </span>
              <div className="h-1.5 w-12 rounded-full bg-[#F58AA7]/60" />
            </div>
            <div className="h-1.5 w-20 rounded-full bg-[#F04470]/50" />
            <div className="h-1.5 w-14 rounded-full bg-[#D62965]/60" />
            <div className="h-1.5 w-16 rounded-full bg-[#F58AA7]/40" />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[25%]
          left-[13%]
          w-[72%]
          z-20
        "
      >
        <div
          className="
            relative
            rounded-[20px]
            p-2
            sm:p-3
            bg-gradient-to-br
            from-[#F04470]
            via-[#E73570]
            to-[#D62965]
            shadow-[0_25px_70px_rgba(214,41,101,0.32)]
          "
        >
          <div
            className="
              relative
              rounded-[14px]
              overflow-hidden
              bg-[#10080d]
              border
              border-[#F58AA7]/20
            "
          >
            <div
              className="
                h-7
                sm:h-8
                px-3
                flex
                items-center
                justify-between
                bg-[#190b13]
                border-b
                border-[#F04470]/15
              "
            >
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D62965]" />
                <span className="w-2 h-2 rounded-full bg-[#F04470]" />
                <span className="w-2 h-2 rounded-full bg-[#F58AA7]" />
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#F58AA7]" />
                <span className="text-[8px] text-[#a9929b]">
                  portfolio.jsx
                </span>
              </div>
            </div>
            <div className="relative p-4 sm:p-6 min-h-[180px] sm:min-h-[230px]">
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    01
                  </span>
                  <div className="w-12 h-2 rounded-full bg-[#F58AA7]/80" />
                  <div className="w-20 h-2 rounded-full bg-[#F04470]/50" />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    02
                  </span>
                  <div className="w-20 h-2 rounded-full bg-[#F04470]/70" />
                  <div className="w-28 h-2 rounded-full bg-[#F58AA7]/40" />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    03
                  </span>
                  <div className="w-10 h-2 rounded-full bg-[#F58AA7]/70" />
                  <div className="w-36 h-2 rounded-full bg-[#F04470]/60" />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    04
                  </span>
                  <div className="w-24 h-2 rounded-full bg-[#F04470]/50" />
                  <div className="w-16 h-2 rounded-full bg-[#D62965]/60" />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    05
                  </span>
                  <div className="w-14 h-2 rounded-full bg-[#F58AA7]/60" />
                  <div className="w-32 h-2 rounded-full bg-[#F04470]/45" />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[#D62965] text-xs">
                    06
                  </span>
                  <div className="w-8 h-2 rounded-full bg-[#F04470]/80" />
                  <div className="w-24 h-2 rounded-full bg-[#F58AA7]/40" />
                </div>
              </div>
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-5
                  left-[34%]
                  w-[2px]
                  h-4
                  bg-[#F04470]
                  shadow-[0_0_8px_rgba(240,68,112,0.8)]
                "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="
              w-20
              sm:w-28
              h-8
              bg-gradient-to-b
              from-[#F58AA7]/60
              to-[#D62965]/30
              clip-path-[polygon(25%_0,75%_0,100%_100%,0_100%)]
            "
          />
          <div
            className="
              w-32
              sm:w-44
              h-3
              rounded-full
              bg-gradient-to-r
              from-[#D62965]/30
              via-[#F58AA7]/70
              to-[#D62965]/30
              shadow-[0_0_20px_rgba(240,68,112,0.15)]
            "
          />
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[2%]
          bottom-[24%]
          z-30
        "
      >
        <div
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-2xl
            bg-gradient-to-br
            from-[#F04470]/80
            to-[#D62965]/70
            border
            border-[#F58AA7]/30
            flex
            items-center
            justify-center
            shadow-[0_15px_35px_rgba(214,41,101,0.2)]
          "
        >
          <Code2
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              text-white
            "
            strokeWidth={1.5}
          />
        </div>
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-[0%]
          top-[48%]
          z-10
        "
      >
        <div
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-2xl
            bg-[#F04470]/20
            border
            border-[#F04470]/35
            flex
            items-center
            justify-center
            shadow-[0_0_30px_rgba(240,68,112,0.12)]
          "
        >
          <Settings
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              text-[#F58AA7]
            "
            strokeWidth={1.5}
          />
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[17%]
          right-[0%]
          z-40
        "
      >
        <div
          className="
            w-[105px]
            h-[105px]
            sm:w-[125px]
            sm:h-[125px]
            rounded-2xl
            bg-gradient-to-br
            from-[#F04470]/80
            to-[#D62965]/70
            border
            border-[#F58AA7]/30
            flex
            flex-col
            items-center
            justify-center
            gap-2
            shadow-[0_15px_40px_rgba(214,41,101,0.22)]
          "
        >
          <CloudDownload
            className="w-10 h-10 sm:w-12 sm:h-12 text-white"
            strokeWidth={1.5}
          />
          <span className="text-[9px] sm:text-[10px] text-white/70 tracking-wider">
            DEPLOY
          </span>
        </div>
      </motion.div>
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[-1%]
          top-[45%]
          z-10
        "
      >
        <Settings
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            text-[#F58AA7]/60
          "
          strokeWidth={1.5}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [2, -1, 2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[6%]
          bottom-[14%]
          z-40
        "
      >
        <div
          className="
            relative
            w-[92px]
            h-[155px]
            sm:w-[110px]
            sm:h-[185px]
            rounded-[18px]
            p-1.5
            bg-gradient-to-br
            from-[#D62965]
            via-[#F04470]
            to-[#641B3A]
            shadow-[0_20px_45px_rgba(214,41,101,0.25)]
          "
        >
          <div
            className="
              h-full
              rounded-[13px]
              bg-[#11080d]
              border
              border-[#F58AA7]/20
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >
            <div className="w-8 h-1 rounded-full bg-[#F58AA7]/30" />
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-2xl
                bg-gradient-to-br
                from-[#F04470]
                to-[#D62965]
                flex
                items-center
                justify-center
                shadow-[0_0_25px_rgba(240,68,112,0.3)]
              "
            >
              <CheckCircle2
                className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                strokeWidth={1.7}
              />
            </motion.div>
            <div className="space-y-1">
              <div className="w-12 h-1 rounded-full bg-[#F58AA7]/40" />
              <div className="w-8 h-1 mx-auto rounded-full bg-[#F04470]/50" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[12%]
          left-[17%]
          z-40
        "
      >
        <div
          className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-2xl
            bg-[#F04470]/20
            backdrop-blur-md
            border
            border-[#F04470]/35
            flex
            items-center
            justify-center
            shadow-[0_15px_35px_rgba(214,41,101,0.2)]
          "
        >
          <Smartphone
            className="w-9 h-9 sm:w-11 sm:h-11 text-[#F58AA7]"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>
      {[
        {
          top: "10%",
          left: "44%",
          size: "w-2 h-2",
          delay: 0,
        },
        {
          top: "60%",
          left: "7%",
          size: "w-1.5 h-1.5",
          delay: 0.8,
        },
        {
          top: "78%",
          right: "18%",
          size: "w-2 h-2",
          delay: 1.5,
        },
        {
          top: "31%",
          right: "7%",
          size: "w-1.5 h-1.5",
          delay: 2,
        },
      ].map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            ${particle.size}
            rounded-full
            bg-[#F04470]
            shadow-[0_0_12px_rgba(240,68,112,0.8)]
            z-30
          `}
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
          }}
        />
      ))}
    </div>
  );
});

const MainTitle = memo(() => (
  <div
    className="space-y-2"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <h1
      className="
        font-black
        tracking-[-0.045em]
        text-[2.8rem]
        leading-[0.95]
        sm:text-5xl
        md:text-6xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl
      "
    >
      <span className="relative inline-block">
        <span className="absolute -inset-3 bg-gradient-to-r from-[#F04470] to-[#D62965] blur-3xl opacity-15" />
        <span
          className="
            relative
            bg-gradient-to-r
            from-[#fff1f5]
            via-[#F58AA7]
            to-[#F04470]
            bg-clip-text
            text-transparent
          "
        >
          Software
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-1 sm:mt-2">
        <span className="absolute -inset-3 bg-gradient-to-r from-[#F04470] to-[#D62965] blur-3xl opacity-20" />
        <span
          className="
            relative
            bg-gradient-to-r
            from-[#F58AA7]
            via-[#F04470]
            to-[#D62965]
            bg-clip-text
            text-transparent
          "
        >
          Developer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div
    className="
      group
      relative
      px-3.5
      py-1.5
      sm:px-4
      sm:py-2
      rounded-full
      bg-[#ffffff]/10
      backdrop-blur-md
      border
      border-[#F04470]/15
      text-xs
      sm:text-sm
      text-[#cdb9c1]
      hover:text-[#fff1f5]
      hover:bg-[#F04470]/10
      hover:border-[#F04470]/40
      hover:shadow-[0_0_20px_rgba(240,68,112,0.12)]
      transition-all
      duration-300
      whitespace-nowrap
      overflow-hidden
    "
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#F04470]/10 to-[#D62965]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="relative z-10">
      {tech}
    </span>
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a
    href={href}
    className="
      group
      relative
      flex-1
      sm:flex-none
      w-full
      sm:w-[150px]
      md:w-[160px]
    "
  >
    <div
      className="
        absolute
        -inset-0.5
        bg-gradient-to-r
        from-[#F04470]
        to-[#D62965]
        rounded-2xl
        opacity-35
        blur-md
        group-hover:opacity-75
        transition-all
        duration-700
      "
    />
    <div
      className="
        relative
        h-11
        sm:h-12
        w-full
        bg-[#120811]/90
        backdrop-blur-xl
        rounded-xl
        border
        border-[#F04470]/20
        overflow-hidden
        group-hover:border-[#F04470]/50
        transition-all
        duration-300
      "
    >
      <div
        className="
          absolute
          inset-0
          scale-x-0
          group-hover:scale-x-100
          origin-left
          transition-transform
          duration-500
          bg-gradient-to-r
          from-[#F04470]/20
          to-[#D62965]/20
        "
      />
      <span
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          gap-2
          group-hover:gap-3
          transition-all
          duration-300
        "
      >
        <span
          className="
            text-white
            bg-clip-text
            text-transparent
            font-semibold
            text-sm
            z-10
          "
        >
          {text}
        </span>
        <Icon
          className={`
            w-4 h-4
            text-[#Ffffff]
            z-10
            transform
            transition-all
            duration-300
            ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            }
          `}
        />
      </span>
    </div>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative p-1.5 sm:p-2"
  >
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#F04470]
        to-[#D62965]
        rounded-xl
        blur-lg
        opacity-15
        group-hover:opacity-40
        transition
        duration-300
      "
    />
    <div
      className="
        relative
        rounded-xl
        bg-[#150b11]/75
        backdrop-blur-xl
        p-2
        sm:p-2.5
        flex
        items-center
        justify-center
        border
        border-[#F04470]/15
        group-hover:border-[#F04470]/45
        group-hover:bg-[#F04470]/10
        group-hover:shadow-[0_0_20px_rgba(240,68,112,0.15)]
        transition-all
        duration-300
      "
    >
      <Icon
        className="
          w-4
          h-4
          sm:w-5
          sm:h-5
          text-[#9f8791]
          group-hover:text-[#F58AA7]
          group-hover:scale-110
          transition-all
          duration-300
        "
      />
    </div>
  </a>
));

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 30,
      duration: 800,
      easing: "ease-out-cubic",
    });

    const handleResize = () => {
      AOS.refresh();
    };
    let resizeTimer;
    const handleResizeDebounced = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
      }, 150);
    };
    window.addEventListener("resize", handleResizeDebounced);
    return () => {
      window.removeEventListener(
        "resize",
        handleResizeDebounced
      );
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeout;
    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, ERASING_SPEED);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <>
      <Helmet>
        <title>Adik Nur Halimah — Software Developer</title>
        <meta
          name="description"
          content="Website Adik Nur Halimah, Software Developer | Front-End Web Developer. Saya berfokus pada penciptaan pengalaman digital yang menarik dan selalu berupaya memberikan solusi terbaik dalam setiap proyek yang saya kerjakan."
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link
          rel="canonical"
          href="https://adikko.com"
        />
        <meta
          property="og:title"
          content="Adik Nur Halimah — Software Developer | Front-End Web Developer"
        />
        <meta
          property="og:description"
          content="Website dan portofolio Adik Nur Halimah, Software Developer | Front-End Web Developer."
        />
        <meta
          property="og:url"
          content="https://adikko.com"
        />
        <meta
          property="og:type"
          content="website"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Adik Nur Halimah",
            jobTitle:
              "Software Developer | Front-End Web Developer",
            url: "https://adikko.com",
            sameAs: [
              "https://github.com/aaadiknh",
              "https://www.linkedin.com/in/adiknurhalimah/",
              "https://www.instagram.com/aaadiknhh_/",
            ],
          })}
        </script>
      </Helmet>
      <section
        id="Home"
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-transparent
          px-5
          sm:px-8
          md:px-10
          lg:px-[8%]
          xl:px-[10%]
        "
      >
        <div
          className={`
            relative
            z-10
            min-h-screen
            flex
            items-center
            transition-opacity
            duration-1000
            ${
              isLoaded
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <div
            className="
              container
              mx-auto
              w-full
              py-24
              sm:py-28
              lg:py-20
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                gap-10
                md:gap-14
                lg:gap-8
                xl:gap-16
              "
            >
              <div
                className="
                  w-full
                  lg:w-1/2
                  flex
                  flex-col
                  justify-center
                  text-left
                  order-1
                "
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <div
                  className="
                    space-y-5
                    sm:space-y-6
                    lg:space-y-7
                    max-w-2xl
                  "
                >
                  <MainTitle />
                  <div
                    className="
                      min-h-[32px]
                      flex
                      items-center
                    "
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <span
                      className="
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        bg-gradient-to-r
                        from-[#fff1f5]
                        to-[#bfaab3]
                        bg-clip-text
                        text-transparent
                        font-light
                        break-words
                      "
                    >
                      {text}
                    </span>
                    <span
                      className="
                        w-[2px]
                        sm:w-[3px]
                        h-5
                        sm:h-6
                        bg-gradient-to-t
                        from-[#D62965]
                        to-[#F58AA7]
                        ml-1
                        animate-blink
                        shrink-0
                        shadow-[0_0_10px_rgba(240,68,112,0.7)]
                      "
                    />
                  </div>
                  <p
                    className="
                      text-sm
                      sm:text-base
                      md:text-lg
                      text-[#a9929b]
                      max-w-xl
                      leading-relaxed
                      font-light
                    "
                    data-aos="fade-up"
                    data-aos-delay="850"
                  >
                    Mengembangkan software dan solusi
                    digital yang fungsional, efisien,
                    dan user-friendly.
                  </p>
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      sm:gap-3
                      justify-start
                    "
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    {TECH_STACK.map((tech) => (
                      <TechStack
                        key={tech}
                        tech={tech}
                      />
                    ))}
                  </div>
                  <div
                    className="
                      flex
                      flex-row
                      gap-2
                      sm:gap-3
                      w-full
                      max-w-md
                    "
                    data-aos="fade-up"
                    data-aos-delay="1150"
                  >
                    <CTAButton
                      href="#Portofolio"
                      text="Projects"
                      icon={ExternalLink}
                    />
                    <CTAButton
                      href="#Contact"
                      text="Contact"
                      icon={Mail}
                    />
                  </div>
                  <div
                    className="
                      flex
                      gap-2
                      sm:gap-3
                      justify-start
                    "
                    data-aos="fade-up"
                    data-aos-delay="1300"
                  >
                    {SOCIAL_LINKS.map(
                      (social) => (
                        <SocialLink
                          key={social.label}
                          {...social}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div
                className="
                  w-full
                  lg:w-1/2
                  relative
                  flex
                  items-center
                  justify-center
                  order-2
                  mt-2
                  sm:mt-4
                  lg:mt-0
                  min-h-[360px]
                  sm:min-h-[450px]
                  md:min-h-[500px]
                  lg:min-h-[550px]
                  xl:min-h-[620px]
                "
                onMouseEnter={() =>
                  setIsHovering(true)
                }
                onMouseLeave={() =>
                  setIsHovering(false)
                }
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <DeveloperIllustration
                  isHovering={isHovering}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Home);