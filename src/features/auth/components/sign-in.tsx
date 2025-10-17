"use client"

import type { SignInSchema } from "@/features/auth/schemas/sign-in"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import { AuthCard } from "./card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { signInSchema } from "@/features/auth/schemas/sign-in"

export function SignIn() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: undefined,
    },
  })

  const { isSubmitting } = form.formState

  function onSubmit(data: SignInSchema) {
    // eslint-disable-next-line no-console
    console.log(data)
  }
  return (
    <AuthCard action="sign-in" isSubmitting={isSubmitting}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6"
      >
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-sign-in-email">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-in-email"
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
                <FieldLabel htmlFor="form-sign-in-password">
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  id="form-sign-in-password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password..."
                  autoComplete="off"
                />
                {fieldState.invalid ? <FieldError errors={[fieldState.error]} /> : null}
              </Field>
            )}
          />
        </FieldGroup>
        <Controller
          name="rememberMe"
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldGroup data-slot="checkbox-group">
              <Field
                orientation="horizontal"
                data-invalid={fieldState.invalid}
                className="flex items-start"
              >
                <Checkbox
                  id="form-sign-in-remember-me"
                  name={field.name}
                  aria-invalid={fieldState.invalid}
                  onCheckedChange={value => {
                    field.onChange(value)
                    field.onBlur()
                  }}
                />
                <FieldContent>
                  <FieldLabel
                    htmlFor="form-sign-in-remember-me"
                    className="leading-snug"
                  >
                    Remember me
                  </FieldLabel>
                  <FieldDescription>
                    Stay signed in. Avoid on shared devices.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldGroup>
          )}
        />
        <div>
          <Button type="submit" size="md" className="w-full">Sign in</Button>
        </div>
      </form>
    </AuthCard>
  )
}
