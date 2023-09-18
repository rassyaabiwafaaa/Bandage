import { CartIcon, LoginIcon, LoveIcon, SearchIcon } from "../../../assets/icons";

export default function BottomNavbar(){
    return(
        <div className="h-[78px] bg-white flex items-center justify-center">
            {/* Left */}
            <div className="mr-[75px]">
                <span className="text-[24px] font-bold text-black">Bandage</span>
            </div>
            {/* Mid */}
            <div className="mr-[124.5px] font-bold text-[14px] text-[#737373]">
                <ul className="flex gap-[15px]">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
            </div>
            {/* Right */}
            <div className="flex gap-[15px] text-[14px] font-bold text-[#23A6F0]">
                {/* Login n Register */}
                <div className="flex items-center">
                    <img src={LoginIcon} alt="login icon" className="w-[12px] h-[12px] mr-[5px]" />
                    <span>Login / Register</span>
                </div>
                {/* Icon */}
                <div className="flex items-center gap-[15px]">
                    <span className="flex items-center">
                        <img src={SearchIcon} alt="search icon" className="w-[16px] h-[16px]"/>
                    </span>
                    <span className="flex items-center gap-[5px]">
                        <img src={CartIcon} alt="cart icon" className="w-[15px] h-[15px]"/>
                        <span>1</span>
                    </span>
                    <span className="flex items-center gap-[5px]">
                        <img src={LoveIcon} alt="love icon" className="w-[16px] h-[15px]"/>
                        <span>1</span>
                    </span>
                </div>
            </div>
        </div>
    )
}