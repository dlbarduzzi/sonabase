import { env } from "./env/client"

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
