import { getSolanaBalance } from "@/lib/wallet/getBalance";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Balance = () => {
    const [balance, setBalance] = useState<number | null>(null);
    const searchParam = useSearchParams();
    const walletAddress = searchParam.get("pubkey") as string;
    const cluster = searchParam.get("cluster") as string;

    console.log({ searchParam });

    useEffect(() => {
        async function fetchBalance() {
            try {
                const balance = await getSolanaBalance(walletAddress, cluster);

                console.log({ balance });
                setBalance(balance);
            } catch (error) {
                setBalance(0);
                console.log("Fetching Balance : ", error);
            }
        }

        fetchBalance();
    }, [walletAddress, cluster]);

    return (
        <div className=" font-extrabold text-4xl md:text-6xl  tracking-tighter my-8">
            {balance !== null ? <p>{balance} SOL</p> : <p>Loading...</p>}
        </div>
    );
};

export default Balance;
