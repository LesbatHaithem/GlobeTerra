import { roboto_mono } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className={`max-w-7xl mx-auto border-t px-4 ${roboto_mono.className}`}>
            <div className="flex justify-between py-8 items-center">
                <p className="text-primary tracking-tight">
                    <Link
                        href={"https://x.com"}
                        className="font-bold hover:text-blue-700"
                    >
                        {" "} 
                    </Link>
                </p>
                
                <div className="flex gap-4">
                    <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-blue-500">
                        <FaTwitter size={24} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-pink-500">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-blue-700">
                        <FaFacebook size={24} />
                    </Link>
                    <Link href="https://youtube.com" target="_blank" className="text-gray-600 hover:text-red-600">
                        <FaYoutube size={24} />
                    </Link>
                    <Link href="https://telegram.org" target="_blank" className="text-gray-600 hover:text-blue-400">
                        <FaTelegram size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Footer;
