import React, { useState } from "react";
import Select from "../../utils/Select";
import Card from "../../utils/Cards";
import ComparePost from "../../utils/Error";
import Trading from "../../utils/Trading";
import DeleteModal from "../../utils/DeleteModal";
import Chart from "../../components/GraphChart/charts";
import {
  AddPostIcon,
  BackIcon,
  CalendarIcon,
  CloseIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
  IncreaseIcon,
  OpenNewIcon,
} from "../../icons";
import { TextTag } from "../../utils/Typography";

import BackgroundImage1 from "../../assets/images/png/image1.png";
import PostCompare from "./postCompare";
import TagDrapdown from "../../components/PostFilter/tagDropdown";
import { Link } from "react-router-dom";
const dateData = [
  {
    name: "7 days",
  },
  {
    name: "14 days",
  },
  {
    name: "30 days",
  },
  {
    name: "60 days",
  },
  {
    name: "90 days",
  },
];

const Index = () => {
  const [isDateM, setIsDateM] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto sm:px-10 sm:pb-16 px-5 pb-8 pt-0">
      <div className="common-bg-color">
        <div className="flex justify-between flex-wrap sm:flex-nowrap items-center">
          <div className="flex gap-2 justify-between items-center py-6">
            <Link to={"/#"} className="rounded-full !p-[10px] bg-lightBlue">
              <BackIcon />
            </Link>
            <TextTag
              as="h5"
              text={"Post details"}
              className={"h5"}
              color={""}
            />
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
              dateOnCancel={() => setIsDateM(false)}
              multiSelect={true}
              dateOnApply={() => {
                setIsOpen(true);
              }}
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
              <TextTag
                as="p"
                text={"Tags"}
                className={"p-small mb-2"}
                color={"text-textGray"}
              />
              {/* tag names */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Digital Nomad"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Visa"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Country"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"List"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Popular"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Essentials"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Travel"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Explore"}
                    className={"p-medium"}
                    color={"text-tagBlue"}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setIsOpenDelete(true);
                    }}
                  >
                    <CloseIcon color={"#274C9B"} />
                  </button>
                </div>
                <TagDrapdown
                  onclick={() => setIsOpen(true)}
                  onClear={() => {}}
                  onChange={() => {}}
                  addTagDropdown={true}
                  createTag={""}
                />
              </div>
            </div>
          </div>
          <ComparePost
            icon={<AddPostIcon />}
            heading={"Compare with another post!"}
            text={"Add another post and compare performance."}
            buttonText={"Add post to compare"}
            onClick={() => {
              setIsOpen(true);
            }}
            className={"bg-lightBlue rounded-[20px]"}
            textStyling={"!mt-1 !bg-lightBlue"}
            buttonStyling={
              "!text-customBlue !bg-lightBlue border-2 border-solid !border-customBlue font-medium"
            }
            path={""}
          />
        </div>
        {/* User trends */}
        <div className="md:p-8 p-5 mb-6 bg-white rounded-[20px] ">
          <div className="flex justify-between md:items-center items-baseline mb-6">
            <TextTag as="h5" text={"User trends"} className={"h5"} color={""} />
            <TextTag
              as="p"
              text={"30 days"}
              className={"p-medium"}
              color={"text-primaryGray"}
            />
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
              className={"!bg-commonBlue"}
              trendNumbers={"618"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
            <Trading
              trendLabel={"Average engagement time"}
              className={"!bg-commonBlue"}
              trendNumbers={"3m 25s"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Graph */}
          <Chart />
        </div>
        {/* Page view trends */}
        <div className="md:p-8 p-5 mb-6 bg-white rounded-[20px]">
          <div className="flex justify-between md:items-center items-baseline mb-6">
            <TextTag
              as="h5"
              text={"Page view trends"}
              className={"h5"}
              color={""}
            />
            <TextTag
              as="p"
              text={"30 days"}
              className={"p-medium"}
              color={"text-primaryGray"}
            />
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
              className={"!bg-commonBlue"}
              trendNumbers={"1,213"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
            <Trading
              trendLabel={"Average time on page"}
              className={"!bg-commonBlue"}
              trendNumbers={"2m 47s"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Graph */}
          <Chart />
        </div>
        {/* Queries */}
        <div className="md:p-8 p-5  bg-white rounded-[20px]">
          <div className="flex justify-between md:items-center items-baseline mb-6">
            <TextTag as="h5" text={"Queries"} className={"h5"} color={""} />
            <TextTag
              as="p"
              text={"30 days"}
              className={"p-medium"}
              color={"text-primaryGray"}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-8">
            <Trading
              trendLabel={"Total keywords"}
              className={"!bg-commonBlue"}
              trendNumbers={"16"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
            <Trading
              trendLabel={"Best keyword"}
              className={"!bg-commonBlue"}
              trendNumbers={"Keyword"}
              trendMarkup={"12.5%"}
              trendLabelColor={"text-textGray"}
              trendNumbersColor={""}
              trendMarkupColor={"text-success-300"}
            />
          </div>
          {/* Table */}
          <div className="!rounded-2xl md:overflow-hidden overflow-scroll">
            <table className="w-full">
              {/* 1st row */}
              <tr className=" text-end ">
                <th
                  scope="row"
                  className="w-[50%] p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 !text-start border-r border-b common-bg-color"
                >
                  Keyword
                </th>
                <th
                  scope="row"
                  className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                >
                  Pos. 25 June
                </th>
                <th
                  scope="row"
                  className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                >
                  Pos. 25 July
                </th>
                <th
                  scope="row"
                  className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                >
                  Diff
                </th>
                <th
                  scope="row"
                  className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                >
                  {" "}
                  Est. traffic
                </th>
                <th
                  scope="row"
                  className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-b common-bg-color"
                >
                  Vol.
                </th>
              </tr>
              {/* 2nd row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[52.5%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3  border-r border-b border-lightBlue"
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue"
                >
                  1,300
                </th>
              </tr>
              {/* 3rd row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                >
                  1,300
                </th>
              </tr>
              {/* 4th row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                >
                  1,300
                </th>
              </tr>
              {/* 5th row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                >
                  1,300
                </th>
              </tr>
              {/* 6th row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                >
                  1,300
                </th>
              </tr>
              {/* 7th row */}
              <tr className="text-end">
                <td
                  scope="row"
                  className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-lightBlue "
                >
                  Keyword
                </td>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                >
                  3
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                >
                  1
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                >
                  <span className="flex gap-1 items-center justify-end">
                    2<IncreaseIcon />
                  </span>
                </th>
                <th
                  scope="row"
                  className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                >
                  15.77
                </th>
                <th
                  scope="row"
                  className=" p-medium focus:bg-lightBlue p-3 border-lightBlue "
                >
                  1,300
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <PostCompare isOpen={isOpen} setIsOpen={setIsOpen} />
      <DeleteModal
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
        onDelete={() => {}}
        tagName={"tag named"}
      />
    </div>
  );
};

export default Index;
