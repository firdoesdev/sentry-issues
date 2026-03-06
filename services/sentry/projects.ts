import { createSentryClient } from "@/lib/fetcher/sentry-api";
import db from "@/db";
import { sentryProject } from "@/db/schema/sentry-project-schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export type TProject = {
  id: string;
  name: string;
  slug: string;
  platform?: string;
  dateCreated?: string;
};

export async function getProjectsFromDb(userId: string): Promise<TProject[]> {
  const records = await db
    .select()
    .from(sentryProject)
    .where(eq(sentryProject.userId, userId));

  return records.map((record) => ({
    id: record.sentryId,
    name: record.name,
    slug: record.slug,
    platform: record.platform || undefined,
    dateCreated: record.dateCreated || undefined,
  }));
}

export async function syncProjects(userId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { client, organizationId } = await createSentryClient(userId);
    const response = await client.get(`/organizations/${organizationId}/projects/`);

    const apiProjects = response.data;

    // Delete existing records for real sync
    await db.delete(sentryProject).where(eq(sentryProject.userId, userId));

    if (apiProjects && apiProjects.length > 0) {
      const inserts = apiProjects.map((p: any) => ({
        id: crypto.randomUUID(),
        userId,
        sentryId: String(p.id),
        name: p.name,
        slug: p.slug,
        platform: p.platform || null,
        dateCreated: p.dateCreated || null,
      }));

      await db.insert(sentryProject).values(inserts);
    }

    return { success: true };
  } catch (error: any) {
    console.log("ERROR SYNCING PROJECTS: ", error?.message);
    if (error?.message === "MISSING_SENTRY_CONFIG") {
      return { success: false, error: "MISSING_SENTRY_CONFIG" };
    }
    return { success: false, error: "FETCH_FAILED" };
  }
}
