import { Elysia, t } from "elysia";
import db from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";
import { getProjects } from "@/services/sentry/projects";

const app = new Elysia({ prefix: "/api" })
  .get("/", "Hello Nextjs")
  .get("/test", async (context) => {
    const findUser = await db.select().from(user);

    return Response.json(findUser);
  })
  .get("/projects", async () => {
    const projects = await getProjects();

    return Response.json(projects);
  })
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.fetch;
export const POST = app.fetch;
