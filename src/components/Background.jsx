import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -80, y: -80 },
    { x: 80, y: -40 },
    { x: -60, y: 80 },
    { x: 70, y: 100 },
  ];

  useEffect(() => {
    let requestId;
    const animate = () => {
      const scrollY = window.scrollY;
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const initialPos = initialPositions[index];
        const xOffset =
          Math.sin(scrollY / 400 + index * 0.8) * 55;
        const yOffset =
          Math.cos(scrollY / 400 + index * 0.8) * 30;
        blob.style.transform = `translate(
          ${initialPos.x + xOffset}px,
          ${initialPos.y + yOffset}px
        )`;
      });
      requestId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #150b11 0%, #0d080c 48%, #090609 100%)",
        }}
      />
      <div
        ref={(ref) => (blobRefs.current[0] = ref)}
        className="
          absolute
          -top-40
          -left-40
          w-[620px]
          h-[620px]
          rounded-full
          bg-[#F04470]/20
          blur-[120px]
        "
      />
      <div
        ref={(ref) => (blobRefs.current[1] = ref)}
        className="
          absolute
          -top-32
          -right-40
          w-[560px]
          h-[560px]
          rounded-full
          bg-[#D62965]/16
          blur-[125px]
        "
      />
      <div
        ref={(ref) => (blobRefs.current[2] = ref)}
        className="
          absolute
          top-[30%]
          -left-48
          w-[560px]
          h-[560px]
          rounded-full
          bg-[#F58AA7]/10
          blur-[135px]
        "
      />
      <div
        ref={(ref) => (blobRefs.current[3] = ref)}
        className="
          absolute
          top-[52%]
          -right-48
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#F04470]/12
          blur-[145px]
        "
      />
      <div
        className="
          absolute
          top-[15%]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#F04470]/[0.045]
          blur-[110px]
        "
      />
      <div
        className="
          absolute
          top-[42%]
          left-[45%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D62965]/[0.045]
          blur-[120px]
        "
      />
      <div
        className="
          absolute
          -bottom-48
          left-[12%]
          w-[650px]
          h-[500px]
          rounded-full
          bg-[#D62965]/[0.10]
          blur-[150px]
        "
      />
      <div
        className="
          absolute
          -bottom-40
          right-[8%]
          w-[500px]
          h-[450px]
          rounded-full
          bg-[#F04470]/[0.07]
          blur-[145px]
        "
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(240,68,112,0.06), transparent 42%)",
        }}
      />
      <div
        className="
          absolute
          top-[25%]
          left-[35%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#F04470]/[0.045]
          blur-[90px]
        "
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,138,167,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.018,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,6,9,0.02), rgba(9,6,9,0.06), rgba(9,6,9,0.12))",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;