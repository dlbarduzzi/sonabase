"use client"

import type { SignUpSchema } from "@/features/auth/schemas/sign-up"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import { AuthCard } from "./card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { signUpSchema } from "@/features/auth/schemas/sign-up"

export function SignUp() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const { isSubmitting } = form.formState

  function onSubmit(data: SignUpSchema) {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <AuthCard action="sign-up" isSubmitting={isSubmitting}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6"
      >
        <FieldGroup>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-name">
                  Name
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Brian Smith"
                  autoComplete="off"
                />
                {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
              </Field>
            )}
          />
        </FieldGroup>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-email">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="you@email.com"
                  autoComplete="off"
                />
                {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
              </Field>
            )}
          />
        </FieldGroup>
        <FieldGroup>
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-up-password">
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-up-password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password..."
                  autoComplete="off"
                />
                {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
              </Field>
            )}
          />
        </FieldGroup>
        <div>
          <Button type="submit" size="md" className="w-full">Create Account</Button>
        </div>
      </form>
    </AuthCard>
  )
}
