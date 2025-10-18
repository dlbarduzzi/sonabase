import type { VariantProps } from "class-variance-authority"

import * as React from "react"

import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/core/css"

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm
  font-medium transition-all disabled:pointer-events-none shrink-0 cursor-pointer
  outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
  {
    variants: {
      variant: {
        default: `bg-gray-900 text-white hover:bg-gray-800
          focus-visible:ring-gray-900 disabled:bg-gray-700 font-semibold`,
        outline: `border border-gray-300 bg-white text-gray-900 hover:bg-gray-100
          focus-visible:ring-gray-300 disabled:bg-gray-100 disabled:text-gray-400`,
      },
      size: {
        default: "h-10 px-4 py-2",
        md: "h-11 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  size,
  variant,
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
