"use client"

import type { SignUpSchema } from "@/features/auth/schemas/sign-up"

import Link from "next/link"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import { AuthCard } from "./card"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input, InputPassword } from "@/components/ui/input"

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { cn } from "@/core/css"
import { delay } from "@/core/time"
import { signUpSchema } from "@/features/auth/schemas/sign-up"

export function SignUp() {
  const [showPasswordValue, setShowPasswordValue] = useState(false)
  const [isAgreementChecked, setIsAgreementChecked] = useState(true)

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: SignUpSchema) {
    setShowPasswordValue(() => false)

    if (!isAgreementChecked) {
      // eslint-disable-next-line no-alert
      alert("You must accept terms and conditions")
      return
    }

    await delay(3000)

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
                  disabled={isSubmitting}
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
                <FieldLabel htmlFor="form-sign-up-password">
                  Password
                </FieldLabel>
                <InputPassword
                  {...field}
                  id="form-sign-up-password"
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
        <FieldGroup data-slot="checkbox-group">
          <Field
            orientation="horizontal"
            className="flex items-start"
          >
            <Checkbox
              id="form-sign-up-terms"
              disabled={isSubmitting}
              checked={isAgreementChecked}
              onCheckedChange={() => setIsAgreementChecked(!isAgreementChecked)}
            />
            <FieldContent>
              <FieldLabel
                htmlFor="form-sign-up-terms"
                className={cn(
                  "*:[a]:outline-none leading-snug",
                  "*:[a]:hover:underline *:[a]:hover:underline-offset-4",
                  "*:[a]:rounded-none *:[a]:focus-visible:ring-gray-900",
                  "*:[a]:focus-visible:ring-2 *:[a]:focus-visible:ring-offset-2",
                  isSubmitting && "*:[a]:pointer-events-none",
                )}
              >
                I agree to&nbsp;
                <Link href="/info/terms-of-service">terms</Link>
                &nbsp;and&nbsp;
                <Link href="/info/privacy-policy">conditions</Link>
              </FieldLabel>
            </FieldContent>
          </Field>
        </FieldGroup>
        <div>
          <Button
            type="submit"
            size="md"
            className="w-full"
            disabled={isSubmitting}
          >
            Create Account
          </Button>
        </div>
      </form>
    </AuthCard>
  )
}
