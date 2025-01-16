import {
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
} from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import { getRpcUrl } from "../utils";

export async function sendSolTransaction(
    senderSecretKey: Uint8Array,
    recipientAddress: string,
    amount: number,
    cluster: string
) {
    try {
        const RPC_URL = getRpcUrl(cluster);
        const connection = new Connection(RPC_URL);

        const senderKeypair = Keypair.fromSecretKey(senderSecretKey);
        const recipientPublicKey = new PublicKey(recipientAddress);

        // Create a new transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: senderKeypair.publicKey,
                toPubkey: recipientPublicKey,
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );

        // Sign the transaction and send it
        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [senderKeypair]
        );

        console.log("Transaction successful with signature:", signature);
        return signature;
    } catch (error) {
        console.error("Error sending SOL:", error);
        throw error;
    }
}
