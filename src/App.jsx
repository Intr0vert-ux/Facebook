import React from "react";

import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./auth/home/Home";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* //home root */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
