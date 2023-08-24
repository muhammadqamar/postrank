import React from "react";
import { IncreaseIcon } from "../../icons";
import { TextTag } from "../Typography";

interface IndexProps {
  className: string;
  trendLabel: string;
  trendLabelColor: string;
  trendNumbersColor: string;
  trendNumbers: string;
  trendMarkup: string;
  trendMarkupColor: string;
}
const Index: React.FC<IndexProps> = ({
  className,
  trendLabel,
  trendLabelColor,
  trendNumbers,
  trendNumbersColor,
  trendMarkup,
  trendMarkupColor,
}) => {
  return (
    <div
      className={`w-full bg-customBlue md:p-4 p-3 rounded-2xl flex flex-col justify-center ${className}`}
    >
      <div>
        <TextTag
          as="p"
          text={trendLabel}
          className={"p-small"}
          color={trendLabelColor}
        />
      </div>
      <div className="flex gap-4 items-center">
        <TextTag
          as="h4"
          text={trendNumbers}
          className={"h4 !font-bold"}
          color={trendNumbersColor}
        />
        <div className="flex gap-1">
          <IncreaseIcon />
          <TextTag
            as="p"
            text={trendMarkup}
            className={"p-medium !font-medium"}
            color={trendMarkupColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
