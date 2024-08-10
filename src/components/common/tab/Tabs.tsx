"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/commonCompUtils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex items-center gap-x-6", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  badge?: React.ReactNode;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, badge, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      " font-semibold data-[state=active]:border-brand-600 dark:data-[state=active]:border-brand-dark-600 data-[state=active]:text-gray-800 dark:data-[state=active]:text-gray-dark-800 py-3.5 inline-flex group items-center gap-4 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 dark:text-gray-dark-500",
      className
    )}
    {...props}
  >
    {children}
    {badge ? (
      <span className=" size-5 rounded-full font-semibold text-xs bg-gray-500 dark:bg-gray-dark-500 text-base-white group-data-[state=active]:bg-brand-600 dark:group-data-[state=active]:bg-brand-dark-600 flex flex-col items-center justify-center">
        {badge}
      </span>
    ) : (
      <span className=" size-5 rounded-full font-semibold text-xs bg-gray-500 dark:bg-gray-dark-500 text-base-white group-data-[state=active]:bg-brand-600 dark:group-data-[state=active]:bg-brand-dark-600 flex flex-col items-center justify-center">
        {badge}
      </span>
    )}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("", className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
