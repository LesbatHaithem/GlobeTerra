"use client";
import React, { MouseEventHandler } from "react";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

interface IProps {
    handleClick: (id: number) => void;
    walletId: number;
}
const AppAlertDialog = ({ handleClick, walletId }: IProps) => {
    // const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //     console.log("Button Clicked", event);
    // };
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex gap-2 items-center bg-red-600"
                    >
                        Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure you want to delete all wallets?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your wallets and keys from local storage.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => handleClick(walletId)}
                            className="text-destructive"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default AppAlertDialog;
