import React from "react";
import AccountDetails from "./accountDetails";
// import AddNewProject from "./AddProject";
import CitizenRemote from "./AddProject/citizenRemote";

const Index = () => {
  return (
    <div>
      <AccountDetails />
      {/* <AddNewProject /> */}
      <CitizenRemote />
    </div>
  );
};

export default Index;
