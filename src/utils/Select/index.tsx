import { useState } from "react";
import { Listbox } from "@headlessui/react";

import { ExpandIcon, Check } from "../../icons";
import { TextTag } from "../Typography";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface arrayProps {
  avatar?: string | undefined;
  name?: string;
}

type dropdownProps = {
  data: Array<arrayProps>;
  companiesDrop: boolean | undefined;
  addIcon: React.ReactNode;
  addText: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  leftText: string;
};

const Index = ({
  data,
  companiesDrop,
  addIcon,
  addText,
  rightIcon,
  leftIcon,
  leftText,
}: dropdownProps) => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button
            className={
              companiesDrop
                ? `flex items-center gap-2 py-[10px] px-4`
                : `relative cursor-default w-[183px] h-10 bg-white rounded-full py-2  pl-2 pr-4 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 `
            }
          >
            {companiesDrop ? (
              <>
                {leftIcon && (
                  <div className="w-10 h-10 flex items-center  justify-center bg-blue-300 rounded-full ">
                    {leftIcon}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  {leftText && (
                    <TextTag
                      as="span"
                      text={leftText}
                      color="text-blue-700"
                      className="block truncate p-large"
                    />
                  )}
                  <TextTag
                    as="h4"
                    text={selected.name}
                    color={leftText ? "text-blue-700" : "text-black"}
                    className={`block truncate ${
                      leftText ? "p-large " : "h4 "
                    }`}
                  />
                </div>
                {rightIcon}
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <img
                    src={selected?.avatar}
                    alt=""
                    className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                  />
                  <TextTag
                    as="p"
                    text={selected?.name}
                    color="text-black"
                    className="ml-3 block truncate p-medium"
                  />
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ExpandIcon />
                </div>
              </>
            )}
          </Listbox.Button>

          <Listbox.Options
            className={`absolute z-10  min-h-56  rounded-2xl ${
              companiesDrop
                ? "bg-white mt-2 w-[222px] py-2 overflow-hidden shadow-mdShadow"
                : "bg-[transparent] w-full mt-5 text-base flex flex-col gap-5"
            }`}
          >
            <>
              {data.map((item, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    classNames(
                      active ? "text-black" : "text-black",
                      `relative  cursor-pointer select-none   ${
                        companiesDrop
                          ? "w-full py-[11px] px-[10px] hover:text-white hover:bg-blue-500"
                          : "w-fit bg-white rounded-full  py-2 pl-2 pr-[10px] shadow-lgShadow"
                      }`,
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        {companiesDrop ? (
                          selected ? (
                            <div>
                              <Check />
                            </div>
                          ) : (
                            <div className="w-[18px] h-[18px]" />
                          )
                        ) : (
                          <img
                            src={item.avatar}
                            alt=""
                            className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                          />
                        )}

                        <TextTag
                          as="p"
                          text={item.name}
                          color=""
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate p-medium ",
                          )}
                        />
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
              {addText && (
                <>
                  {addText && companiesDrop ? (
                    <div className="w-full h-[1px] my-2 bg-gray-500" />
                  ) : null}
                  <div
                    className={`text-black relative cursor-pointer select-none  ${
                      companiesDrop
                        ? "w-full py-[11px] px-[10px] "
                        : "bg-white rounded-full w-fit  py-2 pl-2 pr-[10px] shadow-lgShadow "
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        companiesDrop ? "gap-[10px]" : "gap-2"
                      }`}
                    >
                      <div
                        className={
                          !companiesDrop
                            ? "w-6 h-6 rounded-full flex items-center justify-center bg-blue-500"
                            : ""
                        }
                      >
                        {addIcon}
                      </div>
                      <TextTag
                        as="p"
                        text={addText}
                        color={companiesDrop ? "text-black" : "text-blue-500"}
                        className={` block truncate p-medium `}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Index;
