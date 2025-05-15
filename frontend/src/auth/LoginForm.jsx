import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetUserState } from "../features/users/userSlice";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [showEye, setShowEye] = useState(false);

  const { email, password } = formFields;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userError, userMessage, userLoading, userSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setShowEye(password.length > 0);
  }, [password]);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage || "Login failed");
      dispatch(resetUserState());
    }

    if (userSuccess) {
      toast.success("Login successful");
      dispatch(resetUserState());
      navigate("/home"); // ✅ navigate to home on success
    }
  }, [userError, userSuccess, userMessage, dispatch, navigate]);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="p-4 rounded-md shadow-lg max-w-sm mx-auto bg-white mt-8">
      <form onSubmit={handleLogin}>
        <input
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
          type="text"
          className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-3"
          placeholder="Email address or phone number"
        />

        <div className="relative">
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type={showPass ? "text" : "password"}
            className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full block mb-3"
            placeholder="Password"
          />
          {showEye && (
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute top-3.5 right-3 cursor-pointer text-gray-500"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 font-semibold text-white p-3 rounded-md w-full mt-1 hover:bg-blue-700 transition"
          disabled={userLoading}
        >
          {userLoading ? "Logging in..." : "Log in"}
        </button>

        <Link
          to="/"
          className="text-blue-500 block text-center mt-2 hover:underline"
        >
          Forgotten password?
        </Link>

        <hr className="my-3 border-t border-gray-300" />

        <Link to="/register">
          <button className="bg-green-600 font-semibold text-white p-3 rounded-md w-full hover:bg-green-700 transition">
            Create new account
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
