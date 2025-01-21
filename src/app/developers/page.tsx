import React from "react";
import Head from "next/head";
import { FaEnvelope, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaGithub, FaLinkedin, FaTiktok, FaReddit } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Developers = () => {
  return (
    <>
      <Head>
        <title>Developers | Globe Terra</title>
        <meta name="description" content="Developer resources for Globe Terra are coming soon." />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-black to-[#33023da8] flex flex-col items-center justify-center px-8 pb-16">
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
          <div className="h-screen w-full flex items-center justify-center">
          <div className="w-[70%] flex flex-col items-center justify-center gap-12 mt-10 rounded-xl bg-black bg-opacity-75 shadow-lg px-10 py-10 border border-yellow-600">
         <h1 className="text-2xl font-bold">Subscribe to our newsletter</h1>
          <div className="flex flex-row items-center justify-between gap-4">
            <input type="email" placeholder="Enter your email" className="border border-yellow-600 rounded-xl px-4 py-2" />
            <button className="border border-yellow-600 rounded-xl px-4 py-2 hover:bg-yellow-600 hover:text-black">Subscribe</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-7 text-xs">
        <h1 className="text-xl text-center font-bold">Our Links : </h1>
        
        <div className="flex justify-center space-x-5">
        <Link href="https://github.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          
          <FaGithub size={25} />
          <h1>Github</h1>
        </Link>
        <Link href="https://twitter.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaXTwitter size={25} />
          <h1>X</h1>

        </Link>
        <Link href="https://telegram.org" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaTelegram size={25} />
          <h1>Telegram</h1>
        </Link>
        <Link href="https://instagram.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaInstagram size={25} />
          <h1>Instagram</h1>
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaLinkedin size={25} />
          <h1>LinkedIn</h1>
        </Link>
        <Link href="https://medium.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaYoutube size={25} />
          <h1>Youtube</h1>
        </Link>
        <Link href="https://reddit.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaReddit size={25} />
          <h1>Reddit</h1>
        </Link>
        <Link href="https://tiktok.com" target="_blank" className="flex flex-col justify-center items-center text-gray-500 hover:text-white">
          <FaTiktok size={25} />
          <h1>Tiktok</h1>
        </Link>
      </div>

      </div>
      </div>
      </div>
          
        </div>
      </main>
    </>
  );
};

export default Developers;
