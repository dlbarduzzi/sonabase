import { redirect } from "next/navigation"
import { getUserSession } from "@/core/auth/helper"

export default async function Page() {
  const session = await getUserSession()

  if (!session) {
    return redirect("/sign-in")
  }

  return (
    <div>
      <section aria-labelledby="profile-header">
        <h1 id="profile-header" className="sr-only">
          User profile.
        </h1>
      </section>
      <div className="p-4">
        <h1 className="font-semibold">Profile!</h1>
        <div className="my-4 p-4 bg-gray-200 max-w-max">
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
