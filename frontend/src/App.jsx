import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./auth/home/Home";
import { Toaster } from "react-hot-toast";
import OTPVerification from "./auth/OTP";

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* home root */}
          <Route path="/home" element={<Home />} />
          {/* otp verification */}
          <Route path="/otp" element={<OTPVerification />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
