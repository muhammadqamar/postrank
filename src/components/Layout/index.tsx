import React from "react";

import SearchIcon from "../../assets/images/Icons/search.svg";

const Index = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[25px]">
        <div className="">postrank.io</div>

        <div className="w-[183px] h-10 bg-white rounded-full"></div>
      </div>

      <div className="flex items-center gap-[25px]">
        <div className=" ">
          <input
            type="text"
            placeholder="Search..."
            className="w-[228px] py-[10px] pl-3 pr-9 bg-white rounded-full  border-none  h-auto p-medium text-gray_600 focus-visible:outline-1 focus-visible:outline focus-visible:outline-blue-500 "
            style={{
              backgroundImage: `url(${SearchIcon})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="w-12 h-12 rounded-full bg-primary-500"></div>
      </div>
    </div>
  );
};

export default Index;
