import { MouseEventHandler, useState } from "react";

import Button from "../../../utils/Button";
import {
  CloseIcon,
  Support,
  FeedBack,
  UserIcon,
  CategoryIcon,
} from "../../../icons";
import { TextTag } from "../../../utils/Typography";

type settingProps = {
  closeModal: MouseEventHandler<HTMLButtonElement>;
};

const Index = ({ closeModal }: settingProps) => {
  const [hoverIcon, setHoverIcon] = useState<boolean | null>(false);
  const [hoverIcon1, setHoverIcon1] = useState<boolean | null>(false);
  const [hoverIcon2, setHoverIcon2] = useState<boolean | null>(false);
  const [hoverIcon3, setHoverIcon3] = useState<boolean | null>(false);

  return (
    <div className="w-[256px] flex-shrink-0">
      <div className="flex items-center  gap-4 mb-[42px]">
        <Button
          text=""
          type={"button"}
          onClick={closeModal}
          className="!p-[10px] bg-blue-100"
          icon={<CloseIcon color="#274C9B" />}
        />

        <TextTag as="h5" text="Settings" color="text-black" className="h5" />
      </div>
      <div className=" w-full flex flex-col items-start gap-2 ">
        <div
          onMouseEnter={() => setHoverIcon(true)}
          onMouseLeave={() => setHoverIcon(true)}
          className="w-full"
        >
          <Button
            text="Account details"
            type="button"
            onClick={() => {}}
            className="!w-full !px-5 !py-[14px]  !gap-[10px] !font-medium bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 "
            icon={<UserIcon color={hoverIcon ? "#274C9B" : "#000000"} />}
          />
        </div>
        <div
          onMouseEnter={() => setHoverIcon1(true)}
          onMouseLeave={() => setHoverIcon1(false)}
          className="w-full"
        >
          <Button
            text="Projects"
            type="button"
            onClick={() => {}}
            className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700"
            icon={<CategoryIcon color={hoverIcon1 ? "#274C9B" : "#000000"} />}
          />
        </div>
        <div
          onMouseEnter={() => setHoverIcon2(true)}
          onMouseLeave={() => setHoverIcon2(false)}
          className="w-full"
        >
          <Button
            text="Feedback"
            type="button"
            onClick={() => {}}
            className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700 "
            icon={<FeedBack color={hoverIcon2 ? "#274C9B" : "#000000"} />}
          />
        </div>
        <div
          onMouseEnter={() => setHoverIcon3(true)}
          onMouseLeave={() => setHoverIcon3(false)}
          className="w-full"
        >
          <Button
            text="Support"
            type="button"
            onClick={() => {}}
            className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700 "
            icon={<Support color={hoverIcon3 ? "#274C9B" : "#000000"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
