"use client";
import React, { useState } from "react";

import { MessageBodyBubble } from "./MessageBodyBubble";
import Button from "../common/button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  getInquiry,
  setCurrentInquiryAct,
} from "@/store/slices/app_modules/inquirySlice";
import ComposeDrawer from "./ComposeDrawer";
import { useMutation } from "@tanstack/react-query";
import { updateThreadStatus } from "@/actions/inquiry/thread";
import { ThreadStatusEnums } from "@/actions/inquiry/enums/threads";
import { sampleMessages } from "@/constants/samples/sampleMessages";

const MessageBody = () => {
  const [moveTab, setMoveTab] = useState<null | any>(null);
  const dispatch = useAppDispatch();
  const {
    currentView,
    currentThread: { threadId },
  } = useAppSelector(getInquiry);

  const { mutate } = useMutation({
    mutationFn: updateThreadStatus,
    onSuccess: () => {
      dispatch(setCurrentInquiryAct(moveTab));
    },
  });

  const attendHandler = async (status: ThreadStatusEnums) => {
    setMoveTab(status);
    mutate({
      status: status,
      // TODO : Update user
      remark: "Test123",
      threadId: threadId,
    });
  };
  return (
    <div>
      <div
        className={`h-[calc(100vh-444px)] overflow-y-auto pb-2 flex flex-col gap-5 relative pr-1`}
      >
        {sampleMessages.map((el, i) => {
          let inOut: "IN" | "OUT" =
            el.createdUser === "ovindupeiris" ? "IN" : "OUT";
          console.log(inOut);

          return (
            <div
              className={` flex flex-col ${
                inOut === "IN" ? "items-start" : "items-end"
              }`}
            >
              <MessageBodyBubble msgType={inOut} msg={el} />
            </div>
          );
        })}
      </div>
      <div className=" flex flex-row justify-end gap-2 pt-5 pb-5 border-t-[1px] border-t-gray-200 dark:border-t-gray-dark-200">
        {(() => {
          switch (currentView) {
            case "OPEN":
              return (
                <>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => attendHandler(ThreadStatusEnums.INPROGRESS)}
                  >
                    Attend
                  </Button>
                  <Button
                    variant="secondary-filled"
                    size="lg"
                    onClick={() => attendHandler(ThreadStatusEnums.DECLINED)}
                  >
                    Decline
                  </Button>
                </>
              );
            case "INPROGRESS":
              return <ComposeDrawer />;
          }
        })()}
      </div>
    </div>
  );
};

export default MessageBody;
