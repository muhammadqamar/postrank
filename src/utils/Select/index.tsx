import { MouseEventHandler, useState } from "react";
import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import DateRange from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExpandIcon, Check } from "../../icons";
import { TextTag } from "../Typography";
import Button from "../Button";

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
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDateM: boolean;
  simpleDropDown: boolean;
  dateOnCancel: MouseEventHandler<HTMLButtonElement>;
  multiSelect: boolean;
  className: string;
};

const Index = ({
  data,
  companiesDrop,
  addIcon,
  addText,
  rightIcon,
  leftIcon,
  leftText,
  onClick,
  isDateM,
  simpleDropDown,
  dateOnCancel,
  multiSelect,
  className,
}: dropdownProps) => {
  const [selected, setSelected] = useState(data[0]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const onChange = (dates: DateRange | null) => {
    if (dates) {
      const [start, end] = dates as unknown as [Date, Date];
      setStartDate(start);
      setEndDate(end);
    }
  };

  const formatDate = (date?: Date | null): string => {
    if (date) {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    }
    return "";
  };

  return (
    <div className={` ${className}`}>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className={`relative ${className}`}>
            <Listbox.Button
              className={
                companiesDrop
                  ? `flex items-center gap-2 py-[10px]  ${
                      leftIcon
                        ? "hover:bg-transparent pr-4"
                        : "hover:bg-blue-100 px-4"
                    } ${
                      open
                        ? `${leftIcon ? "bg-transparent" : "bg-blue-100"}`
                        : "bg-transparent"
                    } rounded-full`
                  : `relative cursor-default ${
                      simpleDropDown
                        ? "w-full py-[10px] px-3 rounded-[7px] border border-solid border-gray-200"
                        : "w-[183px] shadow-sm py-2  pl-2 pr-4 rounded-full"
                    } h-10 bg-white   text-left text-gray-900  ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      open && "ring-indigo-500"
                    } sm:text-sm sm:leading-6 `
              }
            >
              {companiesDrop ? (
                <>
                  {leftIcon && (
                    <div
                      className={`w-10 h-10 flex items-center  justify-center hover:bg-blue-300 ${
                        open ? "bg-blue-300" : "bg-blue-100"
                      } rounded-full `}
                    >
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
                    {!simpleDropDown && (
                      <img
                        src={selected?.avatar}
                        alt=""
                        className="h-6 w-6 object-contain flex-shrink-0 rounded-full "
                      />
                    )}
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
            {open && (
              <Listbox.Options
                className={`absolute z-10  min-h-56  rounded-2xl ${
                  companiesDrop || simpleDropDown
                    ? `bg-white mt-2 ${
                        isDateM
                          ? "w-[312px]"
                          : simpleDropDown
                          ? "w-full"
                          : "w-[222px]"
                      } py-2 overflow-hidden shadow-mdShadow`
                    : "bg-[transparent] w-full mt-5 text-base flex flex-col gap-5"
                }`}
              >
                {isDateM ? (
                  <div className="w-full p-5 hover:text-white hover:bg-white">
                    <div className="my-custom-container">
                      {multiSelect ? (
                        <DatePicker
                          selected={startDate}
                          onChange={
                            onChange as unknown as (
                              date: [Date | null, Date | null],
                              event:
                                | React.SyntheticEvent<unknown, Event>
                                | undefined,
                            ) => void
                          }
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          inline
                        />
                      ) : (
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="MM/dd/yyyy"
                          inline
                        />
                      )}
                    </div>
                    <div className="w-full h-[1px] my-4 bg-gray_500" />
                    <div className="w-full flex items-center justify-between">
                      <TextTag
                        as="p"
                        text={multiSelect ? "Start date:" : "Selected:"}
                        color="text-[#909090]"
                        className=" block truncate p-medium"
                      />
                      <TextTag
                        as="p"
                        text={
                          multiSelect
                            ? formatDate(startDate)
                            : formatDate(selectedDate)
                        }
                        color="text-black"
                        className="block truncate p-medium !font-medium"
                      />
                    </div>
                    {multiSelect && (
                      <div className="w-full flex items-center justify-between mt-4">
                        <TextTag
                          as="p"
                          text="End date:"
                          color="text-[#909090]"
                          className=" block truncate p-medium"
                        />
                        <TextTag
                          as="p"
                          text={formatDate(endDate)}
                          color="text-black"
                          className="block truncate p-medium !font-medium"
                        />
                      </div>
                    )}
                    <div className="w-full h-[1px] my-4 bg-gray_500" />
                    <div className="w-full flex items-center justify-between">
                      <Button
                        text="Cancel"
                        type="button"
                        onClick={dateOnCancel}
                        className="!w-fit !py-[10px] !px-4 bg-gray_100 text-gray-700 flex items-center justify-center"
                      />
                      <Button
                        text="Apply date"
                        type="button"
                        onClick={() => {}}
                        className="!w-fit !py-[10px] !px-4 !bg-[#2F67DD] text-white flex items-center justify-center"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {data.map((item, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active ? "text-black" : "text-black",
                            `relative  cursor-pointer select-none   ${
                              companiesDrop || simpleDropDown
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
                              {companiesDrop || simpleDropDown ? (
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
                          <div className="w-full h-[1px] my-2 bg-gray_500" />
                        ) : null}
                        <button
                          className={`text-black relative cursor-pointer select-none border-none outline-none ${
                            companiesDrop
                              ? "w-full py-[11px] px-[10px] "
                              : "bg-white rounded-full w-fit  py-2 pl-2 pr-[10px] shadow-lgShadow "
                          }`}
                          onClick={onClick}
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
                              color={
                                companiesDrop ? "text-black" : "text-blue-500"
                              }
                              className={` block truncate p-medium `}
                            />
                          </div>
                        </button>
                      </>
                    )}
                  </>
                )}
              </Listbox.Options>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default Index;
