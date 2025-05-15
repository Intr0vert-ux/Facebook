import React from "react";
import {
  FaChevronRight,
  FaCircleQuestion,
  FaMoon,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { IoPeopleSharp, IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdFeedback } from "react-icons/md";
import { useSelector } from "react-redux";

const AccountSetting = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="fixed top-0 left-0 min-h-screen w-full bg-transparent"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 shadow-lg shadow-gray-400 rounded-md absolute top-full right-0 w-[400px] mt-3"
      >
        <div className="p-3 rounded-md shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-[35px] w-[35px] rounded-full bg-gray-200 flex justify-center items-center">
              <FaUser className="text-gray-600" />
            </div>
            <h4 className="text-lg font-semibold">
              {user?.f_name} {user?.l_name}
            </h4>
          </div>
          <hr className="my-3 border-0 h-[1px] bg-gray-300" />
          <div className="bg-gray-200 rounded-md px-4 py-3 hover:bg-gray-300">
            <div className="flex items-center justify-center gap-1">
              <IoPeopleSharp size={20} />
              <h4 className="text-md font-semibold">See all profiles</h4>
            </div>
          </div>
        </div>
        <div className=" my-5">
          <div className="flex items-center rounded-md  px-4 py-2 hover:bg-gray-200 justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-gray-300">
                {" "}
                <IoSettingsSharp size={20} />
              </div>

              <h4 className="text-md font-semibold">Settings & privacy</h4>
            </div>
            <FaChevronRight />
          </div>
          <div className="flex items-center rounded-md  px-4 py-2 hover:bg-gray-200  justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-gray-300">
                {" "}
                <FaCircleQuestion size={20} />
              </div>

              <h4 className="text-md font-semibold">Help & support</h4>
            </div>
            <FaChevronRight />
          </div>
          <div className="flex items-center rounded-md  px-4 py-2 hover:bg-gray-200  justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-gray-300">
                {" "}
                <FaMoon size={20} />
              </div>

              <h4 className="text-md font-semibold">Display & accessibility</h4>
            </div>
            <FaChevronRight />
          </div>
          <div className="flex items-center rounded-md  px-4 py-2 hover:bg-gray-200  justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-gray-300">
                {" "}
                <MdFeedback size={20} />
              </div>

              <h4 className="text-md font-semibold">Give feedback</h4>
            </div>
          </div>
          <div className="flex items-center rounded-md  px-4 py-2 hover:bg-gray-200  justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-gray-300">
                {" "}
                <LuLogOut size={20} />
              </div>

              <h4 className="text-md font-semibold">Log out</h4>
            </div>
          </div>
        </div>
        <p className="text-gray-500">
          Privacy · Terms · Advertising · Ad choices · Cookies · · Meta © 2025
        </p>
      </div>
    </>
  );
};

export default AccountSetting;
