import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";

import ExpandIcon from "../../assets/images/Icons/expand.svg";

import AddIcon from "../../assets/images/Icons/add-icon.svg";
import GridIcon from "../../assets/images/Icons/grid.svg";
import CheckBlue from "../../assets/images/Icons/check-blue.svg";

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
  addIcon: boolean | undefined;
  addText: string;
};

const Index = ({ data, companiesDrop, addIcon, addText }: dropdownProps) => {
  const [selected, setSelected] = useState(data[1]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button
            className={
              companiesDrop
                ? `flex items-center gap-2`
                : `relative cursor-default w-[183px] h-10 bg-white rounded-full py-2  pl-2 pr-4 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 `
            }
          >
            {companiesDrop ? (
              <>
                <div className="w-10 h-10 flex items-center  justify-center bg-blue-300 rounded-full ">
                  <img src={GridIcon} alt="grid" />
                </div>
                <span className="block truncate h4">{selected.name}</span>
              </>
            ) : (
              <>
                <span className="flex items-center">
                  <img
                    src={selected?.avatar}
                    alt=""
                    className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected?.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <img
                    src={ExpandIcon}
                    alt="Expand Icon"
                    className="w-auto h-auto"
                  />
                </span>{" "}
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
                            <span className="">
                              <img
                                src={CheckBlue}
                                alt="CheckBlue"
                                className="w-auto h-auto"
                              />
                            </span>
                          ) : (
                            <span className="w-[18px] h-[18px]" />
                          )
                        ) : (
                          <img
                            src={item.avatar}
                            alt=""
                            className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                          />
                        )}
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate p-medium ",
                          )}
                        >
                          {item.name}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
              {companiesDrop && (
                <div className="w-full h-[1px] my-2 bg-gray-500" />
              )}
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
                  <img
                    src={AddIcon}
                    alt=""
                    className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                  />
                  {addIcon}
                  <span
                    className={` block truncate p-medium ${
                      companiesDrop ? "text-black" : "text-blue-500"
                    }`}
                  >
                    Add new project
                    {addText}
                  </span>
                </div>
              </div>
            </>
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Index;
