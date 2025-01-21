import React from "react"
import Link from "next/link";

import Head from "next/head";

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>Whitepaper | Globe Terra</title>
        <meta name="description" content="Globe Terra Whitepaper" />
      </Head>
      <main className="min-h-screen p-8 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Globe Terra Whitepaper</h1>
          <p className="text-lg mb-6">
            Welcome to the Globe Terra Whitepaper! Here, you'll find all the
            details about our mission, ecosystem, and plans for the future.
          </p>
          {/* Add content as required */}
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="mb-4">
            Globe Terra is a decentralized platform designed to revolutionize
            the way people interact with blockchain technology. Our ecosystem
            aims to make blockchain accessible, transparent, and efficient.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Decentralized Financial Tools</li>
            <li>Seamless User Experience</li>
            <li>Community-Driven Development</li>
          </ul>
          <p className="text-lg">
            For more details, please download the full whitepaper below.
          </p>
          <a
            href="/path-to-whitepaper.pdf"
            download
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Download Whitepaper
          </a>
        </div>
      </main>
    </>
  );
};

export default Whitepaper;

