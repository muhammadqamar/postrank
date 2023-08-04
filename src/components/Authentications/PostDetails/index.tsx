import React from "react";

import PostFilter from "../../../components/PostFilter";
import PostError from "../../../utils/Post";
import Trading from "../../../utils/Trading";

const Index = () => {
  return (
    <div>
      <PostFilter />
      <div className="p-8 flex justify-between gap-4">
        <Trading
          trendLabel={"Users"}
          className={""}
          trendNumbers={"1,352"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-blue-200"}
        />
        <Trading
          trendLabel={"New users"}
          className={""}
          trendNumbers={"618"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-white"}
        />
      </div>
      <div className="p-8">
        <PostError onClick={() => {}} postText={"Post #1"} className="" />
      </div>
    </div>
  );
};

export default Index;
