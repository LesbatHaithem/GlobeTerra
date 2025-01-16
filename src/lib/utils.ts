import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import bs58 from "bs58";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getLocalWallet = () => {
    const storage = localStorage.getItem("wallets");

    const parsedStorage = storage ? JSON.parse(storage) : null;

    return parsedStorage;
};

export const copyToClipboard = (secretPhrase: string) => {
    navigator.clipboard.writeText(secretPhrase);
    toast.success("Copied to clipboard!");
};

export const convertToUint8ArrFromBase58 = (base58String: string) => {
    return bs58.decode(base58String);
};

export const getRpcUrl = (cluster: string): string => {
    if (cluster === "mainnet") {
        // Hard-coded URL for the Solana mainnet
        return "https://api.mainnet-beta.solana.com";
    } else {
        // Hard-coded URL for the Solana devnet
        return "https://api.devnet.solana.com";
    }
};

// export const getRpcUrl = (cluster: string): string => {
//     if (cluster === "mainnet") {
//         return process.env.NEXT_PUBLIC_MAINNET_RPC_URL || "";
//     } else {
//         return process.env.NEXT_PUBLIC_DEVNET_RPC_URL || "";
//     }
// };

export function formattedTime(timestamp: Date | number): string {
    const now = new Date().getTime();
    const elapsed = now - new Date(timestamp).getTime();

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximation of 30 days per month
    const years = Math.floor(days / 365); // Approximation of 365 days per year

    if (years > 0) {
        return `${years} year${years !== 1 ? "s" : ""} ago`;
    } else if (months > 0) {
        return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else if (days > 0) {
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else {
        return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
}
