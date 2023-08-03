import React from "react";

import { PostLoadedIcon } from "../../../icons";

const Index = () => {
  return (
    <div className="bg-white pt-16 flex flex-col">
      <div className="flex flex-col gap-6 items-center">
        <PostLoadedIcon />
        <h6 className="h6 text-gray-900">Your posts has been loaded!</h6>
        <p className="p-medium">
          Now you can go to your dashboard and start exploring!
        </p>
        {/* <Button/> */}
      </div>
    </div>
  );
};

export default Index;
