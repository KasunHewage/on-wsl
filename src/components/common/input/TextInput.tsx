"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

export enum TxtInputRoundeEnums {
  "rounded-sm" = "rounded-sm",
  "rounded-md" = "rounded-md",
  "rounded-lg" = "rounded-lg",
  "rounded-xl" = "rounded-xl",
  "rounded-2xl" = "rounded-2xl",
  "rounded-3xl" = "rounded-3xl",
  "rounded-full" = "rounded-full",
}

export type TxtInputPropTypes = {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  rounded?: keyof typeof TxtInputRoundeEnums;
  bg?: any;
};
const inputId = uuidv4();

const TextInput: React.FC<TxtInputPropTypes> = ({
  label,
  placeholder,
  children,
  rounded,
  bg,
}) => {
  return (
    <div className=" space-y-3">
      {label && <label htmlFor={inputId}>Email</label>}
      <div className="relative">
        <input
          type="email"
          className={`peer py-2 px-4 ${
            children && "ps-11"
          } block w-full border-gray-200 ${
            rounded ? rounded : "rounded-lg"
          } text-sm border-[1px]  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500`}
          placeholder={placeholder && placeholder}
        />
        {children && (
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <span className="shrink-0 size-4 text-gray-500 dark:text-neutral-500">
              {children}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
