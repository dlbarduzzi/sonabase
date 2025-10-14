import type { ClassValue } from "clsx"

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { env } from "./env/client"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

type SiteConfig = {
  url: string
  name: string
  description: string
}

export const siteConfig: SiteConfig = {
  url: env.NEXT_PUBLIC_APP_URL,
  name: "SonaBase",
  description: "Smarter automation for growing businesses.",
}
