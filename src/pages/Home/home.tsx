import React from "react";

import Card from "../../utils/Cards";
import { Heading } from "../../utils/Typography";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10">
      <Heading />

      <div className="w-full flex items-center flex-wrap justify-start gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
