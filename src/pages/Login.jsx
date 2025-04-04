import React from "react";
import { FaPlus } from "react-icons/fa6";
import LoginForm from "../auth/LoginForm";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F2F4F7] flex justify-center items-center ">
        <div className="grid w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] grid-cols-1 md:grid-cols-2 mx-auto mt-10 bg-white shadow-lg rounded-md gap-10 p-5 my-10">
          <div>
            <h2 className="text-blue-500 font-bold text-5xl">facebook</h2>
            <h2 className="text-3xl text-gray-800">Recent login</h2>
            <p className="text-gray-500">
              Click your picture or add an account.
            </p>
            <div className="p-10 rounded-md shadow-lg flex justify-center items-center">
              <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-blue-500">
                <FaPlus color="white" />
              </div>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
