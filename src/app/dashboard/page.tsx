import Content from "../components/Dashboard"
import SideBar from '../components/SideBar'
import Header from '../components/DashboardHeader'
import UserCard from '../components/UserCard'
import AddFilament from "../components/AddFilament"

export const metadata = {
  title: 'Tridakta | Dashboard',
  description: 'Tridakta Labs'
}

export default function Dashboard () {

        return (
        <div className='main-page'>
            <div className="flex flex-row w-full h-[10%] 2xl:h-[8%]">
                <UserCard/>
                <Header/>
            </div>
            <div className="flex flex-row w-full h-full">
                <SideBar/>
                <div className="flex flex-col w-full h-full">
                    <Content/>
                    <AddFilament/>
                </div>
            </div>
        </div>
    )
}