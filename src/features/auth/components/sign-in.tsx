"use client"

import type { SignInSchema } from "@/features/auth/schemas/sign-in"

import { toast } from "sonner"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import { AuthCard } from "./card"
import { GitHubButton } from "./github-button"
import { GoogleButton } from "./google-button"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Checkbox } from "@/components/ui/checkbox"
import { Input, InputPassword } from "@/components/ui/input"

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
  const [showPasswordValue, setShowPasswordValue] = useState(false)

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: undefined,
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: SignInSchema) {
    setShowPasswordValue(() => false)

    if (data.email === "you@test.com") {
      toast.error("This email is invalid")
    }
    else {
      toast.success("Successfully signed in")
    }
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
                  disabled={isSubmitting}
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
                <InputPassword
                  {...field}
                  id="form-sign-in-password"
                  disabled={isSubmitting}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password..."
                  autoComplete="off"
                  className="pr-12"
                  show={showPasswordValue}
                  setShow={setShowPasswordValue}
                  isSubmitting={isSubmitting}
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
                  disabled={isSubmitting}
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
          <Button
            type="submit"
            size="md"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? <Spinner /> : "Sign in"}
          </Button>
        </div>
      </form>
      <div className="my-6">
        <div className="relative">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-t-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium">
            <span className="bg-white px-6 text-gray-500">Or continue with</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <GitHubButton isSubmitting={isSubmitting} />
        <GoogleButton isSubmitting={isSubmitting} />
      </div>
    </AuthCard>
  )
}
