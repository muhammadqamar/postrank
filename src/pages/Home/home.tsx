import React from "react";

import Card from "../../utils/Cards";

import PostFilter from "../../components/PostFilter";
import { CalendarIcon, ContactIcon, DotIcon, EyeIcon } from "../../icons";

import BackgroundImage1 from "../../assets/images/png/image1.png";
import BackgroundImage2 from "../../assets/images/png/image2.png";
import BackgroundImage3 from "../../assets/images/png/image3.png";
import BackgroundImage4 from "../../assets/images/png/image4.png";
import BackgroundImage5 from "../../assets/images/png/image5.png";
import BackgroundImage6 from "../../assets/images/png/image6.png";
import BackgroundImage7 from "../../assets/images/png/image7.png";
import BackgroundImage8 from "../../assets/images/png/image8.png";
import BackgroundImage9 from "../../assets/images/png/image9.png";

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
const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-10 sm:pb-16 px-5 pb-8 pt-0">
      <PostFilter />
      <div className="w-full flex items-center flex-wrap  gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
