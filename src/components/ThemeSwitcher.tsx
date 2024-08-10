"use client";
import React, { useEffect } from "react";

import { useTheme } from "next-themes";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getTheme, setThemeAct } from "@/store/slices/themeSlice";
import { Moon01, Sun } from "@untitled-ui/icons-react";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { colorMode } = useAppSelector(getTheme);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    dispatch(setThemeAct(theme));
  }, [theme]);

  const themeToggleHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      onClick={themeToggleHandler}
      className=" size-11 bg-gray-100 dark:bg-[#29292D] rounded-full flex items-center justify-center cursor-pointer"
    >
      {colorMode === "dark" ? (
        <Moon01 className=" size-5" />
      ) : (
        <Sun className=" size-5" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
