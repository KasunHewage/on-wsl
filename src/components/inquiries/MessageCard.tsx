import React from "react";
import { MessageTextSquare02, User02 } from "@untitled-ui/icons-react";
import { SingleTrdsByStatusBIdType } from "@/actions/inquiry/types/thread";

interface MessageCardProp {
  isSelected: boolean;
  threadData: SingleTrdsByStatusBIdType;
}

const MessageCard = ({
  threadData: {
    messageSubjectCategory,
    createdDate,
    createdUser,
    referenceNumber,
  },
  isSelected,
}: MessageCardProp) => {
  
  return (
    <div
      className={` flex flex-row py-4 px-5 gap-x-3 rounded-xl border-[1px] cursor-pointer ${
        isSelected
          ? " border-brand-600 dark:border-brand-dark-600"
          : "border-gray-200 dark:border-gray-dark-200"
      }`}
    >
      <div className=" size-11 bg-brand-50 rounded-full dark:bg-brand-dark-50 text-brand-600 dark:text-brand-dark-600 flex items-center justify-center">
        <MessageTextSquare02 className=" size-6" />
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-1">
          <p className=" text-base font-bold text-gray-700 dark:text-gray-dark-700">
            {messageSubjectCategory}
          </p>
          <p className=" text-xs text-gray-500 dark:text-gray-dark-500">
            {/* {date} - {time} */}
            {createdDate}
          </p>
        </div>
        <div className=" flex flex-row gap-4">
          <div className=" flex flex-row items-center gap-1">
            <div className="flex items-center justify-center rounded-full size-6 bg-gray-50 dark:bg-gray-dark-50 text-gray-700 text-xs dark:text-gray-dark-700">
              <User02 className=" size-3" />
            </div>
            <p className=" text-sm font-medium text-gray-700 dark:text-gray-dark-700">
              {createdUser}
            </p>
          </div>
          <div className=" flex flex-row items-center gap-1">
            <div className="flex items-center justify-center rounded-full size-6 bg-gray-50 dark:bg-gray-dark-50 text-gray-700 text-xs dark:text-gray-dark-700">
              #
            </div>
            <p className=" text-sm font-medium text-gray-700 dark:text-gray-dark-700">
              {referenceNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
