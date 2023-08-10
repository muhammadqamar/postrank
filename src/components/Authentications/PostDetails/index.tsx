import React, { useState } from "react";
import Select from "../../../utils/Select";
import Card from "../../../utils/Cards";
import ComparePost from "../../../utils/Error";
import Trading from "../../../utils/Trading";
import Chart from "../../PostDetail/charts";
import { AddPostIcon, BackIcon, CalendarIcon, CloseIcon, ContactIcon, DotIcon, EyeIcon, IncreaseIcon, OpenNewIcon } from "../../../icons";
import { TextTag } from "../../../utils/Typography";

import BackgroundImage1 from "../../../assets/images/png/image1.png";
const dateData = [
  {
    name: "Today",
  },
  {
    name: "Yesterday",
  },
  {
    name: "Last week",
  },
  {
    name: "Last month",
  },
  {
    name: "Last year",
  },
];

const Index = () => {
  const [isDateM, setIsDateM] = useState<boolean>(false);
  return (
    <div className="max-w-7xl m-auto">
      <div className="common-bg-color px-10 pb-16 ">
        <div className="flex justify-between flex-wrap sm:flex-nowrap items-center">
          <div className="flex gap-2 justify-between items-center py-6">
            <div className="rounded-full p-[10px] bg-blue-100">
              <BackIcon />
            </div>
            <TextTag as="h5" text={"Post details"} className={"h5 font-normal"} color={""} />
          </div>
          <div>
            <Select
              data={dateData}
              className=""
              companiesDrop={true}
              addIcon={<CalendarIcon color="" />}
              addText={"Custom date"}
              leftIcon={""}
              rightIcon={<CalendarIcon color="#274C9B" />}
              leftText={"Date:"}
              onClick={() => setIsDateM(true)}
              isDateM={isDateM}
              simpleDropDown={false}
            />
          </div>
        </div>
        {/* add post to compare */}
        <div className="flex md:flex-nowrap flex-wrap gap-6 mb-6 pt-6">
          <div className="flex flex-col w-full">
            <Card
              cardTitle={"66 Digital Nomad Visa Countries in 2023"}
              calendarIcon1={<CalendarIcon color={""} />}
              date1={"12 May, 2023"}
              eyeIcon1={<EyeIcon />}
              quantity1={"2,168"}
              contactIcon1={<ContactIcon />}
              quantity2={"1,352"}
              openNewIcon={<OpenNewIcon />}
              buttonText={""}
              eyeIcon2={undefined}
              quantity3={""}
              contactIcon2={undefined}
              dotImage1={<DotIcon />}
              dotImage2={<DotIcon />}
              dotImage3={undefined}
              quantity4={""}
              backgroundImage={BackgroundImage1}
              className={""}
            />
            {/* tags */}
            <div className="p-5 bg-white rounded-[20px] mt-6">
              <TextTag as="p" text={"Tags"} className={"p-small mb-2"} color={"text-gray-700"} />
              {/* tag names */}
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Digital Nomad"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Visa"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Country"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"List"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Popular"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Essentials"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Travel"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag as="p" text={"Explore"} className={"p-medium"} color={"text-blue-700"} />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <button className="flex gap-[6px] py-[7px] px-[10px] rounded-md w-fit cursor-pointer" onClick={() => {}}>
                  <TextTag as="p" text={"Add Tags"} className={"p-medium"} color={"text-blue-500"} />
                </button>
              </div>
            </div>
          </div>
          <ComparePost
            icon={<AddPostIcon />}
            heading={"Compare with another post!"}
            text={"Add another post and compare performance."}
            buttonText={"Add post to compare"}
            onClick={() => {}}
            className={"bg-blue-100 rounded-[20px]"}
            textStyling={"!mt-1"}
            buttonStyling={"!text-blue-500 !bg-blue-100 border-2 border-solid border-blue-500 font-medium"}
          />
        </div>
        {/* User trends */}
        <div className="p-8 mb-6 bg-white rounded-[20px] ">
          <div className="flex justify-between items-center mb-6">
            <TextTag as="h5" text={"User trends"} className={"h5 font-normal"} color={""} />
            <TextTag as="p" text={"30 days"} className={"p-medium"} color={"text-gray-600"} />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
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
              className={"common-bg-color"}
              trendNumbers={"618"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-gray-700"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
            <Trading
              trendLabel={"Average engagement time"}
              className={"common-bg-color"}
              trendNumbers={"3m 25s"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-gray-700"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Graph */}
          <Chart />
        </div>
        {/* Page view trends */}
        <div className="p-8 mb-6 bg-white rounded-[20px]">
          <div className="flex justify-between items-center mb-6">
            <TextTag as="h5" text={"Page view trends"} className={"h5 font-normal"} color={""} />
            <TextTag as="p" text={"30 days"} className={"p-medium"} color={"text-gray-600"} />
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
            <Trading
              trendLabel={"Pageviews"}
              className={""}
              trendNumbers={"2,168"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-blue-200"}
              trendNumbersColor={"text-white"}
              trendMarkupColor={"text-blue-200"}
            />
            <Trading
              trendLabel={"Unique pageviews"}
              className={"common-bg-color"}
              trendNumbers={"1,213"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-gray-700"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
            <Trading
              trendLabel={"Average time on page"}
              className={"common-bg-color"}
              trendNumbers={"2m 47s"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-gray-700"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Graph */}
          <Chart />
        </div>
        {/* Queries */}
        <div className="p-8 mb-6 bg-white rounded-[20px]">
          <div className="flex justify-between items-center mb-6">
            <TextTag as="h5" text={"Queries"} className={"h5 font-normal"} color={""} />
            <TextTag as="p" text={"30 days"} className={"p-medium"} color={"text-gray-600"} />
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-8">
            <Trading
              trendLabel={"Total keywords"}
              className={""}
              trendNumbers={"16"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-blue-200"}
              trendNumbersColor={"text-white"}
              trendMarkupColor={"text-blue-200"}
            />
            <Trading
              trendLabel={"Best keyword"}
              className={"common-bg-color"}
              trendNumbers={"Keyword"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-gray-700"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Table */}
          <div className="!rounded-2xl overflow-hidden">
            <table className="w-full">
              {/* 1st row */}
              <tr className=" text-end ">
                <th scope="row" className="w-[50%] p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 !text-start border-r border-b common-bg-color">
                  Keyword
                </th>
                <th scope="row" className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 border-r border-b common-bg-color">
                  Pos. 25 June
                </th>
                <th scope="row" className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 border-r border-b common-bg-color">
                  Pos. 25 July
                </th>
                <th scope="row" className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 border-r border-b common-bg-color">
                  Diff
                </th>
                <th scope="row" className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 border-r border-b common-bg-color">
                  {" "}
                  Est. traffic
                </th>
                <th scope="row" className=" p-small text-gray-700 bg-blue-200 focus:bg-blue-100 p-3 border-b common-bg-color">
                  Vol.
                </th>
              </tr>
              {/* 2nd row */}
              <tr className="text-end">
                <td scope="row" className="w-[52.5%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-b border-blue-200">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3  border-r border-b border-blue-200">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-b border-blue-200">
                  1,300
                </th>
              </tr>
              {/* 3rd row */}
              <tr className="text-end">
                <td scope="row" className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-b border-blue-200">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-b border-blue-200 ">
                  1,300
                </th>
              </tr>
              {/* 4th row */}
              <tr className="text-end">
                <td scope="row" className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-b border-blue-200">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-b border-blue-200 ">
                  1,300
                </th>
              </tr>
              {/* 5th row */}
              <tr className="text-end">
                <td scope="row" className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-b border-blue-200">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-b border-blue-200 ">
                  1,300
                </th>
              </tr>
              {/* 6th row */}
              <tr className="text-end">
                <td scope="row" className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-b border-blue-200">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-b border-blue-200 ">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-b border-blue-200 ">
                  1,300
                </th>
              </tr>
              {/* 7th row */}
              <tr className="text-end">
                <td scope="row" className="w-[50%] p-medium  focus:bg-blue-100  !text-start p-3 border-r border-blue-200 ">
                  Keyword
                </td>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-blue-200 ">
                  3
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-blue-200 ">
                  1
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-blue-200 ">
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th scope="row" className=" p-medium  focus:bg-blue-100 p-3 border-r border-blue-200 ">
                  15.77
                </th>
                <th scope="row" className=" p-medium focus:bg-blue-100 p-3 border-blue-200 ">
                  1,300
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
