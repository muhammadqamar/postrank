/* eslint-disable prettier/prettier */
import React from "react";

import Button from "../button/index";
import BackgroundImage from "../../assets/images/png/image1.png";
import Dot from "../../assets/images/png/Dot.png";
import Trophy from "../../assets/images/Icons/trophy.svg";
import Increase from "../../assets/images/Icons/Increase.svg";
import Calendar from "../../assets/images/Icons/calendar.svg";
import Eye from "../../assets/images/Icons/eye.svg";
import Contact from "../../assets/images/Icons/contact.svg";

const Index = () => {
  const bgImgStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "242px",
  };
  return (
    <>
      <div className="rounded-[20px] max-w-sm overflow-hidden">
        <div className="flex justify-end p-3" style={bgImgStyle}>
          <div className="flex gap-2">
            <div>
              <img
                src={Trophy}
                alt="Trophy icon!"
                className="p-[7px] bg-white rounded-[50%] cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-1 px-2 py-[7px] bg-white rounded-2xl h-8 cursor-pointer">
              <span className="flex">
                <p className="text-gray-600">#</p>1
              </span>
              <img src={Increase} alt="Increase icon" />
            </div>
          </div>
        </div>
        {/* text */}
        <div className="md:p-5 xsm:p-4 bg-white">
          <h6 className="text-xl mb-4 font-medium">
            66 Digital Nomad Visa Countries in 2023
          </h6>
          <div className="flex items-center gap-1 md:mb-14 xsm:mb-12">
            <img src={Calendar} alt="Calendar icon" />
            <p className="text-gray-700 text-sm">12 May, 2023</p>
          </div>
          <div className="flex justify-between">
            {/* <div className="py-[14px] px-5 bg-blue-100 rounded-[20px]">
              <button className="text-blue-700">View details</button>
            </div> */}
            <Button
              text="View details"
              onClick={() => {
                "Button Clicked";
              }}
              Icon={<img src={Eye} alt="Eye" />}
            />
            <div className="flex gap-2 items-center">
              {/* eye */}
              <div className="flex gap-1 items-center">
                <img src={Eye} alt="Eye icon" />
                <p className="text-sm">2,168</p>
              </div>
              <img src={Dot} alt="Dot Image!" />
              {/* Contact */}
              <div className="flex gap-1 items-center">
                <img src={Contact} alt="Contact icon" />
                <p className="text-sm">1,352</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
