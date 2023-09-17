import TopNavbar from "./TopNavbar"
import BottomNavbar from "./BottomNavbar"

export default function Navbar(){
    return(
        <div className="w-full h-[136px] bg-red-500">
            <TopNavbar/>
            <BottomNavbar/>
        </div>
    )
}