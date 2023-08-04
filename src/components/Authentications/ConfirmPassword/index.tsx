import React from "react";
import Button from "../../../utils/Button";
import { TextTag } from "../../../utils/Typography";

const Index = () => {
  const handleChange = () => {
    console.log("Submittted");
  };
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center pt-[132px] pb-[506px] text-center w-[320px] m-auto">
        <TextTag
          as="h6"
          text={"Link has been sent."}
          className={"h6 font-normal"}
          color={""}
        />
        <TextTag
          as="p"
          text={"We just sent a link with a temporary password to your email."}
          className={"p-medium"}
          color={""}
        />
        <div>
          <Button
            text="Back to login"
            className=" !bg-blue-500 !text-white flex justify-center mt-[42px]"
            type={undefined}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
