import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Balance from "./Balance";
import TransactionHistory from "./Transactions";
import { roboto_mono } from "@/lib/fonts";
import SendTransactionForm from "./SendTransactionForm";

const WalletTabs = () => {
    const [activeTab, setActiveTab] = useState("balance");

    return (
        <div className={roboto_mono.className}>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="balance">Balance</TabsTrigger>
                    <TabsTrigger value="transaction-history">
                        Transaction History
                    </TabsTrigger>
                    <TabsTrigger value="send">Send</TabsTrigger>
                </TabsList>

                <TabsContent value="balance">
                    <div className="p-2">
                        <Balance />
                    </div>
                </TabsContent>

                <TabsContent value="transaction-history">
                    <TransactionHistory />
                </TabsContent>

                <TabsContent value="send">
                    <SendTransactionForm />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default WalletTabs;
