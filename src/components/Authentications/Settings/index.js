import React from "react";
import AccountDetails from "./accountDetails";
import Feedback from "./feedback";
import Supports from "./support";

const Index = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-8">
      <AccountDetails />
      <Feedback />
      <Supports />
    </div>
  );
};

export default Index;
