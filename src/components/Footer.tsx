import React from "react";
import Link from "next/link";
import { FaEnvelope, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaGithub, FaLinkedin, FaTiktok, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-neutral-950 text-white pt-20 pb-5 pl-24 px-11">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 ">
        {/* Logo and Description */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <h2 className="text-2xl font-bold">GLOBE TERRA</h2>
          <p className="mt-4 text-gray-400">
            The global platform that connects the world <br />
            and empowers your financial journey!
          </p>

          {/* Styled Email Section */}
          <div className="mt-4 flex items-center gap-3">
            <div className="bg-gray-800 p-2 rounded-full">
              <FaEnvelope size={20} className="text-gray-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              <a
                href="mailto:info@globeterra.com"
                className="text-white text-base hover:text-blue-500"
              >
                info@globeterra.com
              </a>
            </div>
          </div>

          {/* Donations Section */}
          <div className="mt-4 text-gray-400">
            <p>
              Donations:{" "}
              <a
                href="https://solscan.io/account/KBNifF86a3oxQNgzvVRk7ipZRGTwYA61hj3gmRyJqV2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                KBNi..yJqV2
              </a>{" "}
              <span className="text-red-500">♥</span>
            </p>
            <p className="mt-2">
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>{" "}
              -{" "}
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>{" "}
              -{" "}
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </p>
          </div>
        </div>

        {/* Developers */}
        <div className="w-full md:w-1/3">
          <h3 className="font-bold text-lg border-b border-gray-500 inline-block">
            Developers
          </h3>
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
        <div className="w-full md:w-1/3">
          <h3 className="font-bold text-lg border-b border-gray-500 inline-block">
            Learn
          </h3>
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
                How to Buy $GTR
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

      
      

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        Copyright © {new Date().getFullYear()} Globe Terra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
