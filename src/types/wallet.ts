export interface IWallet {
    index: number;
    publicKey: string;
    privateKey: string;
}

export interface IWalletKeyPair {
    privateKey: string;
    publicKey: string;
}
