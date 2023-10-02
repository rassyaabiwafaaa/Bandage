import TopNavbar from "./TopNavbar"
import BottomNavbar from "./BottomNavbar"
import MobileNavbar from "../MobileNavbar"

export default function Navbar(){
    return(
        <>
        {/* Desktop Navbar */}
        <div className="lg:block hidden w-full h-[136px]">
            <TopNavbar/>
            <BottomNavbar/>
        </div>
        {/* Mobile Navbar */}
        <div className="block lg:hidden w-full">
            <MobileNavbar/>
        </div>
        </>
    )
}