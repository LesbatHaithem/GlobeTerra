import React, { useEffect, useState } from "react";
import { ParsedTransactionWithMeta } from "@solana/web3.js";

import { getTransactionHistory } from "@/lib/wallet/getTransactionHistory";
import { cn, copyToClipboard, formattedTime } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { roboto_mono } from "@/lib/fonts";
import { Copy } from "lucide-react";

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState<
        ParsedTransactionWithMeta[]
    >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const searchParam = useSearchParams();
    const walletAddress = searchParam.get("pubkey") as string;
    const cluster = searchParam.get("cluster") as string;
    console.log({ searchParam, cluster });

    useEffect(() => {
        async function fetchHistory() {
            setLoading(true);
            const history = await getTransactionHistory(walletAddress, cluster);
            setTransactions(history);
            setLoading(false);
        }

        fetchHistory();
    }, [walletAddress, cluster]);

    return (
        <div className={`p-6  rounded-lg shadow-lg ${roboto_mono.className}`}>
            {/* <h2 className="text-2xl font-semibold mb-6">Transaction History</h2> */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table className="dark:text-white ">
                    {transactions.length > 0 && (
                        <TableCaption>
                            A list of your latest transactions.
                        </TableCaption>
                    )}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] ">
                                Signature
                            </TableHead>
                            <TableHead className="w-[100px]">Block</TableHead>
                            <TableHead className="w-[110px]">Time</TableHead>
                            <TableHead className="w-[100px]">By</TableHead>
                            <TableHead className="w-[100px]">
                                Value (SOL)
                            </TableHead>
                            <TableHead className="w-[100px]">
                                Fee (SOL)
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length > 0 ? (
                            transactions.map((tx, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <Link
                                            href={`https://explorer.solana.com/tx/${tx.transaction.signatures[0]}?cluster=${cluster}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {tx.transaction.signatures[0].slice(
                                                0,
                                                20
                                            )}
                                            ...
                                        </Link>
                                    </TableCell>
                                    <TableCell className="">
                                        {tx.slot}
                                    </TableCell>
                                    <TableCell className="">
                                        {/* {tx.blockTime
                                            ? new Date(
                                                  tx.blockTime * 1000
                                              ).toLocaleDateString()
                                            : "N/A"} */}
                                        {tx.blockTime
                                            ? formattedTime(tx.blockTime * 1000)
                                            : formattedTime(new Date())}
                                    </TableCell>

                                    <TableCell className="">
                                        <div
                                            className="flex items-center hover:cursor-pointer"
                                            onClick={() =>
                                                copyToClipboard(
                                                    tx.transaction.message.accountKeys[0].pubkey.toString()
                                                )
                                            }
                                        >
                                            {tx.transaction.message.accountKeys[0].pubkey
                                                .toString()
                                                .slice(0, 12)}
                                            ...
                                            <Copy size={12} />
                                        </div>
                                    </TableCell>
                                    <TableCell className="">
                                        {tx.meta?.postBalances &&
                                            tx.meta?.preBalances &&
                                            (tx.meta?.preBalances[0] -
                                                tx.meta?.postBalances[0]) /
                                                1e9}{" "}
                                        SOL
                                    </TableCell>
                                    <TableCell className="">
                                        {(tx.meta && tx.meta?.fee / 1e9) || 0}{" "}
                                        SOL
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    className="py-2 px-4 border text-center"
                                >
                                    No transactions found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default TransactionHistory;
