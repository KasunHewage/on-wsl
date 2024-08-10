import React, { useState } from "react";
import Button from "../common/button/Button";
import {
  Attachment01,
  FaceSmile,
  Image03,
  Send03,
} from "@untitled-ui/icons-react";

const ComposeDrawer = () => {
  const [to, setTo] = useState<string>("Sandun Jayathilaka");
  const [cc, setCc] = useState<string[]>([
    "cbuo_ofc1@sampath.lk",
    "cbuo_ofc2@sampath.lk",
  ]);
  return (
    <>
      <Button
        type="button"
        className=""
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-bottom"
        data-hs-overlay="#hs-offcanvas-bottom"
      >
        Reply
      </Button>
      <div
        id="hs-offcanvas-bottom"
        className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-7 right-7 transition-all duration-300 transform min-h-40 z-[80] bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 w-[659px] hidden p-6 rounded-2xl spay"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-offcanvas-bottom-label"
      >
        <div className=" flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p className=" text-2xl font-semibold text-gray-800 dark:text-gray-800">
              Compose Message
            </p>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              data-hs-overlay="#hs-offcanvas-bottom"
            >
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div>
            {" "}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 text-gray-700">
                  {to}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cc
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                {cc.map((email) => (
                  <span
                    key={email}
                    className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 text-gray-700"
                  >
                    {email}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <textarea
            className="h-[356px] p-5 bg-gray-50 dark:bg-gray-dark-50 rounded-xl"
            placeholder="Write message"
          />

          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-row items-center gap-2">
              <Button
                btnType="icon"
                variant="grey-filled"
                size="xs"
                className=" text-gray-700 dark:text-gray-dark-700"
              >
                <Image03 className=" size-5" />
              </Button>
              <Button
                btnType="icon"
                variant="grey-filled"
                size="xs"
                className=" text-gray-700 dark:text-gray-dark-700"
              >
                <Attachment01 className=" size-5" />
              </Button>
              <Button
                btnType="icon"
                variant="grey-filled"
                size="xs"
                className=" text-gray-700 dark:text-gray-dark-700"
              >
                <FaceSmile className=" size-5" />
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              <Button variant="secondary-filled">Clear</Button>
              <Button variant="default">
                <Send03 className=" size-5" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComposeDrawer;
