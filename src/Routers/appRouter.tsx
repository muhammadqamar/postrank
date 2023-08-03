import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Layout from "../components/Layout";
import Login from "../components/Authentications/Login";
import ResetPassword from "../components/Authentications/ResetPassword/index";
import CreateAccount from "../components/Authentications/CreateAccount/index";
import ConfirmPassword from "../components/Authentications/ConfirmPassword";

const AppRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
