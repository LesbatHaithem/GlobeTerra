import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WalletManager = () => {
    return (
        <main className="min-h-[70vh] flex flex-col items-center justify-center">
            <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: easeInOut,
                }}
            >
                <h1 className="tracking-tighter text-4xl md:text-5xl font-black">
                    Solana Always & Forever
                </h1>
                <p className="text-lg">
                    Click on Solana to get started.
                </p>

                <Link href="/wallet/solana">
                    <Button size="lg" className="mt-4">
                        Solana
                    </Button>
                </Link>
            </motion.div>
        </main>
    );
};

export default WalletManager;
