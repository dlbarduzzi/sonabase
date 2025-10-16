import superjson from "superjson"

import { cache } from "react"
import { initTRPC } from "@trpc/server"

import { db } from "@/core/db/connect"

const t = initTRPC.create({ transformer: superjson })

export const router = t.router

export const procedure = t.procedure.use(({ next }) => {
  return next({ ctx: {
    db,
  } })
})

export const createContext = cache(async () => {
  return { foo: "bar" }
})
