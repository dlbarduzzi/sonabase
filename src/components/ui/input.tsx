import * as React from "react"

import { cn } from "@/core/css"
import { FaEye, FaEyeSlash } from "react-icons/fa"

type InputProps = React.ComponentProps<"input">

function Input({ className, type, ...props }: InputProps) {
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

type InputPasswordProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  isSubmitting: boolean
} & InputProps

function InputPassword({ show, setShow, isSubmitting, ...props }: InputPasswordProps) {
  return (
    <div className="relative">
      <Input type={show ? "text" : "password"} {...props} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <div
          role="button"
          onClick={() => setShow(() => !show)}
          className={cn("text-gray-300", isSubmitting && "pointer-events-none")}
        >
          {show ? <FaEye className="size-6" /> : <FaEyeSlash className="size-6" />}
        </div>
      </div>
    </div>
  )
}

export { Input, InputPassword }
