/* eslint-disable prettier/prettier */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/home";
import Layout from "../components/Layout";
import Login from "../components/Authentications/Login";

const AppRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
