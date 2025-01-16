import { IWalletKeyPair } from "@/types/wallet";
import { getLocalWallet } from "../utils";

export const filterSecretKey = (publicKey: string): IWalletKeyPair | null => {
    const localWallet = getLocalWallet();

    console.log({ localWallet });

    if (localWallet) {
        const keypair = localWallet.wallets.solana.walletList.filter(
            (wallet: IWalletKeyPair) => {
                if (wallet.publicKey.includes(publicKey)) {
                    return wallet;
                }
            }
        );

        return keypair[0];
    }

    return null;
};
