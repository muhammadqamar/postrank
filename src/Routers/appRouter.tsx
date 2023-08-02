import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/home";
import Layout from "../components/Layout";

const AppRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
