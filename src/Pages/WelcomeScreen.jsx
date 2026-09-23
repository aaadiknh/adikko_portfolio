import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Braces,
  Terminal,
  Database,
  GitBranch,
  FileCode2,
  Sparkles,
  Star,
} from "lucide-react";

/* =========================================================
   FLOATING ICON
========================================================= */
const FloatingIcon = ({
  Icon,
  className = "",
  delay = 0,
  rotate = 0,
}) => {
  return (
    <motion.div
      className={`
        absolute
        flex
        items-center
        justify-center
        w-9
        h-9
        sm:w-11
        sm:h-11
        rounded-2xl
        border
        border-pink-300/10
        bg-pink-400/[0.035]
        backdrop-blur-sm
        text-pink-300/40
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 20,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: [0.25, 0.65, 0.25],
        scale: [0.9, 1, 0.9],
        y: [0, -12, 0],
        rotate: [rotate - 5, rotate + 5, rotate - 5],
      }}
      transition={{
        delay,
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon
        className="w-4 h-4 sm:w-5 sm:h-5"
        strokeWidth={1.5}
      />
    </motion.div>
  );
};

/* =========================================================
   DECORATIVE DOT
========================================================= */
const DecorativeDot = ({
  left,
  top,
  delay = 0,
  size = 4,
}) => {
  return (
    <motion.span
      className="absolute rounded-full bg-pink-300"
      style={{
        left,
        top,
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.4, 1, 0.4],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

/* =========================================================
   STAR
========================================================= */
const DecorativeStar = ({
  left,
  top,
  delay = 0,
  size = 18,
}) => {
  return (
    <motion.div
      className="absolute text-pink-300/80"
      style={{
        left,
        top,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: -30,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.7, 1, 0.7],
        rotate: [-10, 10, -10],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Star
        size={size}
        fill="currentColor"
        strokeWidth={1}
      />
    </motion.div>
  );
};

/* =========================================================
   BACKGROUND
========================================================= */
const Background = () => {
  const dots = [
    ["12%", "23%", 0],
    ["84%", "18%", 0.8],
    ["18%", "74%", 1.2],
    ["79%", "72%", 1.8],
    ["9%", "48%", 2.4],
    ["91%", "44%", 3],
    ["35%", "16%", 1.5],
    ["67%", "82%", 2.2],
    ["51%", "11%", 0.5],
    ["57%", "87%", 1.8],
    ["27%", "35%", 2.8],
    ["73%", "34%", 1.1],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* BASE */}
      <div className="absolute inset-0 bg-[#090509]" />

      {/* MAIN MAGENTA GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_18%_15%,rgba(190,12,101,0.65),transparent_38%),radial-gradient(circle_at_82%_90%,rgba(110,8,65,0.45),transparent_40%),linear-gradient(115deg,#12070f_0%,#2b071b_42%,#090509_100%)]
        "
      />

      {/* LARGE LEFT MAGENTA GLOW */}
      <motion.div
        className="
          absolute
          -left-[15%]
          -top-[15%]
          w-[430px]
          h-[430px]
          sm:w-[650px]
          sm:h-[650px]
          rounded-full
          bg-[#d41472]/20
          blur-[120px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CENTER GLOW */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          sm:w-[480px]
          sm:h-[480px]
          rounded-full
          bg-pink-600/[0.08]
          blur-[100px]
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SUBTLE GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.55)_100%)]
        "
      />

      {/* DOTS */}
      {dots.map(([left, top, delay], index) => (
        <DecorativeDot
          key={index}
          left={left}
          top={top}
          delay={delay}
          size={index % 3 === 0 ? 4 : 2}
        />
      ))}

      {/* DECORATIVE STARS */}
      <DecorativeStar
        left="11%"
        top="27%"
        delay={0}
        size={18}
      />

      <DecorativeStar
        left="83%"
        top="24%"
        delay={1}
        size={14}
      />

      <DecorativeStar
        left="22%"
        top="69%"
        delay={1.8}
        size={12}
      />

      <DecorativeStar
        left="76%"
        top="68%"
        delay={2.5}
        size={18}
      />
    </div>
  );
};

/* =========================================================
   ABSTRACT DECORATION
========================================================= */
const AbstractShape = ({
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={`
        absolute
        pointer-events-none
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: [0.35, 0.7, 0.35],
        scale: [0.95, 1.05, 0.95],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="
          w-16
          h-16
          sm:w-20
          sm:h-20
          rounded-[35%]
          bg-gradient-to-br
          from-pink-400/25
          via-fuchsia-500/10
          to-transparent
          blur-[1px]
        "
      />
    </motion.div>
  );
};

/* =========================================================
   LOADING
========================================================= */
const LoadingProgress = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2600;
    const start = Date.now();

    const update = () => {
      const elapsed = Date.now() - start;

      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          onComplete?.();
        }, 300);
      }
    };

    requestAnimationFrame(update);

    return () => {};
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center">
      {/* Progress bar */}
      <div
        className="
          w-40
          sm:w-52
          h-[3px]
          overflow-hidden
          rounded-full
          bg-white/10
          shadow-[0_0_12px_rgba(240,68,112,0.08)]
        "
      >
        <motion.div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-fuchsia-400
            to-pink-300
            shadow-[0_0_10px_rgba(240,68,112,0.45)]
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Loading text */}
      <div
        className="
          mt-3
          flex
          items-center
          gap-2
          text-[10px]
          sm:text-xs
          text-pink-200/40
          tracking-[0.2em]
          uppercase
        "
      >
        <span>Loading portfolio</span>

        <span>{Math.floor(progress)}%</span>
      </div>
    </div>
  );
};

