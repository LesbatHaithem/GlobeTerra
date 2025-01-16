"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const NetworkSwitcher: React.FC = () => {
    const router = useRouter();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const cluster = searchParams.get("cluster");

    const [selectedCluster, setSelectedCluster] = useState<string>(
        (cluster as string) || "devnet"
    );
    useEffect(() => {
        const updateUrl = () => {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set("cluster", selectedCluster);

            const newUrl = `${
                currentUrl.pathname
            }?${currentUrl.searchParams.toString()}`;
            router.push(newUrl);
        };

        updateUrl();
    }, [selectedCluster]);

    console.log({ selectedCluster });
    const handleClusterChange = (value: string) => {
        setSelectedCluster(value);
    };

    return (
        <Select value={selectedCluster} onValueChange={handleClusterChange}>
            <SelectTrigger className="w-[180px]">
                <span>
                    {selectedCluster === "mainnet" ? "Mainnet" : "Devnet"}
                </span>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="devnet">Devnet</SelectItem>
                <SelectItem value="mainnet">Mainnet</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default NetworkSwitcher;
