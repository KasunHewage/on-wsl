import { cva } from "class-variance-authority";
import React from "react";
import { ToastContainer } from "react-toastify";

const buttonVariants = cva(
  "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default: [],
        success: ["bg-blue-600"],
        error: [],
        info: [],
        warning: [],
      },
      size: {
        xxs: "py-1.5",
        xs: "py-2",
        sm: "gap-4 py-2.5",
        md: "gap-5 py-2.5",
        lg: "py-3",
        xl: "py-3.5",
        xxl: "py-4",
      },
      btnType: {
        button: "",
        icon: "p-0 rounded-full flex items-center justify-center",
      },
    },
    compoundVariants: [
      { btnType: "icon", size: "xxs", class: "size-8" },
      { btnType: "icon", size: "xs", class: "size-9" },
      { btnType: "icon", size: "sm", class: "size-10" },
      { btnType: "icon", size: "md", class: "size-11" },
      { btnType: "icon", size: "lg", class: "size-12" },
      { btnType: "icon", size: "xl", class: "size-[52px]" },
      { btnType: "icon", size: "xxl", class: "size-14" },
    ],
    defaultVariants: {
      variant: "default",
      size: "sm",
      btnType: "button",
    },
  }
);

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const Alert = () => {
  return (
    <>
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
    </>
  );
};

export default Alert;
