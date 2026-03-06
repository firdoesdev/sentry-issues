import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import db from "@/db";
import { user } from "@/db/schema/auth-schema";
import { eq } from "drizzle-orm";
import { updateSentrySettings } from "./actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null; // Handled by middleware
  }

  // Best practice would be to query the DB directly here for fresh data
  const userRecord = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id))
    .limit(1)
    .then((res) => res[0]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Settings</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Manage your account configurations and external integrations.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex flex-col overflow-hidden">
        <div className="border-b border-zinc-200 dark:border-zinc-800 p-4 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">Sentry Integration</h2>
          <p className="text-sm text-zinc-500 mt-1">
            Connect your Sentry account to aggregate issues and monitor project health.
          </p>
        </div>
        
        <div className="p-6">
          <form action={updateSentrySettings} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sentryBaseUrl">Sentry Base URL</Label>
              <Input 
                id="sentryBaseUrl"
                name="sentryBaseUrl"
                placeholder="https://sentry.io/api/0/" 
                defaultValue={userRecord?.sentryBaseUrl || ""}
              />
              <p className="text-xs text-zinc-500">
                Leave blank to use the default Sentry SaaS URL. Only needed if you self-host Sentry.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sentryAuthToken">Sentry Auth Token</Label>
              <Input 
                id="sentryAuthToken"
                name="sentryAuthToken"
                type="password"
                placeholder="sntrys_"
                defaultValue={userRecord?.sentryAuthToken || ""}
              />
               <p className="text-xs text-zinc-500">
                Requires <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">project:read</span> and <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">event:read</span> permissions.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Save Configurations
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
