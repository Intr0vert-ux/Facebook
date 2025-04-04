import React, { useEffect, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  //distructure the form fields
  const { email, password } = formFields;
  //handle change function
  const handlechange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const generateYears = () => {
    let years = [];
    for (let i = 2025; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false); // state to toggle the password visibility
  //toggle the password visibility

  useEffect(() => {
    if (password.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  }, [password]);
  return (
    <>
      <div className="p-4 rounded-md shadow-lg">
        <form>
          <h2 className="text-2xl text-center">Creat new account</h2>
          <p className="text-gray-600 text-center mb-3">it's quick and easy</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <input
              name="email"
              autoComplete="off"
              value={email}
              onChange={handlechange}
              type="text"
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-3"
              placeholder="First name"
            />
            <input
              name="email"
              autoComplete="off"
              value={email}
              onChange={handlechange}
              type="text"
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-3"
              placeholder="Surname"
            />
          </div>
          <label
            htmlFor=""
            className="text-gray-700 flex items-center gap-2 text-sm"
          >
            Date of birth <BsFillPatchQuestionFill />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <select
              name="date"
              id=""
              className="p-3 border-gray-500 border rounded-md"
            >
              {Array.from({ length: 31 }).map((_, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <select
              name="date"
              id=""
              className="p-3 border-gray-500 border rounded-md"
            >
              {months?.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              name="date"
              id=""
              className="p-3 border-gray-500 border rounded-md"
            >
              {generateYears()?.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            name="email"
            autoComplete="off"
            value={email}
            onChange={handlechange}
            type="text"
            className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-3"
            placeholder="Email address or phone number"
          />
          <div className="relative">
            <input
              name="password"
              value={password}
              onChange={handlechange}
              type={showPass ? "text" : "password"}
              className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full block mb-3"
              placeholder="Password"
            />
            {showPass ? (
              <FaEye
                onClick={() => setShowPass(false)}
                cursor={"pointer"}
                className={`absolute top-4 right-2`}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPass(true)}
                cursor={"pointer"}
                className={`absolute top-4 right-2`}
              />
            )}
          </div>
          <button className="bg-blue-600 font-semibold text-white p-3 rounded-md w-full mt-1">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
