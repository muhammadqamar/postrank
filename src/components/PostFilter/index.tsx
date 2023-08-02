import React from "react";

const index = () => {
  return (
    <div className="w-full my-[42px] flex items-center justify-between">
      <div className="">All posts</div>
      <div className="flex items-center">
        <div className="px-4 py-[10px]">Date: Today</div>
        <div className="">Sort by: Ranking</div>
        <div className="">Tags</div>
      </div>
    </div>
  );
};

export default index;
