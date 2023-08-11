import React from "react";

import Select from "../../../utils/Select";
import Button from "../../../utils/Button";
import InputField from "../../../utils/InputField";
import { TextTag } from "../../../utils/Typography";
import { CheckRounded, Upload } from "../../../icons";
import { RightArrowIcon } from "../../../icons";

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

const CreatedProject = ({ setAddProject }) => {
  return (
    <div className="px-8 pt-8 pb-16 bg-white rounded-[20px] max-w-[774px] w-full">
      <div className="flex flex-col gap-[42px] max-w-[512px] w-full">
        <div className="flex items-center gap-4">
          <div className="p-[10px] bg-[#E0E9FA] w-10 h-10 rounded-full cursor-pointer rotate-180" onClick={() => setAddProject("projects")}>
            <RightArrowIcon />
          </div>
          <TextTag as="label" text={"Add new project"} className={"text-[25px] leading-[32px] font-medium tracking-[-0.4px]"} color={"text-[#000000]"} />
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="tracking-[ -0.2px] font-medium">Project information</h6>

          <div className="flex items-center gap-8 pt-[10px]">
            <TextTag as="label" text={"Project name"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <InputField className="max-w-[300px] w-full" />
          </div>
          <div className="flex items-center gap-8">
            <TextTag as="label" text={"Logo"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <Upload />
            <div className="flex items-center gap-2">
              <Button text="Upload new" className="!py-[7px] !px-[12px] !text-sm font-medium bg-transparent border-[2px]  border-[#2F67DD]" />
              <Button text="Delete" className="!py-[7px] !px-[12px] !text-sm font-medium bg-transparent !text-black" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="tracking-[ -0.2px] font-medium">Connections</h6>

          <div className="flex items-center gap-8 pt-[10px]">
            <TextTag as="label" text={"Google Analytics"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            {/* check Connected */}
            <div className="flex gap-2 items-center">
              <CheckRounded />
              <TextTag as="span" text={"Connected"} className={"text-base font-medium tracking-[-0.16px]"} color={"text-[#55A63F]"} />
            </div>

            <TextTag as="p" text={"Disconnect"} className={"text-sm font-medium px-[12px]"} color={"text-[#000000]"} />
          </div>

          <div className="flex w-full items-center gap-8 pt-[10px]">
            <TextTag as="label" text={"Account"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <TextTag as="p" text={"Citizen Remote"} className={"text-base font-medium tracking-[-0.16px]"} color={"text-[#000000]"} />
          </div>

          <div className="flex w-full items-center gap-8 pt-[10px]">
            <TextTag as="label" text={"Property"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <TextTag as="p" text={"Citizen Remote Marketing"} className={"text-base font-medium tracking-[-0.16px]"} color={"text-[#000000]"} />
          </div>

          <div className="flex w-full items-center gap-8 pt-[10px]">
            <TextTag as="label" text={"Google Search Console"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            {/* check Connected */}
            <div className="flex gap-2 items-center">
              <CheckRounded />
              <TextTag as="span" text={"Connected"} className={"text-base font-medium tracking-[-0.16px]"} color={"text-[#55A63F]"} />
            </div>
          </div>

          <div className="flex w-full items-center gap-8 py-[10px]">
            <TextTag as="label" text={"Property"} className={"text-sm font-normal max-w-[180px] w-full"} color={"text-[#464646]"} />
            <TextTag as="p" text={"Citizen Remote Marketing"} className={"text-base font-medium tracking-[-0.16px]"} color={"text-[#000000]"} />
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
        <div className="flex items-center justify-between">
          <Button text="Save" className="!py-[14px] !px-[20px] font-medium tracking-[-0.16px] text-white !bg-[#2F67DD]" />
          <Button text="Delete project" className="!py-[10px] !px-0 font-medium tracking-[-0.16px] text-[#464646] bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default CreatedProject;
