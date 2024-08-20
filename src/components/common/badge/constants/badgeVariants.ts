import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "flex flex-row items-center gap-1 px-2 py-0.5 text-xs font-medium border-[1px] border-transparent",
  {
    variants: {
      badgeType: {
        filled: ["rounded"],
        outlined: ["border-[1px]"],
      },
      badgeSubType: {
        none_rounded: [],
        rounded: ["rounded-full"],
      },
      badgeColor: {
        gray: ["text-gray-700 dark:text-gray-dark-700"],
        primary: ["text-brand-600 dark:text-brand-dark-600"],
        error: ["text-error-600 dark:text-error-dark-600"],
        success: ["text-success-600 dark:text-success-dark-600"],
        warning: ["text-warning-600 dark:text-warning-dark-600"],
        information: ["text-information-600 dark:text-information-dark-600"],
      },
    },
    compoundVariants: [
      // filled
      {
        badgeType: "filled",
        badgeColor: "gray",
        class: "bg-gray-50 dark:bg-gray-dark-50",
      },
      {
        badgeType: "filled",
        badgeColor: "error",
        class: "bg-error-50 dark:bg-error-dark-50",
      },
      {
        badgeType: "filled",
        badgeColor: "primary",
        class: "bg-brand-50 dark:bg-brand-dark-50",
      },
      {
        badgeType: "filled",
        badgeColor: "success",
        class: "bg-success-50 dark:bg-success-dark-50",
      },
      {
        badgeType: "filled",
        badgeColor: "warning",
        class: "bg-warning-50 dark:bg-warning-dark-50",
      },
      {
        badgeType: "filled",
        badgeColor: "information",
        class: "bg-information-50 dark:bg-information-dark-50",
      },

      //   outlined
      {
        badgeType: "outlined",
        badgeColor: "gray",
        class: [
          "bg-gray-50 dark:bg-gray-dark-50",
          "border-gray-700 dark:border-gray-700",
        ],
      },
      {
        badgeType: "outlined",
        badgeColor: "primary",
        class: [
          "bg-brand-50 dark:bg-brand-dark-50",
          "border-brand-600 dark:border-brand-600",
        ],
      },
      {
        badgeType: "outlined",
        badgeColor: "error",
        class: [
          "bg-error-50 dark:bg-error-dark-50",
          "border-error-600 dark:border-error-600",
        ],
      },
      {
        badgeType: "outlined",
        badgeColor: "success",
        class: [
          "bg-success-50 dark:bg-success-dark-50",
          "border-success-600 dark:border-success-600",
        ],
      },
      {
        badgeType: "outlined",
        badgeColor: "warning",
        class: [
          "bg-warning-50 dark:bg-warning-dark-50",
          "border-warning-600 dark:border-warning-600",
        ],
      },
      {
        badgeType: "outlined",
        badgeColor: "information",
        class: [
          "bg-information-50 dark:bg-information-dark-50",
          "border-information-600 dark:border-information-600",
        ],
      },
    ],
  },
);
