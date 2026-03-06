"use server";

import { auth } from "@/lib/auth";
import db from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateSentrySettings(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const sentryBaseUrl = formData.get("sentryBaseUrl") as string;
  const sentryOrganizationId = formData.get("sentryOrganizationId") as string;
  const sentryAuthToken = formData.get("sentryAuthToken") as string;

  try {
    await db
      .update(user)
      .set({
        sentryBaseUrl: sentryBaseUrl || null,
        sentryOrganizationId: sentryOrganizationId || null,
        sentryAuthToken: sentryAuthToken || null,
      })
      .where(eq(user.id, session.user.id));
      
    revalidatePath("/settings");
  } catch (error) {
    console.error("Failed to update Sentry settings:", error);
    throw new Error("Failed to save settings");
  }
}
