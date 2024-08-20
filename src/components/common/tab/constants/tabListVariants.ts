import { cva } from "class-variance-authority";

export const tabListVariants = cva("inline-flex ", {
  variants: {
    variant: {
      default: [
        "gap-x-6",
        "border-b-[1px] border-gray-200 dark:border-gray-dark-200",
      ],
      "rounded-filled": [
        " gap-x-1 px-[6px] py-1 bg-gray-50 dark:bg-gray-dark-50 rounded-full",
      ],
      rounded: ["rounded-full gap-x-6 p-1"],
      icon: ["gap-x-2 p-1 bg-gray-50 dark:bg-gray-dark-50 rounded-full"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
