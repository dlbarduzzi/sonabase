"use client"

import { authClient } from "@/core/auth/client"

export function UserSession() {
  const session = authClient.useSession()
  return (
    <div>
      <div className="my-4 p-4 bg-gray-200 max-w-max">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      {session ? (
        <div>
          <button
            type="button"
            onClick={() => authClient.signOut()}
            className="px-3 py-2 bg-gray-200"
          >
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  )
}
