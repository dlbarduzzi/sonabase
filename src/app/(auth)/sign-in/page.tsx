import { SignIn } from "./_components/sign-in"

export default function Page() {
  return (
    <div>
      <section aria-labelledby="signin-header">
        <h1 id="signin-header" className="sr-only">
          Sign in.
        </h1>
      </section>
      <div className="p-4">
        <h1 className="font-semibold">Sign in!</h1>
        <SignIn />
      </div>
    </div>
  )
}
