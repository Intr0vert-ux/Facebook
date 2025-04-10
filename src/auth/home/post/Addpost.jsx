import React from "react";
import { FaUser } from "react-icons/fa6";

const Addpost = () => {
  return (
    <>
      <div className="bg-white shadow-lg xl:w-[70%] lg:-[80%] md:w-[90%] w-[95%] mx-auto rounded-md p-5 my-4">
        <div className="flex gap-3 w-full">
          <div className="flex items-center w-full gap-3 cursor-pointer">
            <div className="h-[40px] w-[40px] rounded-full bg-gray-200 flex justify-center items-center">
              <FaUser size={20} className="text-gray-600" />
            </div>
            <div className="bg-gray-200 rounded-full w-full px-3 py-2">
              <h4 className="text-md text-gray-500">
                What's on your mind, Username?
              </h4>
            </div>
          </div>
        </div>
        <hr className="h-[2px] bg-gray-200 border-0 mt-3" />

        <div className="flex justify-between mt-2">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-2 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center">
              <img
                src="/public/images/video.png"
                width={25}
                alt="sidebar images"
              />
              <h5 className="text-sm ">Live video</h5>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-2 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center">
              <img
                src="/public/images/photo.png"
                width={25}
                alt="sidebar images"
              />
              <h5 className="text-sm ">Photo/video</h5>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-2 hover:bg-gray-200 cursor-pointer rounded-md p-2 items-center">
              <img
                src="/public/images/feling.png"
                width={25}
                alt="sidebar images"
              />
              <h5 className="text-sm ">Feeling/activity</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpost;
