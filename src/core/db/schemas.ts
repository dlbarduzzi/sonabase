import { boolean, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  isEmailVerified: boolean("is_email_verified").default(false).notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
}, table => [uniqueIndex("email_index").on(table.email)])

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()).notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
})

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()).notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
})

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  value: text("value").notNull(),
  identifier: text("identifier").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
})
