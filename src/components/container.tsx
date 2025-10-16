import type { ComponentProps } from "react"

import { cn } from "@/core/css"

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("max-w-7xl px-4 mx-auto", className)}
      {...props}
    />
  )
}
