import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import PostFilter from "../../../components/PostFilter";
import AddNewProject from "../../../utils/AddNewProject";
import PostError from "../../../utils/Post";
import Trading from "../../../utils/Trading";
import {
  CitizenRemoteIcon,
  DownArrowIcon,
  IncreaseIcon,
  RightArrowIcon,
} from "../../../icons";

type DateValueType = {
  startDate: Date | null;
  endDate: Date | null;
};

const Index = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChange = (newValue: any) => {
    // Convert the received value to DateValueType
    const newValueAsDateValueType: DateValueType = {
      startDate: newValue?.startDate || null,
      endDate: newValue?.endDate || null,
    };
    setValue(newValueAsDateValueType);
  };
  return (
    <div>
      <PostFilter />
      <div className="bg-white p-8 flex justify-between gap-4">
        <Trading
          trendLabel={"Users"}
          className={""}
          trendNumbers={"1,352"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-blue-200"}
          trendNumbersColor={"text-white"}
          trendMarkupColor={"text-blue-200"}
        />
        <Trading
          trendLabel={"New users"}
          className={"!bg-blue-200"}
          trendNumbers={"618"}
          trendMarkup={"12.5%"}
          trendLabelColor={"text-gray-700"}
          trendNumbersColor={""}
          trendMarkupColor={"text-success-300"}
        />
      </div>
      <div className="p-8 flex flex-col gap-2">
        <PostError
          onClick={() => {}}
          postText={"Post #1"}
          className=""
          listColor={"bg-blue-500"}
        />
        <PostError
          onClick={() => {}}
          postText={"Post #1"}
          className=""
          listColor={"bg-orange-300"}
        />
      </div>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
      <AddNewProject
        icon={<CitizenRemoteIcon />}
        newProjectTitle={"Citizen Remote"}
        newProjectText={"4 folders"}
        ArrowIcon={<RightArrowIcon />}
        className={"p-medium "}
        newProjectTitleColor={""}
        newProjectTextColor={"text-gray-700"}
      />

      <div className="overflow-x-auto sm:rounded-lg py-10 px-5 bg-white mt-4">
        <table className="w-full">
          {/* 1st row */}
          <tr className=" text-end ">
            <th
              scope="row"
              className="w-[50%] p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 !text-start"
            >
              Keyword
            </th>
            <th
              scope="row"
              className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3"
            >
              Pos. 25 June
            </th>
            <th
              scope="row"
              className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3"
            >
              Pos. 25 July
            </th>
            <th
              scope="row"
              className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3"
            >
              Diff
            </th>
            <th
              scope="row"
              className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3"
            >
              <span className="flex items-center gap-1 justify-end">
                {" "}
                Est. traffic
                <DownArrowIcon />
              </span>
            </th>
            <th
              scope="row"
              className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3"
            >
              Vol.
            </th>
          </tr>
          {/* 2nd row */}
          <tr className="text-end">
            <td
              scope="row"
              className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3"
            >
              Keyword
            </td>
            <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 ">
              3
            </th>
            <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 ">
              3
            </th>
            <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 ">
              1
            </th>
            <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 ">
              <span className="flex gap-1 items-center justify-end">
                2<IncreaseIcon />
              </span>
            </th>
            <th scope="row" className=" p-MEDIUM focus:bg-blue-100 p-3 ">
              15.77
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Index;
