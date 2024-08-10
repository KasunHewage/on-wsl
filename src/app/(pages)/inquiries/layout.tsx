"use client";
import { getThreadCountByUserBIdAction } from "@/actions/inquiry/thread";
import Button from "@/components/common/button/Button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/tab/Tabs";

import PageHeader from "@/components/header/PageHeader";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  getInquiry,
  setCurrentInquiryAct,
  setCurrentThreadAct,
} from "@/store/slices/app_modules/inquirySlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

type StatusKey = "open" | "inProgress" | "declined" | "completed";

interface TabHead {
  id: string;
  title: string;
  key: StatusKey;
}

const tabHeadList: TabHead[] = [
  { id: "OPEN", title: "Open", key: "open" },
  { id: "INPROGRESS", title: "In progress", key: "inProgress" },
  { id: "COMPLETED", title: "Completed", key: "completed" },
  { id: "DECLINED", title: "Declined", key: "declined" },
  // { id: "DELETED", title: "Deleted", key: "deleted" },
];

export default function InquiriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();
  const { currentView } = useAppSelector(getInquiry);
  const { data, refetch } = useQuery({
    queryKey: ["threadCounts"],
    queryFn: () =>
      getThreadCountByUserBIdAction({ branchId: 1, userName: "testuser" }),
  });

  useEffect(() => {
    refetch();
  }, [currentView]);
  return (
    <Tabs defaultValue={currentView} value={currentView}>
      <div className="flex flex-col gap-4">
        <PageHeader
          topChild={<Button variant="default">Sample Text</Button>}
          bottomChild={
            <TabsList>
              {tabHeadList.map((el: any, i: number) => (
                <TabsTrigger
                  key={i}
                  value={el.id}
                  onClick={() => {
                    dispatch(setCurrentInquiryAct(el.id));
                    dispatch(setCurrentThreadAct({}));
                  }}
                  badge={data?.payload[el.key as StatusKey] || 0}
                >
                  {el.title}
                </TabsTrigger>
              ))}
            </TabsList>
          }
        />

        <div className=" h-[calc(100vh-220px)] overflow-y-auto">
          {tabHeadList.map((el: any, i: number) => (
            <TabsContent key={i} value={el.id}>
              {children}
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  );
}
