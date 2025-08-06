"use client";

import {useState, useRef, use} from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {LuSettings } from 'react-icons/lu';
import { AiOutlineBars,AiOutlineAreaChart} from "react-icons/ai";
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsFillBadge3dFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { SlSizeFullscreen } from 'react-icons/sl';
import { getAuth, signOut } from 'firebase/auth';

//hooks is on the top on react
//invert the actual state in 14 line
//copy shift+alt+ set
const SideBar = () => {
    const iconSize = 35
    const router = useRouter();
    
    const handleLogout = async () => {
    const auth = getAuth();

    await signOut(auth)
    console.log('Logged out')
    router.push('/')
    }
    
    return (
        <div className="flex flex-col h-full w-[12%] sm:w-[35%] md:w-[25%] lg:w-[17%] xl:w-[12%] pb-[1%] pt-1 items-center bg-back1">
            <BarButton task={() => rollScreen(0)} icon={<FaHome size={iconSize}/>} text="Dashboard"/>
            <BarButton task={() => rollScreen(90)} icon={<BsFillBadge3dFill size={iconSize}/>} text="+ Filament"/>
            <BarButton task={() => rollScreen(180)} icon={<AiOutlineAreaChart size={iconSize}/>} text="Stock"/>
            <BarButton icon={<TbLayoutDashboardFilled size={iconSize}/>} text="Layout"/>
            <BarButton icon={<MdEmail size={iconSize}/>} text="Email"/>
            <BarButton icon={<AiOutlineBars size={iconSize}/>} text="Menu"/>
            <hr className='bar-hr mt-auto'/>
            <BarButton task={handleLogout} icon={<IoLogOut size={iconSize}/>} text="Logout"/>
            <BarButton icon={<LuSettings size={iconSize}/>} text="Settings"/>
            <BarButton task={handleFullScreen} icon={<SlSizeFullscreen size={iconSize}/>} text="Fullscreen"/>
        </div>
    )
}

const rollScreen = (roll: number) => {
    const dash = document.getElementById('dash');
    if (dash) {
        dash.style.transform = `translateY(-${roll}vh)`
    }
}

const handleFullScreen = () => {
    console.log('fullscreen')
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

type BarButtonProps = {
    icon: React.ReactNode;
    text: string;
    task?: (...args: any[]) => void;
}

const BarButton = ({icon, text = 'Button Tip', task}: BarButtonProps) => {
    const [isSideBarOpen, setIsSideBarOpen]= useState(false); //declare the state of your function on the start
    
    return (
        <div className='bar-button' onClick={task}>
            <button>
                {icon}
            </button>
            <span>
                {text}
            </span>
        </div>
    )
}

//type Props ={
    //isOpen:boolean // define that sidebar if is open or closed
   // toggle:() => void;// close sidebar
//};//

export default SideBar
/*Define the first function to execute*/