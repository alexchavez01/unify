"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Active state styles
        "data-[state=active]:bg-background",
        "dark:data-[state=active]:text-yellow-500",
        "dark:data-[state=active]:border-input",
        "dark:data-[state=active]:bg-input/30",
        "data-[state=active]:shadow-sm",

        // Default text colors
        "text-black",
        "dark:text-black",

        // Layout and alignment
        "inline-flex",
        "h-[calc(100%-1px)]",
        "flex-1",
        "items-center",
        "justify-center",
        "gap-1.5",

        // Sizing and spacing
        "rounded-md",
        "border",
        "border-border",
        "px-2",
        "py-1",
        "text-sm",
        "font-medium",
        "whitespace-nowrap",

        // Transitions
        "transition-[color,box-shadow]",

        // Focus styles
        "focus-visible:ring-[3px]",
        "focus-visible:outline-1",
        "focus-visible:border-ring",
        "focus-visible:ring-ring/50",
        "focus-visible:outline-ring",

        // Disabled state
        "disabled:pointer-events-none",
        "disabled:opacity-50",

        // Icon adjustments
        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",

        // Custom class passed in
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
