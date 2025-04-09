import React from "react";
import { FaPlus } from "react-icons/fa6";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <div className="min-h-screen bg-[#cdcfd2] flex justify-center items-center ">
        <div className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto mt-5 bg-white shadow-lg rounded-md gap-5 p-2 my-5">
          <div>
            <h2 className="text-blue-500 font-bold text-center text-4xl">
              facebook
            </h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
