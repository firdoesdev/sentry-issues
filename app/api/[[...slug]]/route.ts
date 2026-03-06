import { Elysia, t } from "elysia";
import db from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";

const app = new Elysia({ prefix: "/api" })
  .get("/", "Hello Nextjs")
  .get("/test", async (context) => {
    const findUser = await db.select().from(user).where(eq(user.id, "1"));

    return Response.json(findUser);
  })
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.fetch;
export const POST = app.fetch;
