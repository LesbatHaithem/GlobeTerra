import { platypi } from "@/lib/fonts";
import React from "react";
import Link from "next/link";
import Logo from "./Logo"; // Import the new Logo component

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-20 bg-slate-950 ">
            {/* Logo Section */}
            <Link href={"/"}>
                <div className={`flex items-center gap-2 ${platypi.className}`}>
                    {/* Replace WalletMinimal with the custom Logo */}
                    <Logo size={30} />
                    <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center ">
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
                    className="bg-transparent border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                    Launch App
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
