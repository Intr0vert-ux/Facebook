import React from "react";
import { FaUser } from "react-icons/fa6";
import { Sidebar_data } from "../../../components/home/data/Sidebar_data";

const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen bg-white p-3">
        <div className="flex items-center gap-3 hover:bg-gray-200 cursor-pointer rounded-md p-2">
          <div className="h-[40px] w-[40px] rounded-full bg-gray-200 flex justify-center items-center">
            <FaUser size={20} className="text-gray-600" />
          </div>
          <h4 className="text-lg font-semibold">Username</h4>
        </div>
        <ul className="flex flex-col gap-3 mt-3 unstyled">
          {Sidebar_data?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center"
              >
                <img src={item?.icon} width={30} alt="sidebar images" />

                <h5 className="text-sm ">{item?.title}</h5>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
