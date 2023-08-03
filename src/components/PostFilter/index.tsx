import { useState } from "react";

import Select from "../../utils/Select";
import TagDrapdown from "./tagDropdown";
import TagsModal from "./tagsModal";
import { AddIcon, CalendarIcon, GridIcon, SortIcon } from "../../icons";

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

const sortData = [
  {
    name: "Ranking",
  },
  {
    name: "Date",
  },
  {
    name: "Views",
  },
  {
    name: "Users",
  },
];

const dateData = [
  {
    name: "Today",
  },
  {
    name: "Yesterday",
  },
  {
    name: "Last week",
  },
  {
    name: "Last month",
  },
  {
    name: "Last year",
  },
];

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full my-[42px] flex items-center justify-between">
        <div className="">
          <Select
            data={postData}
            companiesDrop={true}
            addIcon={<AddIcon color={""} />}
            addText={"Add new folder"}
            leftIcon={<GridIcon />}
            rightIcon={undefined}
            leftText={""}
          />
        </div>

        <div className="flex items-center">
          <div className="">
            <Select
              data={dateData}
              companiesDrop={true}
              addIcon={<CalendarIcon color="" />}
              addText={"Custom date"}
              leftIcon={""}
              rightIcon={<CalendarIcon color="#274C9B" />}
              leftText={"Date:"}
            />
          </div>
          <div className="">
            <Select
              data={sortData}
              companiesDrop={true}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={<SortIcon />}
              leftText={"Sort by:"}
            />
          </div>

          <div className="">
            <TagDrapdown
              onclick={() => setIsOpen(true)}
              onClear={() => {}}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <TagsModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default index;
