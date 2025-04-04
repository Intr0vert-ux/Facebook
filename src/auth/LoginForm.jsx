import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LoginForm = () => {
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

          <Link
            to={"/"}
            className="text-blue-500 block text-center mt-2 hover:underline"
          >
            Forgotten password?
          </Link>

          <hr className="my-3 border-t border-gray-500" />
          <Link to={"/register"}>
            <button className="bg-green-600 font-semibold text-white p-3 rounded-md w-full ">
              Create new account
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
