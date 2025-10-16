"use client"

import z from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { strings } from "@/tools/strings"
import { authClient } from "@/core/auth/client"

const NAME_MIN_CHARS = 3
const NAME_MAX_CHARS = 80

const PASSWORD_MIN_CHARS = 8
const PASSWORD_MAX_CHARS = 72

const signUpSchema = z.strictObject({
  name: z
    .string({ error: "Name is required" })
    .trim()
    .min(1, "Name is required")
    .min(NAME_MIN_CHARS, {
      error: `Name must be at least ${NAME_MIN_CHARS} characters long`,
    })
    .max(NAME_MAX_CHARS, {
      error: `Name must be at most ${NAME_MAX_CHARS} characters long`,
    }),
  email: z
    .email("Not a valid email")
    .trim()
    .min(1, "Email is required"),
  password: z
    .string({ error: "Password is required" })
    .trim()
    .min(1, "Password is required")
    .min(PASSWORD_MIN_CHARS, {
      error: `Password must be at least ${PASSWORD_MIN_CHARS} characters long`,
    })
    .max(PASSWORD_MAX_CHARS, {
      error: `Password must be at most ${PASSWORD_MAX_CHARS} characters long`,
    })
    .refine(value => strings(value).hasNumber(), {
      error: "Password must contain at least 1 number",
    })
    .refine(value => strings(value).hasSpecialChar(), {
      error: "Password must contain at least 1 special character",
    })
    .refine(value => strings(value).hasLowercaseChar(), {
      error: "Password must contain at least 1 lowercase character",
    })
    .refine(value => strings(value).hasUppercaseChar(), {
      error: "Password must contain at least 1 uppercase character",
    }),
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUp() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: SignUpSchema) {
    await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
      fetchOptions: {
        onError: ({ error }) => {
          console.error("Failed to sign up...", error)
        },
        onSuccess: ({ data }) => {
          // eslint-disable-next-line no-console
          console.log("Signed up successfully!")
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
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={e => form.setValue("name", e.target.value)}
            className="border"
          />
        </div>
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
        <button type="submit" className="bg-gray-300 px-3 py-2">Sign up</button>
      </form>
    </div>
  )
}
