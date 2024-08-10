import React from "react";
import { Attachment01 } from "@untitled-ui/icons-react";

export const MessageBodyBubble = ({
  msgType,
  msg,
}: {
  msgType: "IN" | "OUT";
  msg: any;
}) => {
  return (
    <div className="flex flex-col gap-4 w-[75%]">
      <div
        className={` flex flex-col ${
          msgType === "IN" ? "items-start" : "items-end"
        }`}
      >
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-dark-800">
          {msg.createdUser}
        </p>
        <p className="text-xs text-gray-600">{msg.createdDate}</p>
      </div>

      <div className="text-sm space-y-4 inline-block max-w-full font-medium text-gray-700 dark:text-gray-dark-700 py-4 px-5 bg-brand-100 dark:bg-brand-100 rounded-2xl">
        <p className="inline">{msg.messageText}</p>
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 flex justify-between">
              <p className="font-semibold">Name</p>
              <p className="font-semibold">:</p>
            </div>
            <div className="col-span-10 ml-2">
              <p>John Doe</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 flex justify-between">
              <p className="font-semibold">NIC</p>
              <p className="font-semibold">:</p>
            </div>
            <div className="col-span-10 ml-2">
              <p>123456789V</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 flex justify-between">
              <p className="font-semibold">Address</p>
              <p className="font-semibold">:</p>
            </div>
            <div className="col-span-10 ml-2">
              <p>No : 20, Test Street, Colombo</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Attachments</p>
          <div className="grid grid-cols-2 xl:grid-cols-3">
            {new Array(3).fill("").map((el: any, i: number) => (
              <div
                key={i}
                className="flex flex-row items-center gap-2 cursor-pointer"
              >
                <p className="p-2 rounded-full bg-brand-500 dark:bg-brand-dark-600 text-solid-base">
                  <Attachment01 className="size-4" />
                </p>{" "}
                <p>SampleFile.txt</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
