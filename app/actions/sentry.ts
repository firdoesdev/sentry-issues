"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { syncProjects } from "@/services/sentry/projects";
import { revalidatePath } from "next/cache";

export async function syncProjectsAction() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  const result = await syncProjects(session.user.id);
  
  if (result.success) {
    revalidatePath("/projects");
    return { success: true };
  } else {
    return { error: result.error || "Failed to sync" };
  }
}
