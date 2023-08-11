import React, { useState } from "react";

import AddNewProject from "./addNewProject";
import CreatedProject from "./createdProject";
import { RightArrowIcon, Upload } from "../../../icons";
import AddedProject from "../../../utils/AddNewProject";

const AddProjects = () => {
  const [addProject, setAddProject] = useState("projects");
  return (
    <div className="px-8 pt-8 pb-16 bg-white rounded-[20px] max-w-[774px] w-full">
      <div
        className={`flex flex-col gap-[42px] max-w-[512px] w-full ${
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
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-black text-sm font-medium"
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
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-black text-sm font-medium"
                icon={<Upload />}
                newProjectTitle="Remote"
                newProjectText="4 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-black text-sm font-medium"
                icon={<Upload />}
                newProjectTitle="Remote Access"
                newProjectText="4 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />
              <AddedProject
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-black text-sm font-medium"
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
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-black text-sm font-medium"
                icon={<Upload />}
                newProjectTitle="Remote"
                newProjectText="4 folders"
                ArrowIcon={<RightArrowIcon />}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                onClick={() => {}}
                PlusIcon={undefined}
              />

              <AddedProject
                classNames="max-w-full md:max-w-[221px] w-full !bg-[#F1F6FD]"
                className="text-[#2F67DD] text-sm font-medium"
                icon={<Upload />}
                newProjectTitle="Add New Project"
                ArrowIcon={<RightArrowIcon />}
                PlusIcon
                onClick={() => setAddProject("addProject")}
                newProjectTitleColor={""}
                newProjectTextColor={""}
                bg={""}
                newProjectText={""}
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
