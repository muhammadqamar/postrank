import React, { MouseEventHandler } from "react";
import Button from "../Button";

interface IndexProps {
  icon: string | undefined;
  heading: string;
  text: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Index: React.FC<IndexProps> = ({
  icon,
  heading,
  text,
  buttonText,
  onClick,
}) => {
  return (
    <div className="bg-white pt-16 px-10 flex flex-col gap-16">
      <div className="flex flex-col gap-6 items-center">
        <img src={icon} alt="icon!" />
        <h6 className="h6 text-gray-900">{heading}</h6>
        <p className="p-medium">{text}</p>
        <Button
          text={buttonText}
          onClick={onClick}
          className=" bg-blue-500 text-white flex justify-center mb-4"
          type={undefined}
        />
      </div>
    </div>
  );
};

export default Index;
