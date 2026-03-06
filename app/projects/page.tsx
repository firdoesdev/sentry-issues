import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getProjectsFromDb, type TProject } from "@/services/sentry/projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SyncButton } from "./_components/sync-button";

function ProjectCard({ project }: { project: TProject }) {
  const dateFormatted = project.dateCreated 
    ? new Date(project.dateCreated).toLocaleDateString()
    : "Unknown Date";
    
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
           <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{project.name}</h3>
           <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{project.slug}</p>
        </div>
        {project.platform && (
          <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-300 capitalize">
            {project.platform}
          </span>
        )}
      </div>
      
      <div className="mt-auto text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
         Created {dateFormatted}
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) return null;

  const projects = await getProjectsFromDb(session.user.id);
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Projects</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            All Sentry projects connected to your organization.
          </p>
        </div>
        <SyncButton />
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-12 text-center flex flex-col items-center justify-center gap-4">
          <div className="text-zinc-400 dark:text-zinc-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </div>
          <p className="text-zinc-500 text-lg">No projects found locally.</p>
          <p className="max-w-md text-zinc-400 text-sm">
            Click "Sync Projects" above to pull your latest project configurations directly from Sentry. Make sure you have added your credentials in the <Link href="/settings" className="text-primary hover:underline">Settings</Link> first.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
