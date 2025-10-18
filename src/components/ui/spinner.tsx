import { LuLoader } from "react-icons/lu"

import { cn } from "@/core/css"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LuLoader
      role="status"
      aria-label="Loading"
      className={cn("size-5 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
