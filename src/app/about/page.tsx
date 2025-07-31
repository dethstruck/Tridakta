"use client";
import PgHeader from "../components/PgHeader"
import PgFooter from "../components/PgFooter"

export default function About() {
    return (
        <div className='min-h-screen max-h-screen w-screen flex flex-col'>
            <PgHeader/>
            <div className='flex-1 flex items-center justify-center'>
                <h1 className='text-3xl font-bold text-gray-800'>About Us</h1>
            </div>
            <PgFooter/>
        </div>
    )
}