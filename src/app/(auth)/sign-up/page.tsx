import { SignUp } from "./_components/sign-up"

export default function Page() {
  return (
    <div>
      <section aria-labelledby="signup-header">
        <h1 id="signup-header" className="sr-only">
          Sign up.
        </h1>
      </section>
      <SignUp />
    </div>
  )
}
