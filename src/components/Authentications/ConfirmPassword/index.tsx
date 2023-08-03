import React from "react";
import Button from "../../../utils/Button";

const Index = () => {
  const handleChange = () => {
    console.log("Submittted");
  };
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center pt-[132px] pb-[506px] text-center w-[320px] m-auto">
        <h6 className="h6 font-normal text-gray-900">Link has been sent.</h6>
        <p className="p-medium">
          We just sent a link with a temporary password to your email.
        </p>
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
