import { Suspense } from "react"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import { UsersView } from "./_components/users-view"
import { UserSession } from "./_components/user-session"

import { getQueryClient, trpc } from "@/core/trpc/server/query"

// Use this for build to pass since this page depends on db call.
export const dynamic = "force-dynamic"

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
        <UserSession />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<p>Loading...</p>}>
            <UsersView />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  )
}
