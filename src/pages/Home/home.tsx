import React from "react";

import Card from "../../utils/Cards";
import PostFilter from "../../components/PostFilter";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10">
      <PostFilter />
      <div className="w-full flex items-center flex-wrap justify-start gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;