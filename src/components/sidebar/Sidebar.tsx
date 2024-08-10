"use client";
import React from "react";

import Item from "./Item";
import { SidebarItemTypes } from "./types/sidebarTypes";
import SidebarHeader from "./SidebarHeader";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getTheme } from "@/store/slices/themeSlice";
import {
  Anchor,
  Home01,
  Keyboard01,
  MessageTextSquare02,
  Send01,
  Server03,
  User01,
  Wallet02,
} from "@untitled-ui/icons-react";

const Sidebar = () => {
  const { sideBar } = useAppSelector(getTheme);

  return (
    <div
      id="docs-sidebar"
      className={`h-screen relative duration-300  ${sideBar ? "w-72" : "w-0"}`}
    >
      <div className=" absolute space-y-7 w-72 p-7">
        <div className=" px-4">
          <SidebarHeader />
        </div>
        <nav
          className="hs-accordion-group w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul>
            {sidebarItems.map((el: SidebarItemTypes, i: number) => (
              <Item
                key={i}
                path={el.path}
                icon={el.icon}
                subItems={el.subItems}
                title={el.title}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

const sidebarItems: SidebarItemTypes[] = [
  {
    path: "analytics",
    title: "Analytics",
    icon: <Home01 className="size-4" />,
  },
  {
    path: "customer",
    title: "Customer",
    icon: <User01 className="size-4" />,
    subItems: [
      {
        path: "inquiry",
        title: "Customer Inquiry",
        icon: <></>,
      },
      {
        path: "authorization",
        title: "Customer Authorization",
        icon: <></>,
      },
      {
        path: "journey-delete",
        title: "Journy Deletion",
        icon: <></>,
      },
    ],
  },
  {
    path: "tokens",
    title: "Tokens",
    icon: <Keyboard01 className="size-4" />,
  },
  {
    path: "system",
    title: "System",
    icon: <Server03 className="size-4" />,
  },
  {
    path: "transactions",
    title: "Transactions",
    icon: <Wallet02 className="size-4" />,
  },
  {
    path: "request",
    title: "Request",
    icon: <Send01 className="size-4" />,
  },
  {
    path: "inquiries",
    title: "Inquiries",
    icon: <MessageTextSquare02 className="size-4" />,
  },
  {
    path: "",
    title: "Port Maintenance",
    icon: <Anchor className="size-4" />,
    subItems: [
      {
        path: "celender",
        title: "Calender Maintenance",
        icon: <></>,
      },
      {
        path: "banner",
        title: "Banner Upload",
        icon: <></>,
      },
    ],
  },
];
