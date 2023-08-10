import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Layout from "../components/Layout";
import Login from "../components/Authentications/Login";
import ResetPassword from "../components/Authentications/ResetPassword/index";
import CreateAccount from "../components/Authentications/CreateAccount/index";
import PostDetails from "../components/Authentications/PostDetails";
// import Settings from "../components/Authentications/Settings";

const AppRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="post-details" element={<PostDetails />} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
