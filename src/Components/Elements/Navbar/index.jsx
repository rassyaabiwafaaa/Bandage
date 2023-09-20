import TopNavbar from "./TopNavbar"
import BottomNavbar from "./BottomNavbar"
import MobileNavbar from "../MobileNavbar"

export default function Navbar(){
    return(
        <>
        {/* Desktop Navbar */}
        <div className="md:block hidden w-full h-[136px]">
            <TopNavbar/>
            <BottomNavbar/>
        </div>
        {/* Mobile Navbar */}
        <div className="block md:hidden">
            <MobileNavbar/>
        </div>
        </>
    )
}