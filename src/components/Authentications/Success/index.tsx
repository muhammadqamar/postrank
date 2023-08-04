import React from "react";

import NoResult from "../../../utils/NoResult";
import { PostLoadedIcon } from "../../../icons";
import Card from "../../../utils/Cards";

const Index = () => {
  const handleSubmit = () => {
    console.log("Success");
  };
  return (
    <div className="bg-white pt-16 px-10 flex flex-col gap-16">
      <NoResult
        icon={<PostLoadedIcon />}
        heading="Your posts has been loaded!"
        text="Now you can go to your dashboard and start exploring!"
        buttonText="To dashboard"
        onClick={handleSubmit}
      />
      <div className="flex m-auto gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Index;
