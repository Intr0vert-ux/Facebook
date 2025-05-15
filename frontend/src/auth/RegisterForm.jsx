import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regUserSlice, resetUserState } from "../features/users/userSlice";
import SyncLoader from "react-spinners/SyncLoader";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { PiWarningOctagonFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { userLoading, userSuccess, userError, userMessage } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    if (userSuccess) {
      toast.success("Registration successful!");
      navigate("/otp");
    }
    dispatch(resetUserState());
  }, [userError, userSuccess]);

  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    f_name: "",
    l_name: "",
    date: new Date().getDate(),
    month: new Date().toLocaleString("default", { month: "long" }),
    year: new Date().getFullYear(),
    gender: "",
  });

  const months = [
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
  ];

  const generateYears = () => {
    let years = [];
    for (let i = 2025; i >= 1900; i--) years.push(i);
    return years;
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleBlur = (name) => {
    if (!formFields[name]) setError(name);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(regUserSlice(formFields));
  };

  // useEffect(() => {
  //   if (userSuccess) {
  //     // Optionally redirect or show success
  //     dispatch(resetUserState());
  //   }
  // }, [userSuccess, dispatch]);

  return (
    <div className="p-2 rounded-md shadow-lg">
      <form>
        <h2 className="text-2xl text-center">Create new account</h2>
        <p className="text-gray-600 text-center mb-2">It's quick and easy</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* First Name */}
          <div className="relative">
            <input
              onBlur={() => handleBlur("f_name")}
              name="f_name"
              autoComplete="off"
              value={formFields.f_name}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              className={`p-2 rounded-md border-2 text-gray-700 w-full mb-1 ${
                error === "f_name" && !formFields.f_name
                  ? "border-red-600"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {error === "f_name" && !formFields.f_name && (
              <PiWarningOctagonFill className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600" />
            )}
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              onBlur={() => handleBlur("l_name")}
              name="l_name"
              autoComplete="off"
              value={formFields.l_name}
              onChange={handleChange}
              type="text"
              placeholder="Surname"
              className={`p-2 rounded-md border-2 text-gray-700 w-full mb-1 ${
                error === "l_name" && !formFields.l_name
                  ? "border-red-600"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {error === "l_name" && !formFields.l_name && (
              <PiWarningOctagonFill className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600" />
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <label className="text-gray-700 flex items-center gap-1 mb-1 text-sm">
          Date of birth <BsFillPatchQuestionFill />
        </label>
        <div className="grid grid-cols-3 gap-1">
          <select
            name="date"
            value={formFields.date}
            onChange={handleChange}
            className="p-1 border rounded-md"
          >
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={formFields.month}
            onChange={handleChange}
            className="p-1 border rounded-md"
          >
            {months.map((m, i) => (
              <option key={i} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={formFields.year}
            onChange={handleChange}
            className="p-1 border rounded-md"
          >
            {generateYears().map((y, i) => (
              <option key={i} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <label className="text-gray-700 flex items-center gap-1 mb-1 text-sm">
          Gender <BsFillPatchQuestionFill />
        </label>
        <div className="grid grid-cols-3 gap-1 mb-3">
          {["female", "male", "custom"].map((gender) => (
            <div
              key={gender}
              className="flex p-1 rounded-md items-center justify-between border border-gray-300"
            >
              <label>{gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Email */}
        <input
          name="email"
          value={formFields.email}
          onChange={handleChange}
          type="email"
          className="p-2 rounded-md border-2 w-full mb-2"
          placeholder="Email"
        />

        {/* Password */}
        <div className="relative">
          <input
            name="password"
            value={formFields.password}
            onChange={handleChange}
            type={showPass ? "text" : "password"}
            className="p-2 rounded-md border-2 w-full mb-2"
            placeholder="Password"
          />
          {formFields.password && (
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>

        {userError && (
          <p className="text-red-500 text-sm mb-2">{userMessage}</p>
        )}

        <button
          onClick={handleSignUp}
          disabled={userLoading}
          className={`font-semibold ${
            userLoading ? "bg-gray-500" : "bg-blue-500"
          } text-white p-2 rounded-md w-full`}
        >
          {userLoading ? <SyncLoader size={10} color="white" /> : "Sign Up"}
        </button>

        <Link
          to="/"
          className="text-blue-500 block text-center mt-2 hover:underline"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
