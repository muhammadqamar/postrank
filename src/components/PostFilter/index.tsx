import React from "react";

import Select from "../../utils/Select";
import { AddIcon } from "../../icons";

const postData = [
  {
    name: "All posts",
  },
  {
    name: "All visas",
  },
  {
    name: "Europe visas",
  },
  {
    name: "Travel programs",
  },
  {
    name: "Domestic programs",
  },
  {
    name: "Insurance",
  },
];

const index = () => {
  return (
    <div className="w-full my-[42px] flex items-center justify-between">
      <div className="">
        <Select
          data={postData}
          companiesDrop={true}
          addIcon={<AddIcon />}
          addText={"Add new folder"}
          leftIcon={undefined}
          rightIcon={undefined}
          leftText={""}
        />
      </div>

      <div className="flex items-center">
        <div className="px-4 py-[10px]">Date: Today</div>
        <div className="">Sort by: Ranking</div>
        <div className=""></div>
        EyeIcon
      </div>
    </div>
  );
};

export default index;
