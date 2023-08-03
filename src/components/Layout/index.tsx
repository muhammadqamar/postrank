import { useState } from "react";

import Select from "../../utils/Select";

// icons
import {
  SearchIcon,
  SettingsIcon,
  CategoryIcon,
  LogoutIcon,
} from "../../icons";
import CitizenRemote from "../../assets/images/dropdownIcon/Citizen-Remote.svg";
import Whale from "../../assets/images/dropdownIcon/WhaleINC.svg";
import Tesla from "../../assets/images/dropdownIcon/Tesla.svg";
import Apple from "../../assets/images/dropdownIcon/Apple.svg";
import MasterCard from "../../assets/images/dropdownIcon/Mastercard.svg";
import { AddIcon } from "../../icons";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[25px]">
        <div className="">postrank.io</div>
        <div className="">
          <Select
            data={companies}
            companiesDrop={false}
            addIcon={<AddIcon />}
            addText={"Add new folder"}
            leftIcon={undefined}
            rightIcon={undefined}
            leftText={""}
          />
        </div>
      </div>

      <div className="flex items-center gap-[25px]">
        <div className=" ">
          <input
            type="text"
            placeholder="Search..."
            className="w-[228px] py-[10px] pl-3 pr-9 bg-white rounded-full  border-none  h-auto p-medium text-gray_600 focus-visible:outline-1 focus-visible:outline focus-visible:outline-blue-500 "
            style={{
              backgroundImage: `url(${(<SearchIcon />)})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative">
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-2 focus:ring-blue-500 "
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-12 h-12 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul className="py-2" aria-labelledby="dropdownUserAvatarButton">
                <li>
                  <a href="#" className="dropdown-item">
                    <SettingsIcon />
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    <CategoryIcon />
                    My projects
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a href="#" className="dropdown-item">
                  <LogoutIcon />
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* test */}
    </div>
  );
};

export default Index;
