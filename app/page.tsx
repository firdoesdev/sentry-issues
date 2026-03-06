import Link from "next/link";
import { AuthSection } from "./_components/auth";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-50 dark:bg-black font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            ✨ Announcing seamless Sentry integration
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50">
            Master your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              Sentry errors
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Stop drowning in noise. We aggregate your Sentry projects, surface the most critical issues, and help your team resolve bugs faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/signup">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
                Get Started for Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
            <Link href="#features">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2">
                Learn More
              </button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-4">
            No credit card required. 14-day free trial.
          </p>
        </div>

        {/* Feature Grid */}
        <div id="features" className="w-full max-w-6xl mt-32 grid gap-8 md:grid-cols-3 text-left">
          <div className="flex flex-col p-6 space-y-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Cross-Project Triage</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              View all your Sentry projects in one unified dashboard. Spot systemic issues across microservices instantly.
            </p>
          </div>

          <div className="flex flex-col p-6 space-y-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Smart Prioritization</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              AI-driven insights evaluate user impact, stack traces, and frequency so you fix what matters most first.
            </p>
          </div>

          <div className="flex flex-col p-6 space-y-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Developer Metrics</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Track resolution times, recurring regressions, and overall application health specifically tied to your Sentry data.
            </p>
          </div>
        </div>

        {/* Social Proof Placeholder */}
        <div className="mt-32 w-full max-w-4xl text-center border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
            <div className="text-xl font-bold">ACME Corp</div>
            <div className="text-xl font-bold">Globex</div>
            <div className="text-xl font-bold">Soylent Corp</div>
            <div className="text-xl font-bold">Initech</div>
            <div className="text-xl font-bold">Umbrella</div>
          </div>
        </div>
      </main>

      {/* Basic Footer */}
      <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} Your App Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
