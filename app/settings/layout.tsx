import { TopNavigation } from "@/app/_components/top-navigation";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-zinc-50 dark:bg-black font-sans selection:bg-primary selection:text-primary-foreground">
      {/* 
        This is a protected layout area where you could put a sidebar, 
        internal header, or specialized navigation for authenticated users. 
      */}
      <aside className="hidden md:flex w-64 flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
        <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
          <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center text-white dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          <span>Apex</span>
        </div>

        <nav className="flex flex-col gap-2">
          <div className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
            Issues
          </div>
          <div className="px-3 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900 rounded-md">
            <Link href="/settings">Settings</Link>
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-end h-16 border-b border-zinc-200 dark:border-zinc-800 px-6 sm:px-12 md:hidden bg-white dark:bg-zinc-950">
          {/* Mobile header area - relying on global auth chunk if needed */}
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-50 mr-auto">
            <span>Apex</span>
          </div>
        </header>

        <div className="p-6 sm:p-12 max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
