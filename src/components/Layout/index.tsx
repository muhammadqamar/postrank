import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Select from "../../utils/Select";

// icons
import {
  SearchIcon,
  SettingsIcon,
  CategoryIcon,
  LogoutIcon,
  AddIcon,
  GridIcon,
} from "../../icons";
import CitizenRemote from "../../assets/images/dropdownIcon/Citizen-Remote.svg";
import Whale from "../../assets/images/dropdownIcon/WhaleINC.svg";
import Tesla from "../../assets/images/dropdownIcon/Tesla.svg";
import Apple from "../../assets/images/dropdownIcon/Apple.svg";
import MasterCard from "../../assets/images/dropdownIcon/Mastercard.svg";
import User from "../../assets/images/png/user.png";

const companies = [
  {
    name: "Citizen Remote",
    avatar: CitizenRemote,
  },
  {
    name: "WhaleINC",
    avatar: Whale,
  },
  {
    name: "Tesla",
    avatar: Tesla,
  },
  {
    name: "Apple",
    avatar: Apple,
  },
  {
    name: "MasterCard",
    avatar: MasterCard,
  },
];

const Index = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[25px]">
        <div className="">postrank.io</div>
        <div className="">
          <Select
            data={companies}
            companiesDrop={false}
            addIcon={<AddIcon color="#ffffff" />}
            addText={"Add new folder"}
            leftIcon={<GridIcon />}
            rightIcon={undefined}
            leftText={""}
          />
        </div>
      </div>

      <div className="flex items-center gap-[25px]">
        <div className="relative w-[228px] h-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-[10px] pl-3 pr-9 bg-white rounded-full border-none outline-none h-auto p-medium text-gray_600 focus-visible:outline-1 focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-blue-500 "
          />
          <div className="absolute top-[10px] right-3 cursor-pointer">
            <SearchIcon />
          </div>
        </div>

        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-2 focus-visible:outline-1 focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-blue-500 ">
              <img
                className="w-12 h-12 object-contain rounded-full "
                src={User}
                alt="user photo"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="dropdown-menu">
                <Menu.Item>
                  <a href="#" className="dropdown-item border-none">
                    <SettingsIcon />
                    Settings
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="dropdown-item border-none">
                    <CategoryIcon />
                    My projects
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <div className="my-2 w-full " />
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="dropdown-item border-none">
                    <LogoutIcon />
                    Logout
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* test */}
    </div>
  );
};

export default Index;
