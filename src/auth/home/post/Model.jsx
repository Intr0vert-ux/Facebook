import * as React from "react";
import { FaSortDown, FaUser } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { IoChevronBackSharp } from "react-icons/io5";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { colors } from "./data/Color-data";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [opencolor, setOpencolor] = React.useState(false);
  const [postText, setPostText] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const isPostButtonActive = postText.trim().length > 0;

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-gray-100 hover:bg-gray-200 rounded-full w-full px-3 py-2 cursor-pointer"
      >
        <h4 className="text-md text-gray-500">
          What's on your mind, Username?
        </h4>
      </div>

      <Modal
        open={open}
        style={{ backdropFilter: "blur(2px)" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex h-screen justify-center items-center">
          <div className="xl:w-[35%] md:w-[40%] rounded-md mx-auto bg-white shadow-md relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h4 className="text-center p-4 text-lg font-bold">Create Post</h4>
            <hr className="border-0 h-[1px] bg-gray-300" />

            {/* user information */}
            <div className="p-3">
              <div className="flex items-center gap-2 cursor-pointer my-2">
                <div className="h-[40px] w-[40px] rounded-full bg-gray-200 flex justify-center items-center">
                  <FaUser size={20} className="text-gray-600" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="font-semibold text-sm m-0">Username</h4>
                  <div className="flex items-center px-1 bg-gray-200 rounded-sm">
                    <FaUserFriends size={10} />
                    <p className="text-sm font-semibold">Friends</p>
                    <FaSortDown size={10} />
                  </div>
                </div>
              </div>
              <textarea
                name="postContent"
                value={postText}
                onChange={handleTextChange}
                className="w-full outline-0 resize-none post_caption"
                placeholder="What's on your mind, Username?"
                rows={5}
              ></textarea>
              <div className="flex justify-between items-center">
                {opencolor ? (
                  <>
                    <div
                      onClick={() => setOpencolor(false)}
                      className="flex justify-center items-center cursor-pointer bg-gray-200 rounded-md h-[26px] w-[26px]"
                    >
                      <IoChevronBackSharp
                        className="-translate-x-[1.4px]"
                        size={20}
                      />
                    </div>
                    <motion.div
                      className="flex gap-2 ml-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {colors?.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: index * 0.1,
                            duration: 0.3,
                            type: "spring",
                            damping: 10,
                            stiffness: 300,
                          }}
                          className="h-[25px] w-[25px] border-1 rounded-md cursor-pointer p-3"
                          style={{
                            background: `linear-gradient(to right,${item?.startColor}, ${item?.endColor})`,
                          }}
                        />
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <div
                    onClick={() => setOpencolor(true)}
                    className="flex justify-center items-center cursor-pointer bg-gray-200 rounded-md h-[26px] w-[26px]"
                  >
                    <img
                      src="/public/images/picker.png"
                      alt="color picker"
                      className="h-[26px] w-[26px] object-contain"
                    />
                  </div>
                )}

                <BsEmojiSmile size={20} />
              </div>
            </div>

            {/* Post button */}
            <div className="p-3">
              <button
                className={`w-full text-white font-semibold py-2 px-4 rounded-md ${
                  isPostButtonActive
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
                disabled={!isPostButtonActive}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
