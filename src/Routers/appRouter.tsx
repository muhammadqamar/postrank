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
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
        <Route path="/CreateNewProject" element={<CreateNewProject />} />
        <Route path="/ConnectProject" element={<ConnectProject />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
