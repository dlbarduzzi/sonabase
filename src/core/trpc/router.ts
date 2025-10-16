import { procedure, router } from "./init"

export const appRouter = router({
  getUsers: procedure.query(async ({ ctx }) => {
    const users = await ctx.db.query.users.findMany()
    return users
  }),
})

export type AppRouter = typeof appRouter
