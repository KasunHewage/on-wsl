import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/commonCompUtils";

const badgeVariants = cva(
  "px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        // filled rounded
        filledRounded_Base:
          "rounded-full bg-gray-50 dark:bg-gray-dark-50 text-gray-700 dark:text-gray-dark-700",
        filledRounded_Brand:
          "rounded-full bg-brand-50 dark:bg-brand-dark-50 text-brand-600 dark:text-brand-dark-600",
        filledRounded_Error:
          "rounded-full bg-error-50 dark:bg-error-dark-50 text-error-600 dark:text-error-dark-600",
        filledRounded_Success:
          "rounded-full bg-success-50 dark:bg-success-dark-50 text-success-600 dark:text-success-dark-600",
        filledRounded_Warn:
          "rounded-full bg-warning-50 dark:bg-warning-dark-50 text-warning-600 dark:text-warning-dark-600",
        filledRounded_Info:
          "rounded-full bg-information-50 dark:bg-information-dark-50 text-information-600 dark:text-information-dark-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "filledRounded_Base",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export default Badge;
