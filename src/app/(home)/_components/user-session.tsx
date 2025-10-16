"use client"

import { authClient } from "@/core/auth/client"

export function UserSession() {
  const session = authClient.useSession()
  return (
    <div className="my-4 p-4 bg-gray-200 max-w-max">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
