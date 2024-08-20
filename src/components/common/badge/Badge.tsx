import React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/commonCompUtils";
import { badgeVariants } from "./constants/badgeVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      badgeType,
      badgeSubType,
      badgeColor,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(
          badgeVariants({ badgeType, badgeSubType, badgeColor, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";

export default Badge;
