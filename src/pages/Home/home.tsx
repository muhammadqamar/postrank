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
    // Convert the received value to DateValueType
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
        value={value}
        onChange={handleValueChange}
      />

      {/* <div className="w-[312px] h-[478px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch justify-between items-center gap-[120px] inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="text-black text-base font-medium leading-tight">
              July
            </div>
            <div className="justify-start items-start flex">
              <div className="p-1 rounded-full justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-1 flex">
            <div className="text-black text-base font-medium leading-tight">
              2023
            </div>
            <div className="justify-start items-start flex">
              <div className="p-1 rounded-full justify-center items-center gap-1 flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-neutral-200"></div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Mon
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Tue
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Wed
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Thu
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Fri
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Sat
            </div>
            <div className="w-8 text-center text-zinc-700 text-xs font-normal leading-none tracking-tight">
              Sun
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  26
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  27
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  28
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  29
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  30
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  1
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  2
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  3
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  4
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  5
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  6
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  7
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  8
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  9
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-blue-600 rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-white text-sm font-medium leading-[18px]">
                  10
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  11
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  12
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  13
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  14
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  15
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  16
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  17
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  18
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  19
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  20
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  21
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  22
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  23
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  24
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  25
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  26
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  27
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  28
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  29
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  30
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-black text-sm font-medium leading-[18px]">
                  31
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  1
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  2
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  3
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  4
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  5
                </div>
              </div>
              <div className="w-8 h-8 relative bg-white rounded-lg">
                <div className="w-8 left-0 top-[7px] absolute text-center text-zinc-400 text-sm font-medium leading-[18px]">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-neutral-200"></div>
        <div className="self-stretch justify-between items-center gap-2 inline-flex">
          <div className="text-neutral-400 text-sm font-normal leading-[18px]">
            Selected:
          </div>
          <div className="text-black text-sm font-medium leading-[18px]">
            July 10, 2023
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-neutral-200"></div>
        <div className="self-stretch justify-between items-start gap-4 inline-flex">
          <div className="justify-start items-start flex">
            <div className="px-4 py-2.5 bg-stone-50 rounded-full justify-center items-center gap-2 flex">
              <div className="text-center text-zinc-700 text-base font-medium leading-tight">
                Cancel
              </div>
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="px-4 py-2.5 bg-blue-600 rounded-full justify-center items-center gap-2 flex">
              <div className="text-center text-white text-base font-medium leading-tight">
                Apply date
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
