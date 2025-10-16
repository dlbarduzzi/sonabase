import { auth } from "./server"
import { headers as nextHeaders } from "next/headers"

export async function isAuthenticated() {
  const headers = await nextHeaders()
  const session = await auth.api.getSession({ headers })
  return session != null
}

export async function getUserSession() {
  const headers = await nextHeaders()
  const session = await auth.api.getSession({ headers })
  return session
}
