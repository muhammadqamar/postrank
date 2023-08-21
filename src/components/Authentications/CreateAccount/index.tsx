import React from "react";
import { useState } from "react";
import ConnectProject from "./connectProject";
import AddNewFolder from "./addNewFolder";
import Success from "./success";
import CreateNewProject from "./createNewProject";
import CreateAnAccountEmail from "./createAnAccountEmail";
import { Link } from "react-router-dom";
import { TextTag } from "../../../utils/Typography";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string | null>("email");
  return (
    <div className="w-full mx-auto bg-white">
      {activeTab === "email" ||
      activeTab === "connectProject" ||
      activeTab === "addNewFolder" ? (
        <div className="pt-[27px] pl-10">
          <Link to={"/#"}>
            <TextTag
              as="h6"
              text="postrank.io"
              color="text-black"
              className="p-medium !font-semibold"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
      {activeTab === "email" && (
        <CreateAnAccountEmail setActiveTab={setActiveTab} />
      )}
      {activeTab === "connectProject" && (
        <ConnectProject setActiveTab={setActiveTab} />
      )}
      {activeTab === "createNewProject" && (
        <CreateNewProject setActiveTab={setActiveTab} />
      )}
      {activeTab === "addNewFolder" && (
        <AddNewFolder setActiveTab={setActiveTab} />
      )}
      {activeTab === "success" && <Success />}
    </div>
  );
};

export default Index;
