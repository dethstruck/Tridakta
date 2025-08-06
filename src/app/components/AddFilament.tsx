"use client";

import { useState } from "react";
import { getAuth } from "firebase/auth";
import {ref, push} from 'firebase/database';
import {db} from "../lib/firebaseConfig";

const AddFilament = () => {
    const [typeFilament, setTypeFilament] = useState('PLA');
    const [colorName, setColorName] = useState('');
    const [color, setColor] = useState('#00ff00')
    const [value, setValue] = useState(1000);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(typeFilament, colorName, color, value);
        const auth = getAuth();
        const user = auth.currentUser;

        try {
            const stockRef = ref(db, `stock/${user?.uid}`);

            await push(stockRef, {
                "TypeFilament": typeFilament,
                "ColorName": colorName,
                "Color": color,
                "Value": value
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-back2 w-full h-[90vh] overflow-auto flex flex-col py-[1%] px-[4%]">
            <h2 className="mx-auto font-bold text-4xl text-center mb-[3%]">Add Filament</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[2%] shadow-lg mx-auto w-[80%] h-[60vh] bg-back1 rounded-2xl py-[1%] px-[10%]">
                <h3 className="font-bold text-2xl mb-[1%] w-full text-center">Please, fill out this form:</h3>
                <div className="flex flex-row gap-[2%] h-[10%]">
                    <label className="font-bold text-lg whitespace-nowrap flex items-center">Type of filament:</label>
                    <select onChange={(e) => setTypeFilament(e.target.value)} className="font-bold w-full h-full cursor-pointer focus:outline-none rounded-lg border-1 border-line">
                        <option value="PLA" className="dash-opt">PLA</option>
                        <option value="ABS" className="dash-opt">ABS</option>
                        <option value="PETG" className="dash-opt">PETG</option>
                        <option value="TPU" className="dash-opt">TPU</option>
                        <option value="Nylon" className="dash-opt">Nylon</option>
                    </select>
                    <input value={color} onChange={(e) => setColor(e.target.value)} type="color" className="w-[10%] h-full cursor-pointer"/>
                </div>
                <div className="flex flex-row gap-[2%] items-center h-[10%]">
                    <label className="font-bold text-lg whitespace-nowrap flex items-center">Color name:</label>
                    <input onChange={(e) => setColorName(e.target.value)} type="text" placeholder="Insert color name" className="rounded-lg h-[80%] w-full font-bold border-1 border-line focus:outline-none px-[2%]" required />
                </div>
                <div className="flex flex-col gap-[2%] items-center h-[30%] mb-auto">
                    <label className="font-bold text-lg whitespace-nowrap flex items-center">This filament has {value} grams:</label>
                    <input type="range" min={0} max={1000} value={value} onChange={(e) => setValue(Number(e.target.value))} className="rounded-lg h-[20%] w-full font-bold border-1 border-line focus:outline-none accent-primary cursor-pointer"/>
                </div>
                <button type="submit" className="mx-auto cursor-pointer w-[65%] h-[13%] bg-white rounded-lg font-extrabold text-back1 text-2xl">SUBMIT</button>
            </form>
        </div>
    )
}

export default AddFilament