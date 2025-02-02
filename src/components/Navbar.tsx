"use client";

import { platypi } from "@/lib/fonts";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo"; // Import the new Logo component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black to-[#001a11] text-white shadow-lg">
      {/* Desktop and Logo Section */}
      <div className="flex justify-between items-center px-6 py-4 md:px-20">
        <Link href="/" className="flex items-center">
          <img src="initials.png" alt="" className=" h-14 w-16"/>
          <span
            className={`text-2xl text-white font-extrabold text-primary ${platypi.className}`}
          >
            GlobeTerra
          </span>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="block md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/developers" className="hover:text-gray-300">
            Developers
          </Link>
          <Link href="/learn" className="hover:text-gray-300">
            Learn
          </Link>
          <Link href="/whitepaper" className="hover:text-gray-300">
            Whitepaper
          </Link>
          <Link
            href="/launch"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full text-black font-semibold"
          >
            Launch App
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-gradient-to-r from-black to-[#33023d] py-6">
          <Link
            href="/developers"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Developers
          </Link>
          <Link
            href="/learn"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </Link>
          <Link
            href="/whitepaper"
            className="text-lg font-medium hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Whitepaper
          </Link>
          <Link
            href="/launch"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full text-black font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
