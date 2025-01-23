import React from "react";
import Link from "next/link";
import Head from "next/head";

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>Whitepaper | Globe Terra</title>
        <meta name="description" content="Globe Terra Whitepaper" />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-black to-[#33023d] flex flex-col items-center justify-center px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Last Version</h1>
          <p className="text-lg text-gray-300">Summer 2024</p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center mt-10 w-full max-w-6xl my-20">
          {/* Left Side: Image */}
          <div className="relative w-full md:w-1/2">
          {/*  <video 
            src="background.mp4" 
            autoPlay 
            loop 
            muted  
            playsInline 
            className="w-[90%]"
            ></video> */}
            <img src="32432.jpg" alt=""  className="w-[90%] rounded-lg"/>
            {/* Hover Tooltip */}
            <div className="absolute top-0 right-0 bg-slate-300 bg-opacity-55 text-black font-bold text-m px-4 py-2 rounded-md m-4 shadow-xl backdrop-blur-l border border-slate-500">
              You can download <br /> the newest version of <br /> Globe Terra.
            </div>
          </div>

          {/* Right Side: Text and Button */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 text-center md:text-left h-full flex flex-col justify-between  md:gap-24">
          
            <div> 
                <h1>...</h1>

            </div>
            <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Globe Terra Whitepaper
            </h2>
            <p className="text-gray-300 mb-6">
              Explore the vision, mission, and technical details of the Globe
              Terra ecosystem in our comprehensive whitepaper.
            </p>
            <Link href="/whitepaper.pdf" legacyBehavior>
  <a
    className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black rounded-2xl font-bold hover:scale-105"
    target="_blank"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m10.5 0V19.5A2.25 2.25 0 0118 21.75H6a2.25 2.25 0 01-2.25-2.25V9m14.25 0H5.25"
      />
    </svg>
    Download Whitepaper
  </a>
</Link>

          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Whitepaper;
