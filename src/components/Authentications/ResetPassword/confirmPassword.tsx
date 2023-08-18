import React from "react";
import ConfirmPassword from "../../../utils/Error";

const confirmPassword = () => {
  return (
    <ConfirmPassword
      icon={undefined}
      heading={"Link has been sent."}
      textStyling={"text-textGray"}
      text={"We just sent a link with a temporary password to your email."}
      buttonText={"Back to login"}
      onClick={() => {}}
      className={"max-w-xs"}
      buttonStyling={"w-full"}
    />
  );
};

export default confirmPassword;
