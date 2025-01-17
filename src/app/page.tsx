"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-950 to-indigo-950 text-white">
      {/* Section 1 */}
      <section
        ref={sectionRefs[0]}
        className={`pb-24 flex flex-row items-start justify-between mx-32 relative transform transition-all duration-1000 ease-out ${
          visibleSections.includes(0) ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className=" mt-10 z-20">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-white hover:cursor-pointer transition-all duration-500">
              GlobeTerra
            </h1>
            <p className="mt-4 text-lg text-purple-700 transition-all duration-500">
              Revolutionizing Global Financial Connectivity
            </p>
            <p className="mt-4 text-lg text-gray-400">
              Harnessing the power of Deep Q-Networks (DQN) to revolutionize financial decision-making in the blockchain ecosystem.
            </p>
          </div>
          <div className="bg-slate-950 bg-opacity-75 px-4 py-3 rounded-3xl mt-8 flex flex-row justify-between items-center mr-20">
            <h1>Download our Roadmap here</h1>
            <a
              href=""
              className="border border-purple-700 rounded-3xl text-purple-700 px-2 py-2 hover:bg-gradient-to-r from-purple-700 to-black hover:text-white"
            >
              Roadmap
            </a>
          </div>
          <div className="bg-slate-600 bg-opacity-25 border border-slate-700 shadow-lg shadow-slate-950 w-96 h-auto rounded-xl mt-10 flex flex-col">
             <h1 className="text-xl pt-7 px-5">Audited By</h1>
             <div>
              <img src="TradingView.png" alt="" className="h-fit" />
              
             </div>
          </div>
        </div>
        <div className="relative mt-20 w-[80%] max-w-[600px] h-auto aspect-video rounded-lg overflow-hidden z-10 ">
           
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={sectionRefs[1]}
        className={`py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out ${
          visibleSections.includes(1) ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-10">
          Available On
        </h2>
        <div className="flex flex-row justify-between items-center gap-12  mt-10">
          {[
            { name: "MEXC Global", image: "mexc.png" },
            { name: "BitMart", image: "Bitmart.png" },
            { name: "PancakeSwap", image: "Kucoin.png" },
          ].map((platform) => (
            <div
              className="text-center transform transition-transform duration-500 hover:scale-105"
              key={platform.name}
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-68 mx-auto"
              />
              
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={sectionRefs[2]}
        className={`py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out ${
          visibleSections.includes(2) ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Activity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "DEXSCREENER", image: "/images/dexscreener.png" },
            { name: "DEXTOOLS", image: "/images/dextools.png" },
            { name: "CoinMarketCap", image: "/images/coinmarketcap.png" },
          ].map((activity) => (
            <div
              className="text-center transform transition-transform duration-500 hover:scale-105"
              key={activity.name}
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-28 h-28 rounded-lg shadow-md mx-auto"
              />
              <p className="text-xl font-semibold text-white mt-4">
                {activity.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
