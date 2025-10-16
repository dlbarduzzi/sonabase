import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

import { env } from "@/core/env/server"
import { users, sessions, accounts, verifications } from "./schemas"

export const schema = { users, sessions, accounts, verifications }

const client = postgres(env.DATABASE_URL)
const connect = drizzle({ client, schema })

export const db = connect
export type DB = typeof db
