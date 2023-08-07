import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Card from "../../utils/Cards";
import PostFilter from "../../components/PostFilter";

type DateValueType = {
  startDate: Date | null;
  endDate: Date | null;
};

const Home: React.FC = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChange = (newValue: any) => {
    const newValueAsDateValueType: DateValueType = {
      startDate: newValue?.startDate || null,
      endDate: newValue?.endDate || null,
    };
    setValue(newValueAsDateValueType);
  };
  return (
    <div className="max-w-[1280px] mx-auto px-10">
      <PostFilter />
      <div className="w-full flex items-center flex-wrap justify-start gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      <Datepicker
        useRange={false}
        asSingle={true}
        showFooter={true}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default Home;
