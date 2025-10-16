import "server-only"

import { cache } from "react"
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query"

import { appRouter } from "@/core/trpc/router"
import { createContext } from "@/core/trpc/init"
import { newQueryClient } from "@/core/trpc/client/query"

export const getQueryClient = cache(newQueryClient)

export const trpc = createTRPCOptionsProxy({
  ctx: createContext,
  router: appRouter,
  queryClient: getQueryClient,
})

export const caller = appRouter.createCaller(createContext)
