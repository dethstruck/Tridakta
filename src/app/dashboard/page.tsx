"use client";
import PgHeader from "../components/PgHeader"
import SideBar from "../components/SideBar"
import PgFooter from "../components/PgFooter"
import {LuGhost, LuSettings } from 'react-icons/lu';
import { AiOutlineBars } from "react-icons/ai";
import {useState} from 'react'

export default function Dashboard () {
//hooks is on the top on react
const [isSideBarOpen, setSideBarOpen]= useState(false); //declare the state of your function on the start


    return (
        <div className='min-h-screen max-h-screen w-screen flex flex-col'>
            <PgHeader/>
            <SideBar/>
            <PgFooter/>
        </div>
    )
}