import React from "react";
import Head from "next/head";
import {  FaInstagram, FaYoutube, FaTelegram, FaGithub, FaLinkedin, FaTiktok, FaReddit } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Developers = () => {
  return (
    <>
      <Head>
        <title>Developers | Globe Terra</title>
        <meta name="description" content="Developer resources for Globe Terra are coming soon." />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-black to-[#33023d] flex flex-col items-center justify-center px-8 pb-16">
        {/* Title Section */}
        <div className="text-center mt-16">
          <h1 className="text-6xl font-bold text-white mb-6">Developers</h1>
          <p className="text-lg text-gray-300">
            Tools and APIs for developers are currently under development.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center mt-16 w-full max-w-4xl text-center">
          {/* Message */}
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">
              API Coming Soon
            </h2>
            <p className="text-gray-300 mb-6">
              Our API is under development to provide developers with robust
              tools to integrate Globe Terra into their projects. Stay tuned for
              updates!
            </p>
            <p className="text-gray-400 italic">
              Check back later or follow us on social media for announcements.
            </p>
          </div>

          {/* Placeholder Icon */}
  


  <div className="flex flex-col items-center justify-center gap-12 mt-20 rounded-xl bg-black bg-opacity-75 shadow-lg md:w-[90%] lg:w-[70%] max-w-screen px-6 sm:px-8 md:px-10 py-10 border border-yellow-600">
    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white">
      Subscribe to our newsletter
    </h1>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 border border-yellow-600 rounded-xl px-4 py-2 text-sm w-full sm:w-auto"
      />
      <button className="border border-yellow-600 rounded-xl px-4 py-2 hover:bg-yellow-600 hover:text-black">
        Subscribe
      </button>
    </div>
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-sm sm:text-base md:text-xl font-bold text-center">Our Links:</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
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

        </div>

      </main>
    </>
  );
};

export default Developers;
