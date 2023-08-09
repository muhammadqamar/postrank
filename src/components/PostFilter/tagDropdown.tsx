import { Menu, Transition } from "@headlessui/react";
import { ChangeEventHandler, Fragment, MouseEventHandler } from "react";
import { TagIcon, AddContactIcon } from "../../icons";
import Button from "../../utils/Button";
import { TextTag } from "../../utils/Typography";
import SearchField from "../../utils/SearchField";

type DropdownProps = {
  onclick: MouseEventHandler<HTMLButtonElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TagDrapdown = ({ onclick, onClear, onChange }: DropdownProps) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className={`w-fit py-[10px] px-4 flex items-center gap-2 hover:bg-blue-100 rounded-full ${
                  open ? "bg-blue-100" : ""
                }`}
              >
                <TextTag
                  as="p"
                  text="Tags"
                  color="text-blue-700"
                  className="p-large"
                />
                <TagIcon />
              </Menu.Button>
            </div>
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
                <Menu.Items className="dropdown-menu !w-[263px]">
                  <div className="border-none px-4 w-full">
                    <div className="w-full flex items-center justify-between py-[6px] mb-3">
                      <TextTag
                        as="h6"
                        text="My tags"
                        color="text-black"
                        className="p-larg !font-medium"
                      />
                      <Button
                        text="Clear all"
                        type={"button"}
                        onClick={onClear}
                        className="!p-0 bg-white"
                      />
                    </div>
                    <div className="mb-4">
                      <SearchField
                        className="!border !border-solid !border-gray-300"
                        onChange={onChange}
                        placeholder={"Search..."}
                        width={""}
                      />
                    </div>
                  </div>

                  <Menu.Item>
                    <TextTag
                      as="p"
                      text="My projects"
                      color="text-black"
                      className="dropdown-item border-none !pl-7"
                    />
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
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

export default TagDrapdown;
