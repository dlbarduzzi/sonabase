import * as React from "react"

import { cn } from "@/core/css"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full min-w-0 items-center rounded-md border bg-white px-3 py-2.5",
        "text-sm text-gray-900 placeholder:text-gray-400 outline-none",
        "focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed",
        "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400",
        "border-gray-300 focus-visible:border-gray-300 focus-visible:ring-gray-200",
        "aria-invalid:border-red-500 aria-invalid:focus-visible:border-red-400",
        "aria-invalid:focus-visible:ring-red-200",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
