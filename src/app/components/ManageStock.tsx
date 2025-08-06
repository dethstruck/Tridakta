"use client"

import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebaseConfig";
import StockBar from "./StockBar";

type FirebaseStockEntry = {
    Color: string;
    ColorName: string;
    TypeFilament: string;
    Value: number;
}

type StockEntry = FirebaseStockEntry & {
    key: string;
}

const ManageStock = () => {
    const [stockEntries, setStockEntries] = useState<StockEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            setIsLoading(false);
            return;
        };

        const userStockRef = ref(db, `stock/${user.uid}`);

        const unsubscribe = onValue(userStockRef, (snapshot) => {
            const data = snapshot.val();


            if (data) {
                const entries: StockEntry[] = Object.entries(data).map(([key, value]) => ({
                    key: key,
                    ...(value as FirebaseStockEntry),
                }));
                setStockEntries(entries);
            } else {
                setStockEntries([]);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);


    if (isLoading) {
        return <div className="bg-back2 w-full h-[90vh] flex justify-center items-center"><p>Loading stock entries...</p></div>;
    }


    return(
        <div className="bg-back2 w-full h-[90vh] overflow-auto flex flex-col py-[1%] px-[4%]">
            <h2 className="mx-auto font-bold text-4xl text-center mb-[3%]">Manage Stock</h2>
            {stockEntries.length > 0 ? (
                <div id="stock-visualizer" className="w-full h-auto min-h-[80%] mx-auto rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stockEntries.map(({key, Color, ColorName, TypeFilament, Value }) => (
                        <div key={key} className="h-[40%] p-4 border border-line rounded-lg bg-back1 shadow-md flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-xl">{ColorName}</h3>
                                <span className="text-sm px-2 py-1 bg-primary/20 text-primary rounded-full">{TypeFilament}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Color:</span>
                                <div style={{ backgroundColor: Color }} className="w-6 h-6 rounded-full border border-line"></div>
                                <span>{Color}</span>
                            </div>
                            <div>
                                <p className="text-sm mb-1"><strong>Weight Remaining:</strong> {Value}g / 1000g</p>
                                <StockBar value={Value} total={1000} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center mt-8">No stock entries found. Add some filament to see it here.</p>
            )}
        </div>
    )
}

export default ManageStock