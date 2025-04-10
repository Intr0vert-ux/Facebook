import React from "react";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import { navbar_data } from "./data/navbarData";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown, FaFacebookMessenger } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import Menu from "./rightside/Menu";
import AccountSetting from "./rightside/AccountSetting";

const Navbar = () => {
  const [focused, setFocused] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);

  return (
    <div className="flex justify-between items-center max-w-7xl p-3 mx-auto">
      {/* Left section - Logo and Search */}
      <div
        className={`flex items-center transition-all duration-300 ${
          focused && "shadow-2xl shadow-gray-900 rounded-md p-3"
        }`}
      >
        {/* Logo container with fixed width */}
        <div className="w-[50px] h-[40px] flex items-center justify-center">
          {/* Back button - absolutely positioned */}
          <IoIosArrowRoundBack
            size={25}
            className={`transition-all duration-300 ${
              focused ? "opacity-100" : "opacity-0 -translate-x-4"
            }`}
          />
          {/* Logo - absolutely positioned */}
          <img
            src="/images/logo.svg"
            alt="facebook"
            className={`h-10 w-10 cursor-pointer absolute transition-all duration-300 ${
              focused ? "opacity-0 translate-x-4" : "opacity-100"
            }`}
          />
        </div>

        {/* Search Bar - independent of logo */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
          <IoIosSearch className="text-gray-500 text-xl mr-2" />
          <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="text"
            className="border-0 outline-none bg-transparent text-sm placeholder-gray-500 w-40"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center menu items - unchanged */}
      <ul className="flex gap-6 list-unstyled text-gray-800">
        {navbar_data?.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer group relative hover:bg-gray-100 px-7 py-2 rounded-md"
          >
            {item?.icon}
            <div className="absolute delay-100 group-hover:opacity-100 mt-1 left-1/2 top-full -translate-x-1/2 bg-black text-white rounded-xl px-3 transition-all duration-200 opacity-0 py-1 text-sm">
              {item?.title}
            </div>
          </li>
        ))}
      </ul>

      {/* Right side icons - unchanged */}
      <div className="flex items-center gap-2">
        <div onClick={() => setOpenMenu(!openMenu)} className="relative">
          <div
            className={`h-[37px] w-[37px] flex justify-center items-center ${
              openMenu
                ? "text-[#0861f2] bg-[#dfe9f2] hover:bg-[#afc7dc]"
                : "bg-gray-200 hover:bg-gray-300"
            }   cursor-pointer rounded-full p-2`}
          >
            <BsFillGrid3X3GapFill size={25} />
          </div>
          {openMenu && <Menu />}
        </div>
        <div className="h-[37px] w-[37px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full p-2">
          <FaFacebookMessenger size={25} />
        </div>
        <div className="h-[37px] w-[37px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full p-2">
          <IoNotifications size={25} />
        </div>
        <div onClick={() => setOpenAccount(!openAccount)} className="relative">
          <div className="h-[37px] group relative w-[37px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full p-2">
            <FaUserAlt size={25} className="text-gray-500" />
            <div className="bg-gray-200 absolute rounded-full h-[15px] w-[15px] flex justify-center items-center right-0 bottom-0">
              <FaAngleDown size={10} />
            </div>
            <div>
              <div className="absolute delay-100 group-hover:opacity-100 mt-1 left-1/2 top-full -translate-x-1/2 bg-black text-white rounded-xl px-3 transition-all duration-200 opacity-0 py-1 text-sm">
                Account
              </div>
            </div>
          </div>
          {openAccount && <AccountSetting />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
