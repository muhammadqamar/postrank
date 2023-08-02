import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
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
