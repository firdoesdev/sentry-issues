import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/signup");

  if (isAuthPage) {
    try {
      // To strictly prevent logged-in users from seeing the login/signup 
      // pages, we verify the session. Since we're in Next.js middleware (Edge), 
      // we use standard fetch to ping the better-auth endpoint.
      const response = await fetch(new URL("/api/auth/get-session", request.url).toString(), {
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.session) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
    } catch (error) {
      console.error("Middleware auth check failed:", error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup"],
};
