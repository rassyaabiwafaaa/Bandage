import { EmailIcon, FacebookIcon, InstagramIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from "../../../assets/icons";

export default function TopNavbar(){
    return(
        <div className="h-[58px] bg-[#252B42] text-white hidden md:flex justify-center items-center gap-[30px]">
                {/* Left */}
                <div className="flex gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                        <span>
                            <img src={PhoneIcon} alt="phone icon navbar" className="w-[16px] h-[16px]" />
                        </span>
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <span>
                            <img src={EmailIcon} alt="email icon navbar" className="w-[16px] h-[12px]" />
                        </span>
                        <span>michelle.rivera@example.com</span>
                     </div>
                </div>
                
                {/* Mid */}
                <div className="flex font-bold">
                    <span>Follow Us  and get a chance to win 80% off</span>
                </div>
                {/* Right */}
                <div className="flex font-bold gap-[10px]">
                    <span>Follow Us : </span>
                    <div className="flex items-center gap-[10px]">
                        <img src={InstagramIcon} alt="Instagram icon" className="w-[16px] h-[16px]" />
                        <img src={YoutubeIcon} alt="Youtube Icon" className="w-[16px] h-[11.24px]"/>
                        <img src={FacebookIcon} alt="Facebook Icon" className="w-[16px] h-[16px]"/>
                        <img src={TwitterIcon} alt="Twitter Icon" className="w-[16px] h-[13px]"/>
                    </div>
                </div>
        </div>
    )
}