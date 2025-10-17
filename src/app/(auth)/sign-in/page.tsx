import type { Metadata } from "next"

import { SignIn } from "@/features/auth/components/sign-in"
import { AuthLayout } from "@/features/auth/components/layout"

export const metadata: Metadata = {
  title: "Sign in",
}

export default function Page() {
  return (
    <div>
      <section aria-labelledby="signin-header">
        <h1 id="signin-header" className="sr-only">
          Sign in.
        </h1>
      </section>
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </div>
  )
}
