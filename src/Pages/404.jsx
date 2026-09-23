import React from "react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    // In a real app, you would use your router's navigation
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090609] via-[#120811] to-[#1a0b12] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F04470]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D62965]/10 rounded-full blur-[140px]" />
      </div>

      <div className="text-center relative z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <h1
            className="
              text-9xl font-bold mb-4
              bg-gradient-to-r from-[#F58AA7] via-[#F04470] to-[#D62965]
              bg-clip-text text-transparent
              animate-bounce
              drop-shadow-[0_0_25px_rgba(240,68,112,0.25)]
            "
          >
            404
          </h1>

          <div
            className="
              w-24 h-1 mx-auto rounded-full
              bg-gradient-to-r from-[#F04470] to-[#D62965]
              shadow-[0_0_15px_rgba(240,68,112,0.6)]
            "
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#f3dce4] mb-4">
            Oops! Halaman Tidak Ditemukan
          </h2>

          <p className="text-lg text-[#a9929b] max-w-md mx-auto leading-relaxed">
            Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau
            tidak pernah ada.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div
            className="
              w-32 h-32 mx-auto
              bg-gradient-to-br from-[#F04470]/10 to-[#D62965]/10
              border border-[#F04470]/20
              rounded-full
              flex items-center justify-center
              mb-6
              shadow-[0_0_35px_rgba(240,68,112,0.12)]
              backdrop-blur-sm
            "
          >
            <div
              className="
                text-6xl
                drop-shadow-[0_0_12px_rgba(240,68,112,0.35)]
              "
            >
              🔍
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="
              flex items-center gap-2
              px-6 py-3
              bg-[#150b11]
              border border-[#F04470]/20
              text-[#e7cbd4]
              rounded-lg
              hover:bg-[#F04470]/10
              hover:border-[#F04470]/40
              hover:text-[#F58AA7]
              transition-all duration-300
              shadow-[0_8px_25px_rgba(240,68,112,0.08)]
              hover:shadow-[0_8px_30px_rgba(240,68,112,0.18)]
            "
          >
            <ArrowLeft size={20} />
            Kembali
          </button>

          <button
            onClick={handleGoHome}
            className="
              flex items-center gap-2
              px-6 py-3
              bg-gradient-to-r from-[#F04470] to-[#D62965]
              text-white
              rounded-lg
              hover:from-[#f65b82] hover:to-[#e23870]
              transition-all duration-300
              shadow-[0_8px_25px_rgba(240,68,112,0.25)]
              hover:shadow-[0_10px_35px_rgba(240,68,112,0.4)]
              hover:-translate-y-0.5
            "
          >
            <Home size={20} />
            Beranda
          </button>
        </div>
      </div>
    </div>
  );
}