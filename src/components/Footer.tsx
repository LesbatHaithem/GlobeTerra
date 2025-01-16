import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaTelegram, FaGithub, FaLinkedin, FaTiktok, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-neutral-950 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold">GLOBE TERRA</h2>
          <p className="mt-4 text-gray-400">
            The global platform that connects the world <br />
             and empowers your financial journey!
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-gray-400">📧 Email:</span>
            <a href="mailto:info@globeterra.com" className="text-gray-300 hover:text-blue-500">
              info@globeterra.com
            </a>
          </div>
        </div>

        {/* Links Section */}
        
          {/* Developers */}
          <div>
            <h3 className="font-bold text-lg border-b border-gray-500">Developers</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>
                <Link href="/docs" className="hover:text-white">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/audits" className="hover:text-white">
                  Audits
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-bold text-lg border-b border-gray-500">Learn</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>
                <Link href="/introduction" className="hover:text-white">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="hover:text-white">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white">
                  Road Map
                </Link>
              </li>
              <li>
                <Link href="/tokenomics" className="hover:text-white">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy" className="hover:text-white">
                  How to Buy $GLOBE
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-white">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaGithub size={24} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://telegram.org" target="_blank" className="text-gray-500 hover:text-white">
          <FaTelegram size={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://medium.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaYoutube size={24} />
        </Link>
        <Link href="https://reddit.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaReddit size={24} />
        </Link>
        <Link href="https://tiktok.com" target="_blank" className="text-gray-500 hover:text-white">
          <FaTiktok size={24} />
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        Copyright © {new Date().getFullYear()} Globe Terra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
