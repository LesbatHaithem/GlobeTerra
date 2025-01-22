import React from "react";
import Link from "next/link";
import Head from "next/head";

const Learn = () => {
  return (
    <>
      <Head>
        <title>Learn | Globe Terra</title>
        <meta name="description" content="Learn more about Globe Terra and its ecosystem" />
      </Head>
      <main className="min-h-screen  bg-gradient-to-r from-black to-[#33023d] flex flex-col items-center justify-center px-8 pb-20">
        {/* Title Section */}
        <div className="text-center mt-16">
          <h1 className="text-6xl font-bold text-white mb-6">Learn about Globe Terra</h1>
          <p className="text-lg text-gray-300">
            Deepen your knowledge of RL, Globe Terra, and more.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center mt-16 w-full max-w-6xl">
          {/* Left Side: Image */}
          <div className="relative w-full md:w-1/2">
            <img
              src="5437683.jpg" // Replace with your image path
              alt="Learn Image"
              className="w-[80%] rounded-lg shadow-xl"
            />
            {/* Hover Tooltip */}
            <div className="absolute top-0 left-0 bg-slate-300 bg-opacity-60 text-black font-bold text-sm px-4 py-2 rounded-md m-4 shadow-xl backdrop-blur-md border border-slate-500">
              Access exclusive content to <br /> expand your blockchain expertise.
            </div>
          </div>

          {/* Right Side: Text and Button */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 text-center md:text-left h-full flex flex-col justify-between md:gap-24">
            {/* Text Section */}
            <div></div>
            <div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Your Gateway to DQN in Blockchain Knowledge
              </h2>
              <p className="text-gray-300 mb-6">
                Learn about decentralized ecosystems, how Globe Terra works, and
                discover the future of blockchain technology.
              </p>
            </div>
            
            {/* Button */}
            <div>
              <Link href="/learn-resources.pdf" legacyBehavior>
                <a
                  className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black rounded-2xl font-bold hover:scale-105 transition-transform"
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
                  Download Learning Resources
                </a>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Learn;
