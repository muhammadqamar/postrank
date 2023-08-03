import React from "react";

import Select from "../../utils/Select";

import { useState } from "react";
import { Listbox } from "@headlessui/react";

import GridIcon from "../../assets/images/Icons/grid.svg";
import CheckBlue from "../../assets/images/Icons/check-blue.svg";

const postData = [
  {
    name: "All posts",
  },
  {
    name: "All visas",
  },
  {
    name: "Europe visas",
  },
  {
    name: "Travel programs",
  },
  {
    name: "Domestic programs",
  },
  {
    name: "Insurance",
  },
];

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const index = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="w-full my-[42px] flex items-center justify-between">
      <div className="">
        <Select
          data={postData}
          companiesDrop={true}
          addIcon={undefined}
          addText={""}
        />
      </div>
      <div className="flex items-center">
        <div className="px-4 py-[10px]">Date: Today</div>
        <div className="">Sort by: Ranking</div>
        <div className="">
          <div className="">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center  justify-center bg-blue-300 rounded-full ">
                    <img src={GridIcon} alt="grid" />
                  </div>
                  <span className="block truncate">{selected.name}</span>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <img src={CheckBlue} alt="CheckBlue" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
