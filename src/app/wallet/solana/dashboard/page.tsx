import Dashboard from "@/components/wallets/Dashboard";
import { roboto_mono } from "@/lib/fonts";
import React, { Suspense } from "react";

const WalletDashboard = () => {
    return (
        <Suspense
            fallback={<div className={roboto_mono.className}>Loading...</div>}
        >
            <Dashboard />
        </Suspense>
    );
};

export default WalletDashboard;
