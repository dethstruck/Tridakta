import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebaseConfig";

const ManageStock = () => {
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) return;

        const userStockRef = ref(db, `stock/${user?.uid}`)
    });

    return(
        <div className="bg-back2 w-full h-[90vh] overflow-auto flex flex-col py-[1%] px-[4%]">
            <h2 className="mx-auto font-bold text-4xl text-center mb-[3%]">Manage Stock</h2>
            <div id="stock-visualizer" className="border-1 border-back1 w-full h-[80%] mx-auto rounded-xl">

            </div>
        </div>
    )
}

export default ManageStock