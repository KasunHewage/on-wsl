import React from "react";

const MessageCardSkeleton = () => {
  return (
    <div className=" animate-pulse flex flex-row py-4 px-5 gap-x-3 rounded-xl border-[1px] border-gray-200 dark:border-gray-dark-200 cursor-pointer">
      <div className="  size-11 bg-gray-200 dark:bg-gray-dark-200 rounded-full flex items-center justify-center text-lg" />
      <div className=" flex flex-col gap-4 flex-1">
        <div className=" flex flex-col gap-1">
          <p className=" bg-gray-200 dark:bg-gray-dark-200 rounded-full h-6" />
          <p className=" bg-gray-200 dark:bg-gray-dark-200 rounded-full h-4 w-2/3" />
        </div>
        <div className=" flex flex-row flex-1 gap-4">
          <div className=" flex flex-row flex-1 items-center gap-1 w-2/4">
            <div className=" rounded-full size-6 bg-gray-200 dark:bg-gray-dark-200" />
            <p className=" h-5 bg-gray-200 dark:bg-gray-dark-200 rounded-full w-3/4" />
          </div>
          <div className=" flex flex-row flex-1 items-center gap-1 w-2/4">
            <div className=" rounded-full size-6 bg-gray-200 dark:bg-gray-dark-200" />
            <p className=" h-5 bg-gray-200 dark:bg-gray-dark-200 rounded-full w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCardSkeleton;
