"use client";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getTheme, setSideBarAct } from "@/store/slices/themeSlice";
import {
  Bell01,
  DotsVertical,
  Menu01,
  Settings02,
} from "@untitled-ui/icons-react";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const { sideBar } = useAppSelector(getTheme);
  return (
    <div className=" h-full p-7 flex flex-row items-center justify-between">
      <div
        onClick={() => dispatch(setSideBarAct(sideBar ? false : true))}
        className=" bg-gray-50 dark:bg-gray-dark-50 size-11 rounded-full flex items-center justify-center cursor-pointer text-gray-800 dark:text-gray-dark-800"
      >
        <Menu01 className=" size-5" />
      </div>
      <div className=" flex flex-row items-center gap-7">
        <div className=" flex items-center gap-2 text-gray-800 dark:text-gray-dark-800">
          <div>
            <ThemeSwitcher />
          </div>
          <div className=" size-11 bg-gray-100 dark:bg-gray-dark-100 rounded-full flex items-center justify-center">
            <Bell01 className=" size-5 " />
          </div>
          <div className=" size-11 bg-gray-100 dark:bg-gray-dark-100 rounded-full flex items-center justify-center">
            <Settings02 className=" size-5" />
          </div>
        </div>
        <div className=" flex flex-row items-center gap-2">
          <div className="size-11 rounded-full bg-gray-400 dark:bg-gray-dark-100"></div>
          <div className=" text-gray-400 dark:text-gray-dark-400">
            <DotsVertical className=" size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
