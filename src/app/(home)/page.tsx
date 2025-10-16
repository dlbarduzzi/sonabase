import { UsersView } from "./users-view"
import { getQueryClient, trpc } from "@/core/trpc/server/query"

import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"

export default function Page() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(trpc.getUsers.queryOptions())
  return (
    <div>
      <section aria-labelledby="homepage-header">
        <h1 id="homepage-header" className="sr-only">
          Homepage.
        </h1>
      </section>
      <div className="p-4">
        <h1 className="font-semibold">Welcome to SonaBase!</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<p>Loading...</p>}>
            <UsersView />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  )
}
