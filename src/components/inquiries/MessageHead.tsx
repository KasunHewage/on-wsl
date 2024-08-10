"use client";
import React from "react";
import Badge from "../common/badge/Badge";
import { Calendar, ChevronRight, User02 } from "@untitled-ui/icons-react";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getInquiry } from "@/store/slices/app_modules/inquirySlice";

const MessageHead = () => {
  const {
    currentThread: {
      messageSubjectCategory,
      messageSubjectSubCategory,
      createdUser,
      referenceNumber,
      createdDate,
      messageStatus
    },
  } = useAppSelector(getInquiry);
  return (
    <div className=" pb-4 space-y-3 border-b-[1px] border-b-gray-200 dark:border-b-gray-dark-200">
      <p className=" text-xl font-semibold text-gray-700 dark:text-gray-dark-700">
        <p>{messageSubjectCategory}</p>
        <p className=" text-sm text-gray-500 dark:text-gray-dark-500">{messageSubjectSubCategory}</p>
      </p>
      <div className=" flex flex-row gap-4">
        <div>
          <Badge variant="filledRounded_Info">{messageStatus}</Badge>
        </div>
        <div className=" flex flex-row items-center gap-1">
          <div className="flex items-center justify-center rounded-full size-6 bg-gray-50 dark:bg-gray-dark-50 text-gray-700 text-xs dark:text-gray-dark-700">
            <User02 className=" size-3" />
          </div>
          <p className=" text-sm font-medium text-gray-700 dark:text-gray-dark-700">
            {createdUser}
          </p>
          <div className="flex items-center justify-center size-6 text-gray-500 text-xs dark:text-gray-dark-500">
            <ChevronRight className=" size-3" />
          </div>
        </div>
        <div className=" flex flex-row items-center gap-1">
          <div className="flex items-center justify-center rounded-full size-6 bg-gray-50 dark:bg-gray-dark-50 text-gray-700 text-xs dark:text-gray-dark-700">
            #
          </div>
          <p className=" text-sm font-medium text-gray-700 dark:text-gray-dark-700">
            {referenceNumber}
          </p>
        </div>
        <div className=" flex flex-row items-center gap-1">
          <div className="flex items-center justify-center rounded-full size-6 bg-gray-50 dark:bg-gray-dark-50 text-gray-700 text-xs dark:text-gray-dark-700">
            <Calendar className=" size-3" />
          </div>
          <p className=" text-sm font-medium text-gray-700 dark:text-gray-dark-700">
            Created at {createdDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageHead;
