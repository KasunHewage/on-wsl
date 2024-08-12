"use client";

import React from "react";
import { cn } from "@/utils/commonCompUtils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "peer py-0 px-4 rounded-lg text-sm focus:outline-none ",
  {
    variants: {
      variant: {
        default: [
          "bg-transparent",
          "text-gray-700",
          "border-gray-300",
          "placeholder:text-gray-500",
          "border-[1px]",
          "dark:bg-neutral-900",
          "dark:border-neutral-700",
          "dark:text-neutral-400",
          "dark:placeholder:text-gray-dark-500",
          "disabled:bg-gray-100",
          "focus:border-brand-700",
          "focus:border-[2px]",
          "focus:placeholder:text-gray-700",
        ],
        filled: [
          "bg-transparent",
          "text-gray-700",
          "border-gray-300",
          "placeholder:text-gray-700",
          "border-[1px]",
          "dark:bg-neutral-900",
          "dark:border-neutral-700",
          "dark:text-neutral-400",
          "disabled:bg-gray-100",
          "focus:border-brand-700",
          "focus:border-[2px]",
        ],
        "error-default": [
          "bg-transparent",
          "text-gray-700",
          "border-red-300",
          "placeholder:text-gray-500",
          "border-[1px]",
          "dark:bg-neutral-900",
          "dark:border-neutral-700",
          "dark:text-neutral-400",
          "disabled:bg-gray-100",
          "focus:border-red-300",
          "focus:border-[3px]",
          "focus:placeholder:text-gray-700",
        ],
        "error-filled": [
          "bg-transparent",
          "text-gray-700",
          "border-red-300",
          "placeholder:text-gray-700",
          "border-[1px]",
          "dark:bg-neutral-900",
          "dark:border-neutral-700",
          "dark:text-neutral-400",
          "disabled:bg-gray-100",
          "focus:border-red-300",
          "focus:border-[3px]",
        ],
      },
      size: {
        md: "gap-2 py-2.5 px-8",
        lg: "py-3 px-8",
        xl: "py-3.5 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const hintVariants = cva("text-sm letter-s", {
  variants: {
    variant: {
      default: "text-gray-700 dark:text-gray-dark-700",
      error: "text-error-600 dark:text-error-dark-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const endIconClass = cva("text-gray-500", {
  variants: {
    hintVariant: {
      error: "text-red-600",
      default: "text-gray-500",
    },
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  size?: "md" | "lg" | "xl";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  hint?: string;
  hintVariant?: "default" | "error";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      className,
      variant = "default",
      size = "md",
      asChild = false,
      startIcon,
      endIcon,
      label,
      hint,
      hintVariant = "default",
      onChange,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? "div" : "input";

    return (
      <div className=" flex flex-col gap-1.5">
        {label && (
          <label
            className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-dark-700"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 dark:text-neutral-500">
                {startIcon}
              </span>
            </div>
          )}
          <Comp
            id={name}
            name={name}
            className={cn(
              "peer py-2 px-4 block w-full",
              {
                "pl-10": startIcon,
                "pr-10": endIcon,
              },
              inputVariants({ variant, size, className }),
            )}
            onChange={onChange}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className={endIconClass({ hintVariant })}>{endIcon}</span>
            </div>
          )}
        </div>
        {hint && (
          <label
            htmlFor={props.id}
            className={cn(hintVariants({ variant: hintVariant }))}
          >
            {hint}
          </label>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
