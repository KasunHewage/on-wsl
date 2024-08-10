"use client";
import React from "react";

const MessageHeadSkeleton = () => {
  return (
    <div className=" pb-4 animate-pulse space-y-3 border-b-[1px] border-b-gray-200 dark:border-b-gray-dark-200">
      <p className="  text-xl font-semibold text-gray-700 dark:text-gray-dark-700 space-y-2">
        <p className=" h-7 w-[60%] bg-gray-200 rounded-full"></p>
        <p className=" h-5 w-[45%] bg-gray-200 rounded-full"></p>
      </p>
      <div className=" w-[100%] bg-gray-200 h-4 rounded-full">
      
      </div>
    </div>
  );
};

export default MessageHeadSkeleton;
