import React, { useState } from "react";

import AddNewProject from "./addNewProject";
import CreatedProject from "./createdProject";
import {
  AddIcon,
  RightArrowIcon,
  TeslaIcon,
  Upload,
  WhaleIcon,
} from "../../../icons";
import AddedProject from "../../../utils/AddNewProject";

const AddProjects = () => {
  const [addProject, setAddProject] = useState("projects");
  return (
    <div className="sm:px-8 px-4 sm:pt-8 pt-4 sm:pb-16 pb-8 bg-white rounded-[20px] w-full">
      <div
        className={`flex flex-col gap-[42px] w-full ${
          addProject && "max-w-full"
        }`}
      >
        {addProject === "projects" ? (
          <div
            className="flex flex-col"
            onClick={() => setAddProject("addProject")}
          >
            <h6 className="text-[25px] leading-[32px] font-medium text-black pb-5">
              Projects
            </h6>
            <div className="flex items-center flex-wrap gap-2 pt-8">
              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-black p-medium !font-medium"
                icon={<Upload />}
                newProjectTitle="Citizen Remote"
                newProjectText="4 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-black p-medium !font-medium"
                icon={<WhaleIcon />}
                newProjectTitle="WhaleINC"
                newProjectText="2 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-black p-medium !font-medium"
                icon={<TeslaIcon />}
                newProjectTitle="Tesla"
                newProjectText="1 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-black p-medium !font-medium"
                icon={<Upload />}
                newProjectTitle="Apple"
                newProjectText="4 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-black p-medium !font-medium"
                icon={<Upload />}
                newProjectTitle="Mastercard"
                newProjectText="6 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />

              <AddedProject
                classNames="max-w-full lg:max-w-[252px] w-full common-bg-color"
                className="text-[#2F67DD] p-medium !font-medium"
                icon={<Upload />}
                newProjectTitle="Add New Project"
                ArrowIcon={<AddIcon color="" />}
                PlusIcon
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                newProjectText={""}
                onClick={() => setAddProject("addproject")}
              />
            </div>
          </div>
        ) : addProject === "addProject" ? (
          <AddNewProject setAddProject={setAddProject} />
        ) : (
          addProject === "createProject" && (
            <CreatedProject setAddProject={setAddProject} />
          )
        )}
      </div>
    </div>
  );
};

export default AddProjects;
