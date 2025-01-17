import { platypi } from "@/lib/fonts";
import React from "react";
import Link from "next/link";
import Logo from "./Logo"; // Import the new Logo component

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-20 bg-gradient-to-r from-slate-950 to-indigo-950">
            {/* Logo Section */}
            <Link href={"/"}>
                <div className={`flex items-center gap-2 ${platypi.className}`}>
                    <Logo size={30} />
                    <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
                        GlobeTerra
                    </span>
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8 text-white">
                <Link href="/developers" className="hover:text-gray-300">
                    Developers
                </Link>
                <Link href="/learn" className="hover:text-gray-300">
                    Learn
                </Link>
                <Link href="/whitepaper" className="hover:text-gray-300">
                    Whitepaper
                </Link>

                {/* Call-to-Action Button */}
                <Link
                    href="/launch"
                    className="relative overflow-hidden px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out group"
                >
                    {/* Uncomment one of the following background state options */}

                    {/* Jet Black to Electric Blue Option */}
                    {/* 
                    <span className="absolute inset-0 bg-[#1A1A1A] group-hover:bg-[#00BFFF] transition-all duration-500 ease-in-out rounded-full"></span>
                    */}

                    {/* Charcoal Purple to Gold Yellow Option */}
                    <span className="absolute inset-0 bg-[#3B2E5A] group-hover:bg-[#FFC107] transition-all duration-500 ease-in-out rounded-full"></span>

                    {/* Gunmetal Gray to Soft Pink Option */}
                    {/* 
                    <span className="absolute inset-0 bg-[#2F343F] group-hover:bg-[#FF6F91] transition-all duration-500 ease-in-out rounded-full"></span>
                    */}

                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm opacity-70 rounded-full"></span>

                    {/* Text */}
                    <span className="relative z-10 group-hover:text-black transition-all duration-500">
                        Launch App
                    </span>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-full opacity-70 animate-loop-shimmer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-md"></div>
                    </div>

                    {/* Glowing Edge */}
                    <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-current group-hover:shadow-[0_0_25px_8px_rgba(0,191,255,0.8)] transition-all duration-500 animate-loop-glow"></div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
