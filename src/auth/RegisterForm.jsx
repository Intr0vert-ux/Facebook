import React, { useEffect, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { PiWarningOctagonFill } from "react-icons/pi";
import { data, Link } from "react-router-dom";

const RegisterForm = () => {
  const [error, setError] = useState("");
  //get the current date
  const [myDate] = useState(new Date());
  //get the current months
  const [myMonth] = useState(
    myDate.toLocaleString("default", { month: "long" })
  );
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    f_name: "",
    l_name: "",
    date: myDate.getDate(),
    month: myMonth,
    year: myDate.getFullYear(),
    gender: "",
  });

  //distructure the form fields

  const { email, password, f_name, l_name, date, month, year, gender } =
    formFields;
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
  const handleBlur = (name) => {
    if (name === "f_name" && !f_name) {
      setError("f_name");
    }
    if (name === "l_name" && !l_name) {
      setError("l_name");
    }
  };
  return (
    <>
      <div className="p-2 rounded-md shadow-lg">
        <form>
          <h2 className="text-2xl text-center">Create new account</h2>
          <p className="text-gray-600 text-center mb-2">it's quick and easy</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative">
              <input
                onBlur={() => handleBlur("f_name")}
                name="f_name"
                autoComplete="off"
                value={f_name}
                onChange={handlechange}
                type="text"
                className={`p-2 rounded-md border-2 text-gray-700 outline-0 focus:outline-none  w-full mb-1 ${
                  error === "f_name" && !f_name
                    ? "border-red-600"
                    : " border-gray-300 focus:border-blue-500"
                }`}
                placeholder="First name"
              />
              {error === "f_name" && !f_name && (
                <PiWarningOctagonFill
                  size={20}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600"
                />
              )}
            </div>
            <div className="relative">
              <input
                onBlur={() => handleBlur("l_name")}
                name="l_name"
                autoComplete="off"
                value={l_name}
                onChange={handlechange}
                type="text"
                className={`p-2 rounded-md border-2 text-gray-700 outline-0 focus:outline-none  w-full mb-1 ${
                  error === "l_name" && !l_name
                    ? "border-red-600"
                    : " border-gray-300 focus:border-blue-500"
                }`}
                placeholder="Surname"
              />
              {error === "l_name" && !l_name && (
                <PiWarningOctagonFill
                  size={20}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600"
                />
              )}
            </div>
          </div>
          <label
            htmlFor=""
            className="text-gray-700 flex items-center gap-1 mb-1 text-sm"
          >
            Date of birth <BsFillPatchQuestionFill />
          </label>
          <div className="grid grid-cols-3 gap-1">
            <select
              name="date"
              value={date}
              onChange={handlechange}
              id=""
              className="p-1 border-gray-500 border rounded-md"
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
              name="month"
              value={month}
              onChange={handlechange}
              id=""
              className="p-1 border-gray-500 border rounded-md"
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
              name="year"
              value={year}
              onChange={handlechange}
              id=""
              className="p-1 border-gray-500 border rounded-md"
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
          <label
            htmlFor=""
            className="text-gray-700 flex items-center gap-1 mb-1 text-sm"
          >
            Gender <BsFillPatchQuestionFill />
          </label>
          <div className="grid grid-cols-3 gap-1 mb-3">
            <div className="flex p-1 rounded-md items-center justify-between border border-gray-300">
              <label htmlFor="">Female</label>
              <input
                type="radio"
                name="gender"
                value={"female"}
                onChange={handlechange}
              />
            </div>
            <div className="flex p-1 rounded-md items-center justify-between border border-gray-300">
              <label htmlFor="">Male</label>
              <input
                type="radio"
                name="gender"
                value={"male"}
                onChange={handlechange}
              />
            </div>
            <div className="flex p-1 rounded-md items-center justify-between border border-gray-300">
              <label htmlFor="">Custom</label>
              <input
                type="radio"
                name="gender"
                value={"custom"}
                onChange={handlechange}
              />
            </div>
          </div>
          <input
            name="email"
            autoComplete="off"
            value={email}
            onChange={handlechange}
            type="text"
            className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-2"
            placeholder="Mobile number or Email address"
          />
          <input
            name="password"
            value={password}
            onChange={handlechange}
            type={showPass ? "text" : "password"}
            className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full block mb-2"
            placeholder="New Password"
          />
          <p className="text-gray-500 text-[0.6rem]">
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>

          <button className="bg-green-500 font-semibold text-white p-2 rounded-md w-full mt-1">
            Sign up
          </button>
          <Link
            to={"/"}
            className="text-blue-500 block text-center mt-2 hover:underline"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
