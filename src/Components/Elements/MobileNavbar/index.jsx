import { useState } from "react";
import { ArrowRight, MenuIcon } from "../../../assets/icons";

export default function MobileNavbar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="h-[70px] flex items-center justify-between mx-[38px]">
        {/* Logo */}
        <span className="text-[24px] font-bold text-[#252B42] cursor-pointer">
          Bandage
        </span>
        {/* Icon */}
        <span
          className="cursor-pointer"
          onClick={() => setDropDown((prev) => !prev)}
        >
          <img
            src={MenuIcon}
            alt="menu icon mobile navbar"
            className="w-[24px] h-[13.71px]"
          />
        </span>
      </div>
      {/* List Menu */}
      <div
        className={`${
          dropDown ? 'opacity-100 max-h-[900px] mt-[50px] pb-[50px]' : 'opacity-0 max-h-0'
        } transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col gap-[30px] justify-center items-center text-center text-[30px] text-[#737373] mb-[56px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>

        {/* Additional content goes here */}
      <div className="flex justify-center">
            <div className="flex flex-col gap-[24px]">
                {/* Text */}
                <div className="text-center text-[30px] font-[400] text-[#23A6F0]">
                    <a href="#">Login</a>
                </div>
                {/* button */}
                <button className="flex items-center gap-[15px] px-[25px] py-[15px] bg-[#23A6F0] text-[14px] font-bold text-white">Become Member <img src={ArrowRight} alt="arrow right icon" className="w-[16px] h-[10px]" /></button>
            </div>
        </div>
      </div>
    </>
  );
}
