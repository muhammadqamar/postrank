import { Menu, Transition } from "@headlessui/react";
import { ChangeEventHandler, Fragment, MouseEventHandler } from "react";
import { SearchIcon, TagIcon, AddContactIcon } from "../../icons";
import Button from "../../utils/Button";

type DropdownProps = {
  onclick: MouseEventHandler<HTMLButtonElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TagDrapdown = ({ onclick, onClear, onChange }: DropdownProps) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-fit py-[10px] px-4 flex items-center gap-2">
            <p className="p-large text-blue-700">Tags</p>
            <TagIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown-menu !w-[263px]">
            <div className="border-none px-4 w-full">
              <div className="w-full flex items-center justify-between py-[6px] mb-3">
                <h6 className="p-larg !font-medium text-black">My tags</h6>
                <Button
                  text="Clear all"
                  type={"button"}
                  onClick={onClear}
                  className="!p-0 bg-white"
                />
              </div>
              <div className="relative w-full h-auto mb-4">
                <input
                  type="text"
                  placeholder="Search tags"
                  onChange={onChange}
                  className="search-input focused  !border !border-solid !border-gray-300"
                />
                <div className="absolute top-[10px] right-3 cursor-pointer">
                  <SearchIcon />
                </div>
              </div>
            </div>

            <Menu.Item>
              <p className="dropdown-item border-none !pl-7">My projects</p>
            </Menu.Item>
            <Menu.Item>
              <div className="my-2 w-full " />
            </Menu.Item>
            <div>
              <Button
                text="Manage tags"
                type={"button"}
                onClick={onclick}
                className="!py-[10px] !px-[10px] bg-white !border-none dropdown-item !rounded-none !w-full"
                icon={<AddContactIcon />}
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default TagDrapdown;
