"use client";

import Content from "./Dashboard"
import SideBar from './SideBar'
import Header from './DashboardHeader'
import UserCard from './UserCard'
import AddFilament from "./AddFilament"
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect} from "react";



export default function DashboardClient () {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user]);

        return (
        <div className='main-page'>
            <div className="flex flex-row w-full h-[10vh] 2xl:h-[8%]">
                <UserCard/>
                <Header/>
            </div>
            <div className="flex flex-row w-full h-[90vh] overflow-hidden">
                <SideBar/>
                <div id="dash" className="flex flex-col w-full h-[200vh] transition-all duration-600 ease">
                    <Content/>
                    <AddFilament/>
                </div>
            </div>
        </div>
    )
}