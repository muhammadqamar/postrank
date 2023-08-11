import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Select from "../../utils/Select";
import SearchField from "../../utils/SearchField";
import SettingModal from "../SettingModal";

// icons
import { SettingsIcon, CategoryIcon, LogoutIcon, AddIcon, GridIcon } from "../../icons";
import CitizenRemote from "../../assets/images/dropdownIcon/Citizen-Remote.svg";
import Whale from "../../assets/images/dropdownIcon/WhaleINC.svg";
import Tesla from "../../assets/images/dropdownIcon/Tesla.svg";
import Apple from "../../assets/images/dropdownIcon/Apple.svg";
import MasterCard from "../../assets/images/dropdownIcon/Mastercard.svg";
import User from "../../assets/images/png/user.png";
import { TextTag } from "../../utils/Typography";

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
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[25px]">
        <TextTag as="h6" text="postrank.io" color="text-black" className="p-medium !font-semibold" />
        <div className="md:block hidden">
          <Select
            className=""
            data={companies}
            companiesDrop={false}
            addIcon={<AddIcon color="#ffffff" />}
            addText={"Add new folder"}
            leftIcon={<GridIcon />}
            rightIcon={undefined}
            leftText={""}
            onClick={() => {}}
            isDateM={false}
            simpleDropDown={false}
            dateOnCancel={() => {}}
            multiSelect={false}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:flex hidden">
          <SearchField className="" onChange={() => {}} placeholder={"Search..."} width={""} />
        </div>

        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button
                  className={`w-12 h-12 flex items-center justify-center bg-white rounded-full  border-[2px] border-solid border-white ${open ? "ring-[2px] ring-blue-500" : ""}`}
                >
                  <img className="w-auto h-auto object-cover rounded-full focused" src={User} alt="user photo" />
                </Menu.Button>
                {open && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="dropdown-menu !shadow-mdShadow">
                      <Menu.Item>
                        <div onClick={() => setIsOpenModal(true)} className="dropdown-item border-none cursor-pointer">
                          <SettingsIcon />
                          Settings
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="#" className="dropdown-item border-none">
                          <CategoryIcon color={""} />
                          My projects
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <div className="my-2 w-full " />
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/login" className="dropdown-item border-none">
                          <LogoutIcon />
                          Logout
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* test */}
      <SettingModal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} />
    </div>
  );
};

export default Index;
