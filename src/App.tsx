/* eslint-disable prettier/prettier */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
