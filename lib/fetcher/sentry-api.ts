import axios from "axios";
import db from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";

export async function createSentryClient(userId: string) {
  // Query the user's Sentry config from the database
  const userRecord = await db
    .select({
      sentryBaseUrl: user.sentryBaseUrl,
      sentryAuthToken: user.sentryAuthToken,
      sentryOrganizationId: user.sentryOrganizationId,
    })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1)
    .then((res) => res[0]);

  if (!userRecord?.sentryAuthToken || !userRecord?.sentryOrganizationId) {
    throw new Error("MISSING_SENTRY_CONFIG");
  }

  // Ensure reasonable default if they just provided token & org
  const BASE_URL = userRecord.sentryBaseUrl || "https://sentry.io/api/0/";
  const AUTH_TOKEN = "Bearer " + userRecord.sentryAuthToken;

  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });

  return {
    client,
    organizationId: userRecord.sentryOrganizationId,
  };
}
