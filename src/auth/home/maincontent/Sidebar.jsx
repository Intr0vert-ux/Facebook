import React from "react";
import { FaAngleDown, FaUser } from "react-icons/fa6";
import { Sidebar_data } from "../../../components/home/data/Sidebar_data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="h-[85vh] overflow-y-scroll hide-scrollbar  p-2">
      <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer rounded-md px-2">
        <div className="h-[40px] w-[40px] rounded-full bg-gray-200 flex justify-center items-center">
          <FaUser size={20} className="text-gray-600" />
        </div>
        <h4 className="text-lg font-semibold">Username</h4>
      </div>
      <ul className="flex flex-col mt-1 unstyled">
        {Sidebar_data?.slice(0, open ? Sidebar_data?.length : 10).map(
          (item, index) => (
            <motion.li
              key={index} // Added key prop
              transition={{ duration: 1, staggerChildren: 0.2 }}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <li className="flex gap-2 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center">
                <img src={item?.icon} width={25} alt="sidebar images" />
                <h5 className="text-sm ">{item?.title}</h5>
              </li>
            </motion.li>
          )
        )}
        <li
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-semibold p-2 hover:bg-gray-200 cursor-pointer rounded-md"
        >
          <div className="flex justify-center items-center border border-gray-300 h-[30px] w-[30px] rounded-full bg-gray-200 ">
            <FaAngleDown
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-200 `}
            />
          </div>
          <h5 className="text-sm">{open ? "See less" : "See more"}</h5>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
