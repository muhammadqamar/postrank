import React from "react";

import Select from "../../../utils/Select";
import Button from "../../../utils/Button";
import InputField from "../../../utils/InputField";
import { TextTag } from "../../../utils/Typography";
import { BackIcon } from "../../../icons";

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

type props = {
  setAddProject: (value: string) => void;
};

const AddNewProject = ({ setAddProject }: props) => {
  return (
    <div className="sm:px-8 px-0 sm:pt-8 pt-2 sm:pb-16 pb-0 bg-white rounded-[20px] w-full">
      <div className="flex flex-col gap-[42px] w-full">
        <div className="flex items-center gap-4">
          <div
            className="p-[10px] bg-lightBlue w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setAddProject("projects")}
          >
            <BackIcon />
          </div>
          <TextTag
            as="label"
            text={"Add new project"}
            className={
              "text-[25px] leading-[32px] font-medium max-sm:text-xl tracking-[-0.4px]"
            }
            color={"text-[#000000]"}
          />
        </div>

        <div className="flex flex-col gap-6 sm:pt-8 pt-0">
          <h6 className="tracking-[-0.2px] h6">Connections</h6>
          <div className="flex items-start lg:items-center gap-5 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"Google Analytics"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
            <Button
              text="Connect"
              className="!py-[7px] !px-[12px] p-medium !font-medium bg-transparent border-[2px]  border-customBlue"
              onClick={() => {}}
              type={undefined}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"Account"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
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
              dateOnCancel={() => {}}
              multiSelect={false}
              dateOnApply={() => {}}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"Property"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
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
              dateOnCancel={() => {}}
              multiSelect={false}
              dateOnApply={() => {}}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"GSC property"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
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
              dateOnCancel={() => {}}
              multiSelect={false}
              dateOnApply={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="tracking-[ -0.2px] font-medium">Add new folder</h6>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"Folder name"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
            <InputField
              className="max-w-[300px] w-full"
              label=""
              type="text"
              name="folder name"
              placeholder=""
              icon=""
              onChange={undefined}
              onBlur={undefined}
              value={undefined}
              error={undefined}
              touch={undefined}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={"Folder location"}
              className={"p-medium max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
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
              dateOnCancel={() => {}}
              multiSelect={false}
              dateOnApply={() => {}}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={""}
              className={
                "text-sm font-normal max-w-full md:max-w-[180px] w-full"
              }
              color={"text-[#464646]"}
            />
            <InputField
              className="max-w-[300px] w-full"
              label=""
              type="text"
              name="folder name"
              placeholder=""
              icon=""
              onChange={undefined}
              onBlur={undefined}
              value={undefined}
              error={undefined}
              touch={undefined}
            />
          </div>
          <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
            <TextTag
              as="label"
              text={""}
              className={"text-sm font-normal max-w-[180px] w-full"}
              color={"text-[#464646]"}
            />
            <Button
              text="Add folder"
              className="!py-[10px] !px-[16px] !leading-5 !font-medium tracking-[-0.16px] bg-lightBlue text-tagBlue"
              onClick={() => {}}
              type={undefined}
            />
          </div>
        </div>
        <div className="">
          <Button
            text="Add project"
            className="!py-[14px] !px-[20px] !leading-5 font-medium tracking-[-0.16px] text-white !bg-customBlue"
            onClick={() => setAddProject("createProject")}
            type={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewProject;
