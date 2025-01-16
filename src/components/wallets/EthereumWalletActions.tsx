"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputGrid from "@/components/common/InputGrid";
import { roboto_mono } from "@/lib/fonts";
import {
    generateMnemonic,
    mnemonicToSeed,
    mnemonicToSeedSync,
    validateMnemonic,
} from "bip39";
import { toast } from "sonner";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy, Eye, EyeOff, Grid2X2, List, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AppAlertDialog from "@/components/common/AppAlertDialog";
import { HDNodeWallet } from "ethers";
import { Wallet } from "ethers";
import { getLocalWallet } from "@/lib/utils";

const EthereumWalletActions = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [mnemonicArr, setMnemonicArr] = useState<string[]>([]);
    const [isGridView, setIsGridView] = useState<boolean>(false);
    const [walletIdx, setWalletIdx] = useState<number>(0);
    const [visiblePrivateKeys, setVisiblePrivateKeys] = useState<boolean[]>([]);
    const [walletList, setWalletList] = useState<
        {
            privateKey: string;
            publicKey: string;
        }[]
    >([]);

    const handleSubmit = (seedValue: string[]) => {
        const seedPhrase = seedValue.join(" ");
        if (!validateMnemonic(seedPhrase)) {
            toast.error("Invalid recovery phrase, Please try again.");
            return;
        }

        // console.log({ seedPhrase });
        handleGenerateWallet(seedPhrase);
    };

    const triggerInputGridForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const handleGenerateWallet = (importedPhrase?: string) => {
        const parsedData = getLocalWallet();

        console.log({ parsedData });
        const mnemonic =
            mnemonicArr.length > 0
                ? mnemonicArr.join(" ")
                : importedPhrase
                ? importedPhrase
                : generateMnemonic();
        // console.log({ mnemonic });
        const phraseArr = mnemonic.split(" ");
        setMnemonicArr(phraseArr);
        const seed = mnemonicToSeedSync(mnemonic);
        // console.log({ seed });

        //Derivation path
        const path = `m/44'/60'/${walletIdx}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const privateKey = hdNode.derivePath(path).privateKey;
        const publicKeyAddress = new Wallet(privateKey);
        const publicKey = publicKeyAddress.address;

        console.log({ publicKey }, { privateKey });

        setWalletList((prev) => [
            ...prev,
            {
                privateKey: privateKey,
                publicKey: publicKey,
            },
        ]);
        setVisiblePrivateKeys((prev) => [...prev, false]);
        toast.success("Wallet generated successfully!");

        setWalletIdx((prev) => prev + 1);
        const storeWallet = {
            wallets: {
                ...parsedData?.wallets,
                ethereum: {
                    ...parsedData?.wallets?.ethereum,
                    walletIdx: walletIdx,
                    mnemonicArr: phraseArr,
                    walletList: [...walletList, { publicKey, privateKey }],
                },
            },
        };
        localStorage.setItem("wallets", JSON.stringify(storeWallet));
    };

    const copyToClipboard = (secretPhrase: string) => {
        navigator.clipboard.writeText(secretPhrase);
        toast.success("Copied to clipboard!");
    };

    const handleDeleteWallet = (itemId: number) => {
        console.log("Delete Id", itemId);

        const tempWallets = walletList;

        const deletedWallet = tempWallets.splice(itemId, 1);
        console.log({ deletedWallet });

        console.log({ tempWallets });
        setWalletList([...tempWallets]);

        const storedWallet = getLocalWallet();
        console.log({ storedWallet });
        const storeWallet = {
            wallets: {
                ...storedWallet?.wallets,
                ethereum: {
                    walletIdx: walletIdx,
                    mnemonicArr: [...mnemonicArr],
                    walletList: [...tempWallets],
                },
            },
        };
        localStorage.setItem("wallets", JSON.stringify(storeWallet));
    };
    console.log({ walletList });

    const handleDeleteAllWallets = () => {
        const storedWallet = getLocalWallet();

        if (storedWallet?.wallets?.ethereum) {
            const storeWallet = {
                wallets: {
                    ...storedWallet.wallets,
                    ethereum: {
                        walletIdx: 0,
                        mnemonicArr: [],
                        walletList: [],
                    },
                },
            };
            localStorage.setItem("wallets", JSON.stringify(storeWallet));
            setWalletList([]);
            setMnemonicArr([]);
            setWalletIdx(0);
        }
    };

    const togglePrivateKeyVisibility = (index: number) => {
        setVisiblePrivateKeys(
            visiblePrivateKeys.map((visible, i) =>
                i === index ? !visible : visible
            )
        );
    };
    useEffect(() => {
        const storedWallet = getLocalWallet();

        if (storedWallet?.wallets?.ethereum) {
            const walletList = storedWallet.wallets.ethereum.walletList;
            const mnemonicArr = storedWallet.wallets.ethereum.mnemonicArr;
            const walletIdx = storedWallet.wallets.ethereum.walletIdx;

            setWalletList(walletList);
            setMnemonicArr(mnemonicArr);
            setWalletIdx(walletIdx);
            setVisiblePrivateKeys(Array(walletList.length).fill(false));
        }
    }, []);
    return (
        <div
            className={` min-h-[70vh] pt-16 pb-2 mb-16 ${roboto_mono.className}`}
        >
            {walletList.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <div>
                        <h1 className="tracking-tighter text-4xl md:text-5xl font-black ">
                            Confidential Recovery Phrase
                        </h1>
                        <p className="text-primary/80 font-semibold text-lg md:text-xl py-3">
                            Store these words securely to protect your wallet
                        </p>
                    </div>

                    <div className="flex flex-col  gap-4 ">
                        <div className=" rounded border">
                            <InputGrid
                                onSubmit={handleSubmit}
                                inputText="Import Wallet"
                                formRef={formRef}
                            />
                        </div>
                        <p className="text-sm  text-primary/80 pb-3">
                            {`Note: To import an existing wallet, please enter
                            your seed phrase above. If you'd like to create a
                            new wallet, click on 'Generate Wallet'`}
                        </p>
                        <div className="flex justify-evenly items-center  gap-6">
                            <Button
                                size={"lg"}
                                className="w-full bg-slate-400"
                                onClick={() => triggerInputGridForm()}
                            >
                                Import Wallet
                            </Button>
                            <Button
                                size={"lg"}
                                onClick={() => handleGenerateWallet()}
                                className="w-full"
                            >
                                Generate Wallet
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}

            {mnemonicArr.length > 0 && walletList.length > 0 && (
                <div>
                    {/* Showing Mnemonic phrases */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            ease: easeInOut,
                            duration: 0.3,
                        }}
                        className={roboto_mono.className}
                    >
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-3xl md:text-4xl font-bold  tracking-tighter hover:no-underline">
                                    Your Secret Phrase
                                </AccordionTrigger>

                                <AccordionContent
                                    onClick={() =>
                                        copyToClipboard(mnemonicArr.join(" "))
                                    }
                                >
                                    <motion.div
                                        transition={{
                                            ease: easeInOut,
                                            duration: 0.3,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: -20,
                                        }}
                                        className="hover:cursor-pointer"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 dark:bg-slate-900 p-6 rounded">
                                            {mnemonicArr.map((item) => (
                                                <Fragment key={item}>
                                                    <p className="text-red-500 font-semibold border p-3 flex items-center justify-center rounded">
                                                        {item}
                                                    </p>
                                                </Fragment>
                                            ))}
                                        </div>

                                        <div className="text-sm md:text-base text-primary/50 flex w-full  dark:bg-slate-900 p-6 gap-3 dark:hover:text-slate-100 ">
                                            <Copy /> Click Anywhere To Copy
                                        </div>
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                    {/* Showing Public and Private Keys */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            ease: easeInOut,
                            duration: 0.3,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter py-9">
                                Wallet Portfolio
                            </h1>
                            <div className="flex gap-3">
                                {walletList.length > 1 && (
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setIsGridView(!isGridView)
                                        }
                                        className="hidden md:block"
                                    >
                                        {isGridView ? <Grid2X2 /> : <List />}
                                    </Button>
                                )}
                                <Button
                                    onClick={() => handleGenerateWallet()}
                                    className=""
                                >
                                    Add
                                </Button>
                                <AppAlertDialog
                                    walletId={-1}
                                    handleClick={handleDeleteAllWallets}
                                />
                            </div>
                        </div>

                        <div
                            className={`grid gap-6 grid-cols-1 col-span-1  ${
                                isGridView
                                    ? "md:grid-cols-2 lg:grid-cols-3"
                                    : ""
                            }`}
                        >
                            {walletList.length > 0 &&
                                walletList.map((wallet, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            ease: easeInOut,
                                            duration: 0.3,
                                        }}
                                        className="flex flex-col rounded-2xl border border-primary/10"
                                    >
                                        <div className="flex flex-col  px-8 py-6">
                                            <div className="flex justify-between py-3">
                                                <h3 className="font-bold text-2xl md:text-3xl tracking-tighter ">
                                                    Wallet {i + 1}
                                                </h3>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            className="flex gap-2 items-center"
                                                        >
                                                            <Trash className="size-4 text-destructive" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>
                                                                Are you sure you
                                                                want to delete
                                                                this wallet?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action
                                                                cannot be
                                                                undone. This
                                                                will permanently
                                                                delete your
                                                                wallets and keys
                                                                from local
                                                                storage.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                Cancel
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() =>
                                                                    handleDeleteWallet(
                                                                        i
                                                                    )
                                                                }
                                                                className="text-destructive "
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>

                                            <div className="flex flex-col  gap-8 px-8 py-4 rounded-2xl bg-secondary/50">
                                                <div
                                                    className="flex flex-col w-full gap-2"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            wallet.publicKey
                                                        )
                                                    }
                                                >
                                                    <span className="text-lg md:text-xl font-bold tracking-tighter">
                                                        Public Key
                                                    </span>
                                                    <p className="text-primary/80 font-medium cursor-pointer hover:text-primary transition-all duration-300 truncate">
                                                        {wallet.publicKey}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col w-full gap-2">
                                                    <span className="text-lg md:text-xl font-bold tracking-tighter">
                                                        Private Key
                                                    </span>
                                                    <div className="flex justify-between w-full items-center gap-2">
                                                        <p
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    wallet.privateKey
                                                                )
                                                            }
                                                            className="text-primary/80 font-medium cursor-pointer hover:text-primary transition-all duration-300 truncate"
                                                        >
                                                            {visiblePrivateKeys[
                                                                i
                                                            ]
                                                                ? wallet.privateKey
                                                                : "•".repeat(
                                                                      wallet
                                                                          .privateKey
                                                                          .length
                                                                  )}
                                                        </p>
                                                        <Button
                                                            variant="ghost"
                                                            onClick={() =>
                                                                togglePrivateKeyVisibility(
                                                                    i
                                                                )
                                                            }
                                                        >
                                                            {visiblePrivateKeys[
                                                                i
                                                            ] ? (
                                                                <EyeOff className="size-4" />
                                                            ) : (
                                                                <Eye className="size-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default EthereumWalletActions;
