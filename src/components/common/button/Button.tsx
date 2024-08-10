import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/commonCompUtils";

const buttonVariants = cva(
  "rounded-full flex flex-row py-0.5 px-4 items-center gap-1.5 text-sm font-semibold border-[1px] border-transparent",
  {
    variants: {
      variant: {
        default: [
          "bg-brand-600",
          "text-solid-base",
          "active:bg-brand-700",
          "hover:bg-brand-700",
          "hover:text-solid-base",
          "disabled:bg-gray-100",
          "disabled:text-gray-400",
          "disabled:active:bg-gray-200",
        ],
        "secondary-filled": [
          "bg-brand-50",
          "text-brand-600",
          "active:bg-brand-100",
          "hover:bg-brand-100",
          "hover:text-brand-600",
          "disabled:bg-gray-100",
          "disabled:text-gray-400",
          "disabled:border-[1px]",
          "disabled:border-gray-200",
          "disabled:active:bg-gray-200",
        ],
        "grey-filled": [
          "bg-gray-50",
          "text-gray-700",
          "dark:text-gray-dark-700",
          "active:bg-gray-100",
          "active:dark:bg-gray-dark-100",
          "dark:bg-gray-dark-50",
          "hover:bg-gray-50",
          "hover:text-gray-800",
          "hover:dark:text-gray-dark-800",
          "hover:active:bg-gray-100",
          "hover:active:dark:bg-gray-dark-100",
          "hover:border-gray-300",
          "hover:dark:border-gray-dark-300",
          "disabled:bg-gray-100",
          "disabled:dark:bg-gray-dark-100",
          "disabled:text-gray-400",
          "disabled:dark:text-gray-dark-400",
          "disabled:border-[1px]",
          "disabled:border-gray-200",
          "disabled:dark:border-gray-dark-200",
          "disabled:active:bg-gray-200",
          "disabled:active:dark:bg-gray-dark-200",
        ],
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
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
