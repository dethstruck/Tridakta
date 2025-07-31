"use client";
import Content from "../components/Dashboard"
import SideBar from '../components/SideBar'
import Header from '../components/DashboardHeader'
import UserCard from '../components/UserCard'

export default function Dashboard () {

        return (
        <div className='main-page'>
            <div className="flex flex-row w-full h-[10%] 2xl:h-[8%]">
                <UserCard/>
                <Header/>
            </div>
            <div className="flex flex-row w-full h-full">
                <SideBar/>
                <Content/>
            </div>
        </div>
    )
}