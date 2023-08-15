import React from "react";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../utils/Button";
// import { CloseIcon } from "../../icons";
import { TextTag } from "../../utils/Typography";
import Search from "../../utils/SearchField";
import Card from "../../utils/Cards";

import {
  CalendarIcon,
  CloseIcon,
  // CloseIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
} from "../../icons";

import BackgroundImage1 from "../../assets/images/png/image1.png";
import BackgroundImage2 from "../../assets/images/png/image2.png";
import BackgroundImage3 from "../../assets/images/png/image3.png";
import BackgroundImage4 from "../../assets/images/png/image4.png";
import BackgroundImage5 from "../../assets/images/png/image5.png";
import BackgroundImage6 from "../../assets/images/png/image6.png";
import BackgroundImage7 from "../../assets/images/png/image7.png";
import BackgroundImage8 from "../../assets/images/png/image8.png";
import BackgroundImage9 from "../../assets/images/png/image9.png";

type modalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const cardData = [
  {
    cardTitle: "66 Digital Nomad Visa Countries in 2023",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage1,
    className: "sm:w-[384px]",
  },
  {
    cardTitle:
      "The Rise in Structured Lifestyle Tourism: What Makes a Great Workation?",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage2,
    className: "sm:w-[384px]",
  },
  {
    cardTitle:
      "How to Travel with Pets Internationally – Comprehensive Guide for Digital Nomads",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage3,
    className: "sm:w-[384px]",
  },
  {
    cardTitle:
      "What Is a Slomad, Slomad Lifestyle & How to Become a Digital One?",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage4,
    className: "sm:w-[384px]",
  },
  {
    cardTitle: "Work Authorization for Remote Workers",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage5,
    className: "sm:w-[384px]",
  },
  {
    cardTitle:
      "How to Work from Anywhere: Jobs, Benefits, Challenges, TOP 40 Companies Hiring",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage6,
    className: "sm:w-[384px]",
  },
  {
    cardTitle: "Bosnia and Herzegovina Work n’ Sunshine Event Recap",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage7,
    className: "sm:w-[384px]",
  },
  {
    cardTitle: "Everything Gran Canaria Has to Offer Digital Nomads",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage8,
    className: "sm:w-[384px]",
  },
  {
    cardTitle:
      "How Much Do Digital Nomads Make? – Digital Nomad Salaries in 2023",
    calendarIcon1: <CalendarIcon color={""} />,
    date1: "12 May, 2023",
    eyeIcon1: undefined,
    quantity1: "",
    contactIcon1: undefined,
    quantity2: "",
    openNewIcon: undefined,
    buttonText: "View details",
    eyeIcon2: <EyeIcon />,
    quantity3: "2,168",
    contactIcon2: <ContactIcon />,
    dotImage1: undefined,
    dotImage2: undefined,
    dotImage3: <DotIcon />,
    quantity4: "1,352",
    backgroundImage: BackgroundImage9,
    className: "sm:w-[384px]",
  },
];

const PostCompare = ({ isOpen, setIsOpen }: modalProps) => {
  return (
    <div className="">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1280px] transform overflow-hidden rounded-[20px] common-bg-color p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="!max-w-7xl !mx-auto flex items-center justify-between gap-2"
                  >
                    <div className="flex justify-between items-center  ">
                      <div className="flex gap-4 items-center w-[380px]">
                        <div className="p-[5px] rounded-full bg-lightBlue cursor-pointer">
                          <Button
                            text=""
                            type={"button"}
                            onClick={() => setIsOpen(false)}
                            className="!p-[10px] bg-lightBlue"
                            icon={<CloseIcon color="#274C9B" />}
                          />
                        </div>
                        <TextTag
                          as="h5"
                          text={"Add post to compare"}
                          className={"h5 "}
                          color={""}
                        />
                      </div>
                      <div>
                        <Search
                          onChange={() => {}}
                          placeholder={"Search..."}
                          className={""}
                          width={"w-[435px]"}
                        />
                      </div>
                      <div className="w-[383px] flex justify-end">
                        <Button
                          text={"Add post"}
                          onClick={() => {}}
                          type={undefined}
                          className="!text-white !bg-customBlue p-large !py-[10px] !px-3 "
                        />
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="w-full flex items-center flex-wrap  gap-6 pt-8">
                    {cardData.map((card, index) => (
                      <Card key={index} {...card} />
                    ))}
                  </div>
                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PostCompare;
