"use client";
import React, { useEffect, useRef } from "react";

import Button from "@/components/common/button/Button";
import TextInput from "@/components/common/input/TextInput";
import MessageHead from "@/components/inquiries/MessageHead";
import MessageCard from "@/components/inquiries/MessageCard";
import MessageBody from "@/components/inquiries/MessageBody";
import MessageCardSkeleton from "@/components/inquiries/MessageCardSkeleton";
import { FilterLines, SearchLg } from "@untitled-ui/icons-react";
import { threadsByStatusBranchIdAction } from "@/actions/inquiry/thread";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  getInquiry,
  setCurrentThreadAct,
} from "@/store/slices/app_modules/inquirySlice";
import { SingleTrdsByStatusBIdType } from "@/actions/inquiry/types/thread";
import MessageHeadSkeleton from "@/components/inquiries/MessageHeadSkeleton";

const Page = () => {
  const dispatch = useAppDispatch();
  const {
    currentView,
    currentThread: { referenceNumber },
  } = useAppSelector(getInquiry);

  const fetchThreads = ({ pageParam = 1 }) =>
    threadsByStatusBranchIdAction({
      branchId: 1,
      status: currentView,
      limit: 5,
      page: pageParam,
    });

  const {
    data,
    isPending,
    fetchNextPage,
    refetch,
    isRefetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["threads"],
    queryFn: fetchThreads,
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
  });

  const threads = data ? data.pages.flatMap((page) => page.payload) : [];

  const lastThreadRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastThreadRef.current,
    threshold: 0.5,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  useEffect(() => {
    refetch();
  }, [currentView]);

  return (
    <div className=" flex flex-row">
      {/* message cards */}
      <div className=" w-2/5 flex flex-col">
        <div className=" flex flex-row items-center justify-between gap-x-2">
          <div className=" w-full">
            <TextInput placeholder="Search">
              {/* <SearchLg className=" size-4" /> */}
            </TextInput>
          </div>
          <Button variant="grey-filled">
            <FilterLines className=" size-4" />
            <p>Search</p>
          </Button>
        </div>

        <p className="pt-6 pb-3 text-sm font-medium text-gray-500 dark:text-gray-dark-500">
          Showing {threads.length} results
        </p>

        <div
          className={`flex flex-col gap-3 pr-1 overflow-hidden overflow-y-auto h-[calc(100vh-335px)]`}
        >
          {isPending || isRefetching
            ? new Array(4)
                .fill("")
                .map((el: any, i: number) => <MessageCardSkeleton />)
            : threads.map((el: SingleTrdsByStatusBIdType, i: number) => (
                <div
                  key={i}
                  ref={i === threads.length - 1 ? ref : null}
                  onClick={() => {
                    dispatch(
                      setCurrentThreadAct({
                        ...el,
                      }),
                    );
                  }}
                >
                  <MessageCard
                    key={i}
                    isSelected={referenceNumber === el.referenceNumber}
                    threadData={el}
                  />
                </div>
              ))}

          {isFetchingNextPage && (
            <p className=" animate-pulse flex items-center justify-center text-gray-500">
              Loading more...
            </p>
          )}
        </div>
      </div>

      {/* message view */}
      <div className=" w-3/5 px-8 space-y-4">
        <div>{referenceNumber ? <MessageHead /> : <MessageHeadSkeleton />}</div>
        <div className=" pb-5">
          <MessageBody />
        </div>
      </div>
    </div>
  );
};

export default Page;
