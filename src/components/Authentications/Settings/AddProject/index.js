import React from "react";

import Select from "../../../../utils/Select";
import Button from "../../../../utils/Button";
import InputField from "../../../../utils/InputField";
import { TextTag } from "../../../../utils/Typography";

const postData = [
  {
    name: "",
  },
  {
    name: "First Field",
  },
  {
    name: "Second Field",
  },
  {
    name: "Third Field",
  },
  {
    name: "Fourth Field",
  },
  {
    name: "Five Field",
  },
];

const AddNewProject = () => {
  return (
    <div className="px-8 pt-8 pb-16 bg-white rounded-[20px] max-w-[774px] w-full">
      <div className="flex flex-col gap-[42px] max-w-[512px] w-full">
        <div className="flex flex-col gap-6">
          <h6 className="tracking-[ -0.2px] font-medium">Connections</h6>
          <div className="flex items-center gap-8">
            <TextTag as="label" text={"Google Analytics"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Button text="Connect" className="!py-[7px] !px-[12px] !text-sm font-medium bg-transparent border-[2px]  border-[#2F67DD]" />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={"Account"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Select
              className="max-w-[300px] w-full"
              data={postData}
              companiesDrop={false}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={""}
              leftText={""}
              onClick={() => {}}
              isDateM={false}
              simpleDropDown
            />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={"Property"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Select
              className="max-w-[300px] w-full"
              data={postData}
              companiesDrop={false}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={""}
              leftText={""}
              onClick={() => {}}
              isDateM={false}
              simpleDropDown
            />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={"GSC property"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Select
              className="max-w-[300px] w-full"
              data={postData}
              companiesDrop={false}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={""}
              leftText={""}
              onClick={() => {}}
              isDateM={false}
              simpleDropDown
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="tracking-[ -0.2px] font-medium">Add new folder</h6>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={"Folder name"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <InputField className="max-w-[300px] w-full" />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={"Folder location"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Select
              className="max-w-[300px] w-full"
              data={postData}
              companiesDrop={false}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={""}
              leftText={""}
              onClick={() => {}}
              isDateM={false}
              simpleDropDown
            />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={""} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <InputField className="max-w-[300px] w-full" />
          </div>
          <div className="flex w-full items-center gap-8">
            <TextTag as="label" text={""} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Button text="Add folder" className="!py-[10px] !px-[16px] font-medium tracking-[-0.16px] bg-[#E0E9FA]" />
          </div>
        </div>
        <div className="">
          <Button text="Add project" className="!py-[14px] !px-[20px] font-medium tracking-[-0.16px] text-white bg-[#2F67DD]" />
        </div>
      </div>
    </div>
  );
};

export default AddNewProject;
