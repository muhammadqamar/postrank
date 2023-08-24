import React from "react";

import NoResult from "../../../utils/Error";
import {
  CalendarIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
  PostLoadedIcon,
} from "../../../icons";
import Card from "../../../utils/Cards";

import BackgroundImage1 from "../../../assets/images/png/image1.png";
import BackgroundImage2 from "../../../assets/images/png/image2.png";
import BackgroundImage3 from "../../../assets/images/png/image3.png";

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
];
const Success = () => {
  const handleSubmit = () => {
    console.log("Success");
  };
  return (
    <div className="w-full sm:py-16 py-10 sm:px-10 px-5 flex flex-col gap-16 common-bg-color">
      <NoResult
        icon={<PostLoadedIcon />}
        heading="Your posts has been loaded!"
        text="Now you can go to your dashboard and start exploring!"
        buttonText="To dashboard"
        onClick={handleSubmit}
        className={"!m-0"}
        textStyling={""}
        buttonStyling={"!font-medium !leading-5"}
        path={"/login"}
        pathStyling={""}
      />
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Success;
