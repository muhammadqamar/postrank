import React from "react";
import { IncreaseIcon } from "../../icons";
import { TextTag } from "../Typography";

interface IndexProps {
  className: string;
  trendLabel: string;
  // trendLabelColor: string;
  trendNumbers: string;
  trendMarkup: string;
}
const Index: React.FC<IndexProps> = ({
  className,
  trendLabel,
  // trendLabelColor,
  trendNumbers,
  trendMarkup,
}) => {
  return (
    <div
      className={`w-full bg-blue-500 p-4 rounded-2xl flex flex-col ${className}`}
    >
      <div>
        <TextTag
          as="p"
          text={trendLabel}
          className={"p-small"}
          color={"text-blue-200"}
        />
      </div>
      <div className="flex gap-4 items-center">
        <TextTag
          as="h4"
          text={trendNumbers}
          className={"h4 font-normal"}
          color={"text-white"}
        />
        <div className="flex gap-1">
          <IncreaseIcon />
          <TextTag
            as="p"
            text={trendMarkup}
            className={"p-small"}
            color={"text-blue-200"}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
