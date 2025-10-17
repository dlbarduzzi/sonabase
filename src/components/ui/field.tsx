"use client"

import type { VariantProps } from "class-variance-authority"

import { useMemo } from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/core/css"
import { Label } from "./label"

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("", className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-2",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: ["flex-row items-center"],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1",
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn("group/field-label peer/field-label flex w-fit", className)}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-gray-700 text-sm",
        className,
      )}
      {...props}
    />
  )
}

function FieldError({
  errors,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    if (errors?.length === 1) {
      return errors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-red-500 text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
}
