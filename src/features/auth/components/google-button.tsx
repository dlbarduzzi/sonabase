"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type GoogleButtonProps = {
  isSubmitting: boolean
}

export function GoogleButton({ isSubmitting }: GoogleButtonProps) {
  return (
    <Button
      type="button"
      size="md"
      variant="outline"
      disabled={isSubmitting}
    >
      <Image
        src="/images/google.svg"
        alt="GitHub"
        width={20}
        height={20}
      />
      Continue with Google
    </Button>
  )
}
