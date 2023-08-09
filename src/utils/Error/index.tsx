import React, { MouseEventHandler } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

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
    <div className={`pt-16 px-10 flex flex-col gap-16 w-full ${className}`}>
      <div className="flex flex-col gap-6 items-center">
        {icon}
        <div className="text-center">
          <h6 className="h6 text-gray-900">{heading}</h6>
          <p className={`p-medium ${textStyling}`}>{text}</p>
        </div>
        <Link to={"/login"}>
          <Button
            text={buttonText}
            onClick={onClick}
            className={` bg-blue-500 text-white flex justify-center mb-4 ${buttonStyling}`}
            type={undefined}
          />
        </Link>
      </div>
    </div>
  );
};

export default Index;
