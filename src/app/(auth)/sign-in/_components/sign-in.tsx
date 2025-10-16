"use client"

import z from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { authClient } from "@/core/auth/client"

const signInSchema = z.strictObject({
  email: z
    .email("Not a valid email")
    .trim()
    .min(1, "Email is required"),
  password: z
    .string({ error: "Password is required" })
    .trim()
    .min(1, "Password is required"),
  rememberMe: z.boolean().or(z.undefined()),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: undefined,
    },
  })

  async function onSubmit(data: SignInSchema) {
    await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
      callbackURL: "/",
      fetchOptions: {
        onError: ({ error }) => {
          console.error("Failed to sign in...", error)
        },
        onSuccess: ({ data }) => {
          // eslint-disable-next-line no-console
          console.log("Signed in successfully!")
          // eslint-disable-next-line no-console
          console.log(data)
        },
      },
    })
  }
  return (
    <div className="my-4">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={e => form.setValue("email", e.target.value)}
            className="border"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={e => form.setValue("password", e.target.value)}
            className="border"
          />
        </div>
        {form.formState.errors ? (
          <div>
            <div className="my-4 p-4 bg-gray-100 max-w-max">
              <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
            </div>
            <div className="my-4">
              <button
                type="button"
                className="bg-gray-300 px-3 py-2"
                onClick={() => {
                  form.reset()
                  form.clearErrors()
                }}
              >
                Clear Errors
              </button>
            </div>
          </div>
        ) : null}
        <button type="submit" className="bg-gray-300 px-3 py-2">Sign in</button>
      </form>
    </div>
  )
}
