import { cva } from "class-variance-authority";

export const tabTriggerVariants = cva(
  "text-gray-500 dark:text-gray-dark-500 font-semibold text-sm group inline-flex items-center",
  {
    variants: {
      variant: {
        default: [
          "gap-1 py-3.5",
          " border-b-2 border-transparent whitespace-nowrap ",
          "data-[state=active]:border-brand-600 dark:data-[state=active]:border-brand-dark-600",
          "data-[state=active]:text-gray-800 dark:data-[state=active]:text-gray-dark-800",
        ],
        "rounded-filled": [
          " gap-1 px-3 py-1 rounded-full",
          "data-[state=active]:bg-solid-base dark:data-[state=active]:bg-solid-dark-base",
          "data-[state=active]:text-gray-800 dark:data-[state=active]:text-gray-dark-800",
        ],
        "filled-colored": [
          "gap-1 px-3 py-[14px]",
          " border-b-2 border-transparent whitespace-nowrap ",
          "data-[state=active]:bg-brand-50 dark:data-[state=active]:bg-brand-dark-50",
          "data-[state=active]:border-brand-600 dark:data-[state=active]:border-brand-dark-600",
          "data-[state=active]:text-brand-600 dark:data-[state=active]:text-brand-600",
        ],
        rounded: [
          " gap-1 px-3 py-1 rounded-full",
          "data-[state=active]:bg-brand-50 dark:data-[state=active]:bg-brand-dark-50",
          "data-[state=active]:text-brand-600 dark:data-[state=active]:text-brand-600",
        ],
        icon: [
          "rounded-full gap-1 px-3 py-1",
          "data-[state=active]:bg-solid-base dark:data-[state=active]:bg-solid-dark-base",
          "data-[state=active]:text-brand-600 dark:data-[state=active]:text-brand-600",
        ],
      },
      size: {},
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "default",
    },
  },
);
