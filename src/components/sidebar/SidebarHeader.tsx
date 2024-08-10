"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getTheme } from "@/store/slices/themeSlice";
import { ColorModeEnum } from "@/types/theme";
import images from "@/constants/images";

const SidebarHeader = () => {
  const { colorMode } = useAppSelector(getTheme);
  return (
    <>
      {colorMode === ColorModeEnum.dark ? (
        <>
          <Image src={images.bankLogoWhite} alt="Bank Logo" />
        </>
      ) : (
        <>
          <Image src={images.bankLogoDark} alt="Bank Logo" />
        </>
      )}
    </>
  );
};

export default SidebarHeader;
