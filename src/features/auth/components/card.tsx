import Link from "next/link"
import Image from "next/image"

import { cn } from "@/core/css"
import { siteConfig } from "@/core/site"
import type React from "react"

type Action = "sign-up" | "sign-in"

type AuthCardProps = {
  action: Action
  isSubmitting: boolean
  children: React.ReactNode
}

function getCardProps(action: Action) {
  if (action === "sign-in") {
    return {
      header: {
        title: "Sign in",
        message: "Enter your details to access your account.",
      },
      footer: {
        link: "/sign-up",
        title: "Sign up",
        question: "Need to an account?",
      },
    }
  }
  return {
    header: {
      title: "Sign up",
      message: "Create an account and start exploring.",
    },
    footer: {
      link: "/sign-in",
      title: "Sign in",
      question: "Already have an account?",
    },
  }
}

export function AuthCard({
  action,
  isSubmitting,
  children,
}: AuthCardProps) {
  const props = getCardProps(action)
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="p-8 border border-gray-200 rounded-xl grid gap-y-8">
        <div className="flex shrink-0 items-center justify-start">
          <Link
            href="/"
            className={cn(
              "rounded-full outline-none focus-visible:ring-2",
              "focus-visible:ring-gray-900 focus-visible:ring-offset-2",
              isSubmitting && "pointer-events-none",
            )}
          >
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={500}
              height={500}
              className="w-10"
            />
          </Link>
          <span className="sr-only">Link to home page.</span>
        </div>
        <div>
          <h2 className="font-bold text-gray-900">{props.header.title}</h2>
          <p className="text-sm text-gray-900">{props.header.message}</p>
        </div>
        <div>
          {children}
        </div>
        <div>
          <div className="text-sm text-center text-gray-900">
            {props.footer.question}
            {" "}
            <Link
              href={props.footer.link}
              className={cn(
                "font-semibold outline-none hover:underline hover:underline-offset-4",
                "focus-visible:ring-2 focus-visible:ring-offset-2",
                "focus-visible:ring-gray-900",
                isSubmitting && "pointer-events-none",
              )}
            >
              {props.footer.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
