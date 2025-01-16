"use client";
import { copyToClipboard } from "@/lib/utils";
import { Copy, MoveLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import WalletTabs from "./WalletTabs";
import { roboto_mono } from "@/lib/fonts";
import NetworkSwitcher from "./NetworkSwitcher";

export default function Dashboard() {
    const searchParam = useSearchParams();
    const router = useRouter();
    const publicKey = searchParam.get("pubkey");

    return (
        <div className={roboto_mono.className}>
            <div>
                <span
                    className="cursor-pointer font-bold flex hover:underline"
                    onClick={() => router.back()}
                >
                    <MoveLeft />
                    Back
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="inline-block">
                    <h1
                        onClick={() => copyToClipboard(publicKey || "")}
                        className="text-lg truncate text-clip text-nowrap sm:text-3xl md:text-4xl font-bold hover:cursor-pointer tracking-tighter py-9 flex items-center gap-3"
                    >
                        {publicKey?.slice(0, 5)}*****{publicKey?.slice(-5)}
                        <Copy />
                    </h1>
                </div>

                <NetworkSwitcher />
            </div>

            <div>
                <WalletTabs />
            </div>
            <div className="h-[56vh]"></div>
        </div>
    );
}