/* =========================================================
   WELCOME SCREEN
========================================================= */
const WelcomeScreen = ({
  onLoadingComplete,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  const handleComplete = () => {
    setFinished(true);

    setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        onLoadingComplete?.();
      }, 500);
    }, 500);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            min-h-screen
            w-full
            overflow-hidden
            bg-[#090509]
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Background />

          {/* DECORATIVE ABSTRACT SHAPES */}
          <AbstractShape
            className="
              left-[7%]
              top-[20%]
              sm:left-[14%]
              sm:top-[24%]
            "
            delay={0}
          />

          <AbstractShape
            className="
              right-[7%]
              top-[17%]
              sm:right-[14%]
              sm:top-[21%]
            "
            delay={1}
          />

          <AbstractShape
            className="
              left-[9%]
              bottom-[18%]
              sm:left-[17%]
              sm:bottom-[20%]
            "
            delay={2}
          />

          <AbstractShape
            className="
              right-[8%]
              bottom-[18%]
              sm:right-[16%]
              sm:bottom-[20%]
            "
            delay={3}
          />

          {/* FLOATING PROGRAMMING ICONS */}
          <FloatingIcon
            Icon={Code2}
            className="
              left-[8%]
              top-[31%]
              sm:left-[17%]
              sm:top-[32%]
            "
            delay={0}
            rotate={-8}
          />

          <FloatingIcon
            Icon={Braces}
            className="
              right-[8%]
              top-[30%]
              sm:right-[17%]
              sm:top-[30%]
            "
            delay={0.7}
            rotate={8}
          />

          <FloatingIcon
            Icon={Terminal}
            className="
              left-[12%]
              bottom-[29%]
              sm:left-[21%]
              sm:bottom-[28%]
            "
            delay={1.4}
            rotate={-5}
          />

          <FloatingIcon
            Icon={Database}
            className="
              right-[12%]
              bottom-[28%]
              sm:right-[21%]
              sm:bottom-[27%]
            "
            delay={2}
            rotate={6}
          />

          <FloatingIcon
            Icon={GitBranch}
            className="
              hidden
              md:flex
              left-[28%]
              top-[19%]
            "
            delay={2.5}
            rotate={-10}
          />

          <FloatingIcon
            Icon={FileCode2}
            className="
              hidden
              md:flex
              right-[28%]
              top-[20%]
            "
            delay={3}
            rotate={10}
          />

          {/* MAIN CONTENT */}
          <div
            className="
              relative
              z-10
              min-h-screen
              flex
              items-center
              justify-center
              px-6
            "
          >
            <div
              className="
                relative
                w-full
                max-w-4xl
              "
            >
              {/* TOP SMALL LABEL */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  -top-16
                  left-1/2
                  -translate-x-1/2
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.35em]
                    uppercase
                    text-pink-200/50
                    whitespace-nowrap
                  "
                >
                  Welcome to my
                </span>

                <span
                  className="
                    px-2
                    py-1
                    rounded-full
                    border
                    border-pink-300/20
                    bg-pink-400/5
                    text-[9px]
                    text-pink-200/60
                  "
                >
                  2026
                </span>
              </motion.div>

              {/* MAIN TYPOGRAPHY */}
              <div className="text-center">
                {/* PORTFOLIO */}
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    font-black
                    uppercase
                    tracking-[-0.07em]
                    leading-[0.78]
                    text-[4rem]
                    sm:text-[6rem]
                    md:text-[8rem]
                    lg:text-[10rem]
                  "
                >
                  <span
                    className="
                      block
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-[#ff4f91]
                      via-[#f52f78]
                      to-[#c91567]
                    "
                  >
                    PORT
                  </span>
                </motion.h1>

                {/* FOLIO */}
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    font-black
                    uppercase
                    tracking-[-0.07em]
                    leading-[0.85]
                    text-[4rem]
                    sm:text-[6rem]
                    md:text-[8rem]
                    lg:text-[10rem]
                    text-[#ed2c75]
                  "
                >
                  FOLIO

                  {/* Small flower-like decoration */}
                  <motion.div
                    className="
                      absolute
                      -right-4
                      -top-4
                      sm:-right-8
                      sm:-top-5
                      text-pink-300
                    "
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles
                      size={22}
                      className="sm:w-7 sm:h-7"
                    />
                  </motion.div>
                </motion.h1>

                {/* TAGLINE */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.1,
                    duration: 0.8,
                  }}
                  className="
                    mt-3
                    text-[10px]
                    sm:text-xs
                    italic
                    text-pink-100/40
                  "
                >
                  Software Developer · UI/UX Designer
                </motion.p>
              </div>
            </div>
          </div>

          {/* LOADING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
            className="
              absolute
              bottom-12
              sm:bottom-14
              left-0
              right-0
              z-30
            "
          >
            {!finished ? (
              <LoadingProgress
                onComplete={handleComplete}
              />
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[10px]
                  sm:text-xs
                  tracking-[0.2em]
                  uppercase
                  text-pink-200/50
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="text-pink-400"
                >
                  ✦
                </motion.span>

                Ready
              </motion.div>
            )}
          </motion.div>

          {/* BOTTOM GRADIENT LINE */}
          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1.2,
            }}
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-pink-500/40
              to-transparent
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;