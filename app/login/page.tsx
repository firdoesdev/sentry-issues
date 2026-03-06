import { SignupForm } from "./_components/form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Left side - graphic/branding */}
      <div className="hidden lg:flex w-1/2 bg-zinc-900 flex-col justify-between p-12 text-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span>Back to website</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-zinc-900 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 22h20L12 2z" /></svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Master your Sentry errors.</h2>
          <p className="text-zinc-400">
            Join thousands of developers turning chaotic logging into actionable insights and robust applications.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="lg:hidden absolute top-6 left-6">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
        </div>
        
        <div className="w-full max-w-sm">
          <SignupForm />
          
          <p className="text-center text-sm text-zinc-500 mt-8">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
