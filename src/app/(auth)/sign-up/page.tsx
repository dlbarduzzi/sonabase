import type { Metadata } from "next"

import { SignUp } from "@/features/auth/components/sign-up"
import { AuthLayout } from "@/features/auth/components/layout"

export const metadata: Metadata = {
  title: "Sign up",
}

export default function Page() {
  return (
    <div>
      <section aria-labelledby="signup-header">
        <h1 id="signup-header" className="sr-only">
          Sign up.
        </h1>
      </section>
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </div>
  )
}
