import { cn } from "@/utils/commonCompUtils";
import { cva } from "class-variance-authority";
import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    return <div className={cn(cva({ className }))} ref={ref} {...props} />;
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
