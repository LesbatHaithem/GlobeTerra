"use client";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Section 1: Coming Soon Title and Video */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        {/* Title and Subtitle Container */}
        <div className="text-center mb-8 z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white hover:cursor-pointer transition-colors duration-300">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-gray-300 hover:text-blue-300 transition-colors duration-300">
            Revolutionizing Global Financial Connectivity
          </p>
        </div>

        {/* Video (Smaller and Fully Visible) */}
        <div className="relative w-[70%] max-w-[600px] h-auto aspect-video rounded-lg overflow-hidden z-10">
          <video
            className="w-full h-full object-contain" // Changed to object-contain
            src="https://neurashi.com/wp-content/uploads/2023/10/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          />
        </div>
      </section>

      {/* Section 2: Available On */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Available On
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-xl font-semibold text-white">MEXC Global</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white">BitMart</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white">PancakeSwap</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white">GlobeTerra</p>
          </div>
        </div>
      </section>

      {/* Section 3: Activity */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Activity
        </h2>
        {/* Centered Grid Container */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Adjusted grid layout */}
            <div className="text-center">
              <p className="text-xl font-semibold text-white">DEXSCREENER</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-white">DEXTOOLS</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-white">CoinMarketCap</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}