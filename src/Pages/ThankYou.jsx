import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        bg-gradient-to-br
        from-[#090609]
        via-[#120811]
        to-[#1a0b12]
        relative
        overflow-hidden
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/4
            left-1/4
            w-72
            h-72
            bg-[#F04470]/10
            rounded-full
            blur-[120px]
          "
        />
        <div
          className="
            absolute
            bottom-1/4
            right-1/4
            w-80
            h-80
            bg-[#D62965]/10
            rounded-full
            blur-[140px]
          "
        />
      </div>
      <div className="text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div
            className="
              p-4
              rounded-full
              bg-[#F04470]/10
              border
              border-[#F04470]/20
              shadow-[0_0_35px_rgba(240,68,112,0.15)]
            "
          >
            <CheckCircle
              className="
                w-16
                h-16
                text-[#F04470]
                drop-shadow-[0_0_12px_rgba(240,68,112,0.5)]
              "
            />
          </div>
        </div>
        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            mb-4
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-[#F58AA7]
            via-[#F04470]
            to-[#D62965]
          "
        >
          Thank You!
        </h1>
        <p
          className="
            text-[#a9929b]
            text-lg
            mb-8
            max-w-xl
            mx-auto
            leading-relaxed
          "
        >
          Your message has been received. I'll get back to you as soon as
          possible.
        </p>
        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-3
            bg-gradient-to-r
            from-[#F04470]
            to-[#D62965]
            text-white
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_10px_35px_rgba(240,68,112,0.35)]
            active:scale-[0.98]
          "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;