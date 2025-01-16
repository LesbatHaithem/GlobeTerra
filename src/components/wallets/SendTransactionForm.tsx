import React, { useState } from "react";

import { sendSolTransaction } from "@/lib/wallet/sendTransaction";
import { convertToUint8ArrFromBase58 } from "@/lib/utils";
import { filterSecretKey } from "@/lib/wallet/filterSecretKey";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";

const SendTransactionForm = () => {
    const [recipientAddress, setRecipientAddress] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [txSignature, setTxSignature] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const searchParam = useSearchParams();
    const walletAddress = searchParam.get("pubkey") as string;
    const cluster = searchParam.get("cluster") as string;

    const handleSendTransaction = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const filterKey = filterSecretKey(walletAddress);
            console.log({ filterKey });

            if (filterKey) {
                const senderSecretKey = convertToUint8ArrFromBase58(
                    filterKey.privateKey
                );
                console.log({ senderSecretKey });
                const signature = await sendSolTransaction(
                    senderSecretKey,
                    recipientAddress,
                    amount,
                    cluster
                );
                console.log({ signature }, { recipientAddress }, amount);
                setTxSignature(signature);
                toast.success("Transaction Successful!");
            } else {
                throw new Error("No verified secret key.");
            }
        } catch (err) {
            const errMessage =
                (err as { message?: string }).message ||
                "Failed to send transaction. Please check the details and try again.";

            setError(errMessage);

            toast.error(
                "Failed to send transaction. Please check the details and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className=" my-12">
            <CardHeader>
                <h2 className="text-xl font-semibold">Send SOL Transaction</h2>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSendTransaction} className="space-y-4">
                    <div>
                        <Label htmlFor="recipientAddress">
                            Recipient Address
                        </Label>
                        <Input
                            id="recipientAddress"
                            type="text"
                            placeholder="Enter recipient address"
                            value={recipientAddress}
                            onChange={(e) =>
                                setRecipientAddress(e.target.value)
                            }
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="amount">Amount (SOL)</Label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Enter amount of SOL"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            min="0"
                            step="0.0001"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {txSignature && (
                        <p className="text-green-500">
                            Transaction sent!{" "}
                            <Link
                                href={`https://explorer.solana.com/tx/${txSignature}?cluster=${cluster}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                View on Solana Explorer
                            </Link>
                        </p>
                    )}
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    type="submit"
                    onClick={handleSendTransaction}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Transaction"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SendTransactionForm;
