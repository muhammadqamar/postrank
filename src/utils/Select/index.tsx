import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import ExpandIcon from "../../assets/images/Icons/expand.svg";

import AddIcon from "../../assets/images/Icons/add-icon.svg";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface arrayProps {
  avatar: string;
  name: string;
}

type dropdownProps = {
  data: Array<arrayProps>;
};

const Index = ({ data }: dropdownProps) => {
  const [selected, setSelected] = useState(data[1]);
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative ">
              <Listbox.Button className="relative  cursor-default w-[183px] h-10 bg-white rounded-full py-2  pl-2 pr-4 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
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
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10  max-h-56 w-full  rounded-md bg-[transparent]  text-base mt-5 flex flex-col gap-5">
                  <>
                    {data.map((item, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900",
                            "relative w-fit cursor-default select-none  bg-white rounded-full  py-2 pl-2 pr-[10px] shadow-lgShadow ",
                          )
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <div className="flex items-center">
                              <img
                                src={item.avatar}
                                alt=""
                                className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                              />
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate p-medium",
                                )}
                              >
                                {item.name}
                              </span>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    ))}

                    <Listbox.Option
                      value={false}
                      className="text-black relative w-fit cursor-default select-none  bg-white rounded-full  py-2 pl-2 pr-[10px] shadow-lgShadow "
                    >
                      <div className="flex items-center">
                        <img
                          src={AddIcon}
                          alt=""
                          className="h-6 w-6 object-contain flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block truncate p-medium text-blue-500">
                          Add new project
                        </span>
                      </div>
                    </Listbox.Option>
                  </>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Index;
