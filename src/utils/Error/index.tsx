import React, { MouseEventHandler } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

interface IndexProps {
  icon: React.ReactNode;
  heading: string;
  textStyling: string;
  pathStyling: string;
  text: string;
  path: string;
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
  pathStyling,
  text,
  path,
  buttonText,
  onClick,
  buttonStyling,
}) => {
  return (
    <div
      className={`pt-4 md:px-0 px-5 flex flex-col gap-16 w-full ${className}`}
    >
      <div className="flex flex-col gap-6 items-center m-auto">
        {icon}
        <div className="text-center">
          <h6 className="h6 text-gray-900">{heading}</h6>
          <p className={`p-medium !leading-5 ${textStyling}`}>{text}</p>
        </div>
        <Link to={path} className={pathStyling}>
          <Button
            text={buttonText}
            onClick={onClick}
            className={` !bg-customBlue text-white flex justify-center mb-4 ${buttonStyling}`}
            type={undefined}
          />
        </Link>
      </div>
    </div>
  );
};

export default Index;
