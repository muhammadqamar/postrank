import { MouseEventHandler } from "react";

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
        <Button
          text="Account details"
          type="button"
          onClick={() => {}}
          className="!w-full !px-5 !py-[14px]  !gap-[10px] !font-medium bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 "
          icon={<UserIcon color={""} />}
        />
        <Button
          text="Projects"
          type="button"
          onClick={() => {}}
          className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700"
          icon={<CategoryIcon color={""} />}
        />
        <Button
          text="Feedback"
          type="button"
          onClick={() => {}}
          className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700 "
          icon={<FeedBack color={""} />}
        />
        <Button
          text="Support"
          type="button"
          onClick={() => {}}
          className="!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium !text-black hover:bg-blue-100 hover:!text-blue-700 "
          icon={<Support color={""} />}
        />
      </div>
    </div>
  );
};

export default Index;
