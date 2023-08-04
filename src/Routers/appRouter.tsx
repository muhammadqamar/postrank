import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Layout from "../components/Layout";
import Login from "../components/Authentications/Login";
import ResetPassword from "../components/Authentications/ResetPassword/index";
import CreateAccount from "../components/Authentications/CreateAccount/index";
import ConfirmPassword from "../components/Authentications/ConfirmPassword";
import PersonalInformation from "../components/Authentications/PersonalInformation";
import CreateNewProject from "../components/Authentications/CreateNewProject";
import ConnectProject from "../components/Authentications/ConnectProject";
import Success from "../components/Authentications/Success";
import PostDetails from "../components/Authentications/PostDetails";

const AppRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/create-newProject" element={<CreateNewProject />} />
        <Route path="/connect-project" element={<ConnectProject />} />
        <Route path="/success" element={<Success />} />
        <Route path="/post-details" element={<PostDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
