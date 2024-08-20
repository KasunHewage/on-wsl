"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/commonCompUtils";
import { VariantProps } from "class-variance-authority";
import { tabListVariants } from "./constants/tabListVariants";
import { tabTriggerVariants } from "./constants/tabTriggerVariants";

const Tabs = TabsPrimitive.Root;

type TabListVariants = VariantProps<typeof tabListVariants>;
type tabTriggerVariants = VariantProps<typeof tabTriggerVariants>;

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    TabListVariants {
  asChild?: boolean;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    tabTriggerVariants {
  badge?: React.ReactNode;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, children, badge, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabTriggerVariants({ variant }), className)}
      {...props}
    >
      {children}

      {badge && (
        <span
          className={` size-5 rounded-full font-semibold text-xs bg-gray-500 dark:bg-gray-dark-500 text-base-white group-data-[state=active]:bg-brand-600 dark:group-data-[state=active]:bg-brand-dark-600 flex flex-col items-center justify-center`}
        >
          {badge}
        </span>
      )}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("", className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
