import React, { MouseEventHandler } from "react";
import Button from "../Button";

interface IndexProps {
  icon: React.ReactNode;
  heading: string;
  textStyling: string;
  text: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  buttonStyling: string;
}

const Index: React.FC<IndexProps> = ({
  className,
  icon,
  heading,
  textStyling,
  text,
  buttonText,
  onClick,
  buttonStyling,
}) => {
  return (
    <div
      className={`pt-4 md:px-10 px-5 flex flex-col gap-16 w-full ${className}`}
    >
      <div className="flex flex-col gap-6 items-center m-auto">
        {icon}
        <div className="text-center">
          <h6 className="h6 text-gray-900">{heading}</h6>
          <p className={`p-medium ${textStyling}`}>{text}</p>
        </div>
        <Button
          text={buttonText}
          onClick={onClick}
          className={` !bg-customBlue text-white flex justify-center mb-4 ${buttonStyling}`}
          type={undefined}
        />
      </div>
    </div>
  );
};

export default Index;
