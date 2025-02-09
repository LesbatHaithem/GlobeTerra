"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaGithub, FaLinkedin, FaTiktok, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (entry.isIntersecting) {
            // Add section to visibleSections when in view
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            // Remove section from visibleSections when out of view
            setVisibleSections((prev) =>
              prev.filter((sectionIndex) => sectionIndex !== index)
            );
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for when visibility changes
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
  useEffect(() => {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2025-03-01T00:00:00Z").getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        if (countdownElement) {
          countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      } else {
        if (countdownElement) {
          countdownElement.textContent = "Airdrop Started!";
        }
      }
    };
  
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately on mount
    return () => clearInterval(timer);
  }, []);
  

  return (
    <main className="min-h-screen bg-cover text-white bg-gradient-to-r from-black to-[#001a11]">
      {/* Section 1 */}
      <section
  ref={sectionRefs[0]}
  className={`md:pb-24 flex flex-col md:flex-row items-center justify-center md:justify-between relative transform transition-all duration-1000 ease-out ${
    visibleSections.includes(0) ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  <div className="md:mt-10 mt-16 z-20 md:ml-32 w-[90%] md:w-[75%] text-center md:text-left">
    <div>
      <h1 className="text-4xl md:text-7xl font-bold text-white hover:cursor-pointer transition-all duration-500">
        GlobeTerra
      </h1>
      <p className="mt-4 text-lg text-yellow-600 transition-all duration-500">
        Revolutionizing Global Financial Connectivity
      </p>
      <p className="mt-4 text-lg text-gray-400">
        Harnessing the power of Deep Q-Networks (DQN) to revolutionize financial decision-making in the blockchain ecosystem.
      </p>
    </div>
    <div className="bg-slate-950 bg-opacity-75 md:px-4 md:py-3 px-3 py-2 rounded-3xl mt-8 flex flex-row justify-between items-center md:mr-20">
      <h1 className="text-sm md:text-base">Take a look to our Roadmap </h1>
      <a
        href=""
        className="border border-yellow-600 rounded-3xl text-yellow-600 px-2 py-2 transform transition-transform duration-500 hover:bg-yellow-600 hover:text-black text-sm md:text-base"
      >
        Roadmap
      </a>
    </div>
    <div className="mt-10 flex flex-col md:flex-row md:items-start items-center gap-4">
      <h1 className="text-xl md:text-4xl pt-5 md:pt-10">Audited By:</h1>
      <div>
        <img src="TradingView.png" alt="" className="w-40 md:w-60 h-auto transform transition-transform duration-500 hover:scale-105" />
      </div>
    </div>
  </div>

  <div className="flex flex-row justify-center items-start w-full h-full aspect-video rounded-lg pt-10">
    <img 
      src="globeterracoin.png" 
      alt="" 
      className="h-48 md:h-full animate-float" 
      style={{ animation: 'float 3s ease-in-out infinite' }}
    />
  </div>
</section>
       {/* Section 4: Airdrop */}
       <section
  ref={sectionRefs[1]}
  className={`py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out min-h-screen ${
    visibleSections.includes(1) ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  <h2 className="text-3xl md:text-6xl font-bold text-white mb-12 text-center">
    $GTR Airdrop
  </h2>
  <div className="flex flex-col justify-between items-center gap-8 md:gap-12 mt-10 bg-black bg-opacity-55 shadow-lg w-[90%] md:w-[60%] rounded-xl px-6 md:px-10 py-8 md:py-10 transform transition-transform duration-500 hover:scale-105">
    <h1 className="text-xl md:text-2xl font-bold text-center">Claim Your Free $GTR</h1>
    <p className="text-sm md:text-xl font-thin text-center md:w-[70%] text-yellow-200">
      The $GTR airdrop begins on <strong>March 1st</strong>. Join us on Telegram and X to claim your share and be part of the future of financial connectivity.
    </p>

    {/* Countdown Timer */}
    <div className="text-center">
      <h3 className="text-lg md:text-xl text-yellow-600 mb-4">Countdown to Airdrop:</h3>
      <div
        id="countdown"
        className="text-xl md:text-4xl font-bold text-yellow-400 bg-black bg-opacity-70 px-4 py-2 rounded-xl"
      >
        Loading...
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <a
        href="https://telegram.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-yellow-600 rounded-xl text-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-black text-sm md:text-base text-center"
      >
        Join on Telegram
      </a>
      <a
        href="https://x.com/GlobeTerraCoin"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-yellow-600 rounded-xl text-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-black text-sm md:text-base text-center"
      >
        Follow on X
      </a>
    </div>
  </div>
</section>

      

      {/* Section 3 */}
      <section
  ref={sectionRefs[2]}
  className={`py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out min-h-screen ${
    visibleSections.includes(2) ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  <h2 className="text-3xl md:text-6xl font-bold text-white mb-12 text-center">
    FEATURES Of GLOBE TERRA
  </h2>
  <div className="flex flex-col justify-between items-center gap-8 md:gap-12 mt-10 bg-black bg-opacity-75 shadow-lg w-[90%] md:w-[60%] rounded-xl px-6 md:px-10 py-8 md:py-10 transform transition-transform duration-500 hover:scale-105">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-yellow-600">DQN based AI Agent</h1>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-sm md:text-xl font-thin md:w-[50%]">
        An AI agent powered by Deep Q-Networks (DQN) for intelligent decision-making, optimizing actions in real-time to revolutionize blockchain finance and global connectivity.
      </p>
      <img src="aiagent.jpg" alt="" className="w-full md:w-1/2 rounded-xl border border-yellow-600" />
    </div>
  </div>
  <div className="flex flex-col justify-between items-center gap-8 md:gap-12 mt-10 bg-black bg-opacity-75 shadow-lg w-[90%] md:w-[60%] rounded-xl px-6 md:px-10 py-8 md:py-10 transform transition-transform duration-500 hover:scale-105">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-yellow-600">Globe Terra API</h1>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-sm md:text-xl font-thin md:w-[50%]">
        Seamlessly integrate advanced DQN-powered AI into your applications with the Globe Terra API. Enable smarter, faster, and secure solutions for global financial connectivity.
      </p>
      <img src="about.png" alt="Globe Terra API" className="w-full h-52 md:w-1/2 rounded-xl border border-yellow-600" />
    </div>
    <a
      href=""
      className="border border-yellow-600 rounded-xl text-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-black text-sm md:text-base"
    >
      Explore API
    </a>
  </div>
</section>
      {/* Section 4 */}
      <section
  ref={sectionRefs[3]}
  className={`md:h-screen py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out ${
    visibleSections.includes(3) ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 text-center">
    Soon available On
  </h2>
  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-10">
    {[
      { name: "MEXC Global", image: "https://neurashi.com/wp-content/uploads/2023/10/image.png" },
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
          className="w-32 md:w-40 lg:w-64 h-auto mx-auto"
        />
      </div>
    ))}
  </div>
</section>

<section
  ref={sectionRefs[4]}
  className={`h-screen py-16 flex flex-col items-center justify-center p-8 transform transition-all duration-1000 ease-out ${
    visibleSections.includes(4) ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`}
>
  <div className="flex flex-col items-center justify-center gap-8 md:gap-12 mt-10 rounded-xl bg-black bg-opacity-75 shadow-lg w-[90%] md:w-[80%] lg:w-[70%] max-w-screen px-6 sm:px-8 md:px-10 py-8 md:py-10 border border-yellow-600">
    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
      Subscribe to our newsletter
    </h1>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full md:w-[60%]">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 border text-black border-yellow-600 rounded-xl px-4 py-2 text-sm w-full sm:w-auto"
      />
      <button className="border border-yellow-600 rounded-xl px-4 py-2 hover:bg-yellow-600 hover:text-black text-sm md:text-base">
        Subscribe
      </button>
    </div>
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-sm sm:text-base md:text-xl font-bold text-center">Our Links:</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {[
          { href: "https://github.com", icon: <FaGithub size={25} />, name: "Github" },
          { href: "https://twitter.com", icon: <FaXTwitter size={25} />, name: "X" },
          { href: "https://telegram.org", icon: <FaTelegram size={25} />, name: "Telegram" },
          { href: "https://instagram.com", icon: <FaInstagram size={25} />, name: "Instagram" },
          { href: "https://linkedin.com", icon: <FaLinkedin size={25} />, name: "LinkedIn" },
          { href: "https://medium.com", icon: <FaYoutube size={25} />, name: "YouTube" },
          { href: "https://reddit.com", icon: <FaReddit size={25} />, name: "Reddit" },
          { href: "https://tiktok.com", icon: <FaTiktok size={25} />, name: "TikTok" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            className="flex flex-col justify-center items-center text-gray-500 hover:text-white"
          >
            {link.icon}
            <h1 className="text-xs sm:text-sm">{link.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

           

    </main>
  );
}
