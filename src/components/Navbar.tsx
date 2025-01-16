import { platypi } from "@/lib/fonts";
import React from "react";
import Link from "next/link";
import Logo from "./Logo"; // Import the new Logo component

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-20 bg-slate-950">
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
                    {/* Glassy Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-md rounded-full"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm rounded-full"></span>
                    
                    {/* Text */}
                    <span className="relative z-10">Launch App</span>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-full opacity-100 animate-loop-shimmer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-md"></div>
                    </div>

                    {/* Glowing Edge */}
                    <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white group-hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.9)] transition-all duration-500 animate-loop-glow"></div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
