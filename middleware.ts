import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");
  const isProtectedPage = pathname.startsWith("/dashboard");

  try {
    const response = await fetch(
      new URL("/api/auth/get-session", request.url).toString(),
      {
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
      },
    );

    const hasSession = response.ok && (await response.json())?.session;

    // 1. If trying to access login/signup while ALREADY logged in, send to dashboard
    if (isAuthPage && hasSession) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // 2. If trying to access a protected page while NOT logged in, send to login
    if (isProtectedPage && !hasSession) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    console.error("Middleware auth check failed:", error);
    // On unexpected fail, assume unauthorized for protected pages
    if (isProtectedPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*"],
};
