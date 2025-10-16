import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Container } from "./container"

import { cn } from "@/core/css"
import { siteConfig } from "@/core/site"

export function Navbar() {
  return (
    <nav className="bg-gray-300 border-b border-b-gray-400/40">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              href="/"
              className={cn(
                "rounded-full outline-none focus-visible:ring-2",
                "focus-visible:ring-gray-900 focus-visible:ring-offset-2",
              )}
            >
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={500}
                height={500}
                className="w-10"
                priority={true}
              />
              <span className="sr-only">Link to home page.</span>
            </Link>
          </div>
          <div>
            <Button asChild>
              <Link href="/sign-in">
                Sign in
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
