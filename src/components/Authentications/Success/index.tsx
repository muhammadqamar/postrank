import React from "react";

import NoResult from "../../../utils/Error";
import { PostLoadedIcon } from "../../../icons";
import Card from "../../../utils/Cards";

const Index = () => {
  const handleSubmit = () => {
    console.log("Success");
  };
  return (
    <div className=" py-16 px-10 flex flex-col gap-16">
      <NoResult
        icon={<PostLoadedIcon />}
        heading="Your posts has been loaded!"
        text="Now you can go to your dashboard and start exploring!"
        buttonText="To dashboard"
        onClick={handleSubmit}
        className={""}
        textStyling={"mt-6"}
        buttonStyling={""}
      />
      <div className="flex m-auto gap-6">
        <Card
          cardTitle={""}
          calendarIcon1={undefined}
          date1={""}
          eyeIcon1={undefined}
          quantity1={""}
          contactIcon1={undefined}
          quantity2={""}
          openNewIcon={undefined}
          buttonText={""}
          eyeIcon2={undefined}
          quantity3={""}
          contactIcon2={undefined}
          dotImage1={undefined}
          dotImage2={undefined}
          dotImage3={undefined}
          quantity4={""}
          backgroundImage={undefined}
          className={""}
        />
        <Card
          cardTitle={""}
          calendarIcon1={undefined}
          date1={""}
          eyeIcon1={undefined}
          quantity1={""}
          contactIcon1={undefined}
          quantity2={""}
          openNewIcon={undefined}
          buttonText={""}
          eyeIcon2={undefined}
          quantity3={""}
          contactIcon2={undefined}
          dotImage1={undefined}
          dotImage2={undefined}
          dotImage3={undefined}
          quantity4={""}
          backgroundImage={undefined}
          className={""}
        />
        <Card
          cardTitle={""}
          calendarIcon1={undefined}
          date1={""}
          eyeIcon1={undefined}
          quantity1={""}
          contactIcon1={undefined}
          quantity2={""}
          openNewIcon={undefined}
          buttonText={""}
          eyeIcon2={undefined}
          quantity3={""}
          contactIcon2={undefined}
          dotImage1={undefined}
          dotImage2={undefined}
          dotImage3={undefined}
          quantity4={""}
          backgroundImage={undefined}
          className={""}
        />
      </div>
    </div>
  );
};

export default Index;
