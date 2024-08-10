"use client";
import React from "react";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getCurrentHeroSec } from "@/store/slices/heroSectionSlice";

type PageHeaderTopPropTypes = {
  children?: React.ReactNode;
};

const PageHeaderTop:React.FC<PageHeaderTopPropTypes> = ({children}) => {
  const { title } = useAppSelector(getCurrentHeroSec);
  return (
    <div className="flex flex-row items-center justify-between">
      <>
        <p className=" text-3xl font-semibold text-gray-800 dark:text-solid-base">
          {title}
        </p>
      </>
      {children}
    </div>
  );
};

export default PageHeaderTop;
