"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  HeroSectionTypes,
  getCurrentHeroSec,
  setHeroSecAct,
} from "@/store/slices/heroSectionSlice";
import { SidebarItemTypes, SidebarSubItemTypes } from "./types/sidebarTypes";
import { useRouter } from "next/navigation";
import { ChevronRight } from "@untitled-ui/icons-react";

const Item = (item: SidebarItemTypes) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { title } = useAppSelector(getCurrentHeroSec);

  const setHeroSectionHandler = (heroPayload: HeroSectionTypes) => {
    dispatch(setHeroSecAct(heroPayload));
    router.replace(`/${heroPayload.path}`);
  };

  return (
    <>
      {item.subItems ? (
        <>
          <li id="projects-accordion" className="hs-accordion">
            <button
              type="button"
              className=" hs-accordion-toggle w-full flex items-center group py-3 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 justify-between dark:hover:bg-brand-dark-50 "
            >
              <div className=" flex flex-row items-center gap-3">
                <span className=" text-gray-700  dark:text-solid-base w-4 h-4 group-hover:text-brand-600">
                  {item.icon}
                </span>
                <p className=" font-semibold text-gray-700 dark:text-solid-base group-hover:text-brand-600 text-[16px]">
                  {item.title}
                </p>
              </div>
              <ChevronRight className=" hs-accordion-active:rotate-90 duration-300 text-gray-400" />
            </button>

            <div
              id="projects-accordion"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul className=" ">
                {item.subItems.map((el: SidebarSubItemTypes, i: number) => (
                  <li
                    onClick={() =>
                      setHeroSectionHandler({
                        title: el.title,
                        path: `${item.path}/${el.path}`,
                      })
                    }
                    key={i}
                    className={` group flex flex-row items-center justify-between py-3 px-5 rounded-lg cursor-pointer hover:bg-brand-50 dark:hover:bg-brand-dark-50 dark:hover:bg-opacity-15 ${
                      el.title === title && "bg-brand-dark-50"
                    }`}
                  >
                    <div
                      className={` flex flex-row items-center gap-3  ${
                        el.title === title
                          ? "text-brand-600"
                          : "text-gray-500 dark:text-gray-dark-500 group-hover:text-brand-600"
                      }`}
                    >
                      <span className=" p-0.5 bg-gray-500 dark:bg-gray-dark-500 rounded-full"></span>
                      <p className=" font-semibold text-[16px] ">{el.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li
            onClick={() =>
              setHeroSectionHandler({
                title: item.title,
                path: item.path,
              })
            }
            className={`group flex flex-row items-center justify-between py-3 px-4 rounded-lg cursor-pointer hover:bg-brand-50 dark:hover:bg-brand-dark-50 dark:hover:bg-opacity-15 ${
              item.title === title && "bg-brand-50 dark:bg-brand-dark-50"
            }`}
          >
            <div className=" flex flex-row items-center gap-3 ">
              <span
                className={` text-gray-800 dark:text-solid-base w-4 h-4 group-hover:text-brand-600 ${
                  item.title === title && "text-brand-600"
                }`}
              >
                {item.icon}
              </span>
              <p
                className={` font-semibold text-gray-700 dark:text-solid-base group-hover:text-brand-600 text-[16px] `}
              >
                {item.title}
              </p>
            </div>
          </li>
        </>
      )}
    </>
  );
};

export default Item;
