export default function FeaturesDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Overview</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Monitor your latest Sentry issues and aggregate project health.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Placeholder Stat Cards */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col gap-2">
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Projects</h3>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">12</div>
        </div>
        
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col gap-2">
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Active Issues</h3>
          <div className="text-3xl font-bold text-red-600 dark:text-red-500">2,349</div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col gap-2">
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Avg Resolution Time</h3>
          <div className="text-3xl font-bold text-green-600 dark:text-green-500">2.4h</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex flex-col overflow-hidden min-h-[400px]">
        <div className="border-b border-zinc-200 dark:border-zinc-800 p-4 px-6 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/20">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">Recent Critical Issues</h2>
          <button className="text-sm font-medium text-primary hover:underline">View all</button>
        </div>
        <div className="p-6 flex-1 flex items-center justify-center text-zinc-500 text-sm italic">
          No critical issues detected in the last 24 hours. Connect a Sentry project to see data.
        </div>
      </div>
    </div>
  );
}
