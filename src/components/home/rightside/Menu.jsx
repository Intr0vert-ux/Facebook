import React from "react";
import { IoIosSearch } from "react-icons/io";
import { data } from "./data/data";

const Menu = () => {
  return (
    <>
      <div className="bg-gray-100 absolute w-[500px] h-[80vh] overflow-y-scroll -translate-x-full px-5 py-3 rounded-md">
        <h2 className="text-black text-2xl font-semibold">Menu</h2>
        <div className="grid my-2 gap-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="sm:col-span-2 shadow rounded-md bg-white p-5">
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <IoIosSearch className="text-gray-500 text-xl mr-2" />
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent text-sm placeholder-gray-500 w-40"
                  placeholder="Search Facebook"
                />
              </div>

              {/* items */}
              <ul className="flex flex-col gap-3 unstyled">
                {data?.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className="text-md font-semibold">{item?.title}</li>
                      {/* Nested list */}
                      {item?.list?.map((item2, index2) => {
                        return (
                          <div
                            key={index2}
                            className="flex gap-1 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center"
                          >
                            <img
                              src={item2?.icon}
                              width={30}
                              alt="sidebar images"
                            />
                            <div className="flex flex-col">
                              <h5 className="text-sm ">{item2?.heading}</h5>
                              <p className="text-xs text-gray-500">
                                {item2?.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {index !== data.length - 1 && (
                        <hr className="my-3 border-0 h-[1px] bg-gray-300" />
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="sm:col-span-1 shadow rounded-md bg-white p-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
