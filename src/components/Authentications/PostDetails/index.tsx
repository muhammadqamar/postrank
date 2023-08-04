import React from "react";

import PostFilter from "../../../components/PostFilter";
import PostError from "../../../utils/PostError";
import Trading from "../../../utils/TradingError";

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
          // color={""}
        />
        <Trading
          trendLabel={"New users"}
          className={""}
          trendNumbers={"618"}
          trendMarkup={"12.5%"}
        />
      </div>
      <div className="p-8">
        <PostError onClick={() => {}} postText={"Post #1"} className="" />
      </div>
    </div>
  );
};

export default Index;
