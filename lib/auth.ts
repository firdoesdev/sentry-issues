import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; // your drizzle instance
import {
  user,
  account,
  accountRelations,
  session,
  sessionRelations,
  userRelations,
  verification,
} from "@/db/schema/auth-schema";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite",
    schema: {
      user,
      account,
      accountRelations,
      session,
      sessionRelations,
      userRelations,
      verification,
    },
  }),
});
