import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TagIcon } from "../../icons";

const Index = () => {
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
          <Menu.Items className="dropdown-menu">
            <Menu.Item>
              <p className="dropdown-item border-none">My projects</p>
            </Menu.Item>
            <Menu.Item>
              <div className="my-2 w-full " />
            </Menu.Item>
            <Menu.Item>
              <button className="dropdown-item border-none w-full">
                Manage tags
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Index;
