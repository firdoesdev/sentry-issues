"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { syncProjectsAction } from "@/app/actions/sentry";
import { toast } from "sonner"; // Assuming sonner is installed from previous shadcn setups, or we can just use normal alerts

export function SyncButton() {
  const [isPending, startTransition] = useTransition();

  const handleSync = () => {
    startTransition(async () => {
      const result = await syncProjectsAction();
      if (result.error) {
        if (result.error === "MISSING_SENTRY_CONFIG") {
          alert("Missing Sentry Config! Please update your settings.");
        } else {
          alert("Error syncing: " + result.error);
        }
      } 
    });
  };

  return (
    <Button 
      onClick={handleSync} 
      disabled={isPending}
      className="flex items-center gap-2"
    >
      {isPending ? (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
      )}
      {isPending ? "Syncing..." : "Sync Projects"}
    </Button>
  );
}
