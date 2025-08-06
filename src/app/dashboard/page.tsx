import ProtectedRoute from "../components/ProtectedRoute";
import Content from "../components/Dashboard";
import SideBar from '../components/SideBar';
import Header from '../components/DashboardHeader';
import UserCard from '../components/UserCard';
import AddFilament from "../components/AddFilament";
import ManageStock from "../components/ManageStock";

export const metadata = {
  title: 'Tridakta | Dashboard',
  description: 'Tridakta Labs'
}

export default function Dashboard () {

        return (
        <ProtectedRoute>
        <div className='main-page'>
            <div className="flex flex-row w-full h-[10vh] 2xl:h-[8%]">
                <UserCard/>
                <Header/>
            </div>
            <div className="flex flex-row w-full h-full overflow-hidden">
                <SideBar/>
                <div id="dash" className="flex flex-col w-full h-[300vh] transition-all duration-600 ease bg-back2">
                    <Content/>
                    <AddFilament/>
                    <ManageStock/>
                </div>
            </div>
        </div>
        </ProtectedRoute>
    )
}