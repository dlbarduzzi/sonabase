"use client"

import { useTRPC } from "@/core/trpc/client/provider"
import { useSuspenseQuery } from "@tanstack/react-query"

export function UsersView() {
  const trpc = useTRPC()
  const users = useSuspenseQuery(trpc.getUsers.queryOptions())

  if (!users || !users.data) {
    return null
  }

  return (
    <div className="mt-4 bg-gray-200 max-w-max p-4">
      <pre>{JSON.stringify(users.data, null, 2)}</pre>
    </div>
  )
}
