"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type GitHubButtonProps = {
  isSubmitting: boolean
}

export function GitHubButton({ isSubmitting }: GitHubButtonProps) {
  return (
    <Button
      type="button"
      size="md"
      variant="outline"
      disabled={isSubmitting}
    >
      <Image
        src="/images/github.svg"
        alt="GitHub"
        width={20}
        height={20}
      />
      Continue with GitHub
    </Button>
  )
}
