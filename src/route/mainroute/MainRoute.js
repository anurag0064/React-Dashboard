import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/sidebar";


const MainRoute = () => {
    return (
        <div className="flex rounded-lg border border-black">
            <Sidebar />
            <div className="w-full h-screen overflow-hidden bg-theme">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
export default MainRoute;