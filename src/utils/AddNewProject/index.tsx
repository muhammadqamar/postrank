import React, { MouseEventHandler } from "react";
import { TextTag } from "../Typography";

interface IndexProps {
  icon?: React.ReactNode;
  newProjectTitle: string;
  className: string;
  newProjectTitleColor: string;
  newProjectText: string;
  newProjectTextColor: string;
  ArrowIcon: React.ReactNode;
  PlusIcon: React.ReactNode;
  bg: string;
  classNames: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Index: React.FC<IndexProps> = ({
  icon,
  newProjectTitle,
  className,
  onClick,
  newProjectTitleColor,
  newProjectText,
  newProjectTextColor,
  ArrowIcon,
  PlusIcon,
  classNames,
}) => {
  return (
    <div
      className={`w-full p-4 rounded-2xl bg-white flex justify-between items-center ${classNames}`}
    >
      <div className="flex gap-3 !item-center">
        {icon && <span className="!w-10 !h-10">{icon}</span>}
        <div
          className={`flex flex-col ${
            PlusIcon ? "justify-center" : "justify-between"
          }`}
        >
          <TextTag
            as="p"
            text={newProjectTitle}
            className={className}
            color={newProjectTitleColor}
          />
          <TextTag
            as="p"
            text={newProjectText}
            className={"p-small"}
            color={newProjectTextColor}
          />
        </div>
      </div>
      {ArrowIcon ? (
        <span className="cursor-pointer" onClick={onClick}>
          {ArrowIcon}
        </span>
      ) : (
        PlusIcon && (
          <span className="cursor-pointer" onClick={onClick}>
            {PlusIcon}
          </span>
        )
      )}
    </div>
  );
};

export default Index;
