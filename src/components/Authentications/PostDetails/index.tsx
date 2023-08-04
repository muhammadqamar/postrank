import React from "react";

import PostFilter from "../../../components/PostFilter";
import PostError from "../../../utils/Post";
import Trading from "../../../utils/Trading";

const Index = () => {
  return (
    <div>
      <PostFilter />
      <div className="bg-white p-8 flex justify-between gap-4">
        <Trading
          trendLabel={"Users"}
          className={""}
          trendNumbers={"1,352"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-blue-200"}
          trendNumbersColor={"text-white"}
          trendMarkupColor={"text-blue-200"}
        />
        <Trading
          trendLabel={"New users"}
          className={"!bg-blue-200"}
          trendNumbers={"618"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-gray-700"}
          trendNumbersColor={""}
          trendMarkupColor={"text-success-300"}
        />
      </div>
      <div className="p-8 flex flex-col gap-2">
        <PostError
          onClick={() => {}}
          postText={"Post #1"}
          className=""
          listColor={"bg-blue-500"}
        />
        <PostError
          onClick={() => {}}
          postText={"Post #1"}
          className=""
          listColor={"bg-orange-300"}
        />
      </div>
    </div>
  );
};

export default Index;
