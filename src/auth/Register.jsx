import React from "react";
import { FaPlus } from "react-icons/fa6";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F2F4F7] flex justify-center items-center ">
        <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-10 bg-white shadow-lg rounded-md gap-10 p-5 my-10">
          <div>
            <h2 className="text-blue-500 font-bold text-5xl">facebook</h2>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
