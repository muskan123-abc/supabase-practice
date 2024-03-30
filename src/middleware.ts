import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let redirectedToRoot = false; // Flag to track if redirected to "/"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const url = new URL(req.url);
  const path = url.pathname;
  const paths = {
    public: ["/login", "/"],
  };

  // If already redirected to "/", return the original response
  if (redirectedToRoot) {
    return res;
  }

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Retrieve session data
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (paths.public.includes(path)) {
    if (session) {
      // Redirect to "/" and set the flag
      redirectedToRoot = true;
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      redirectedToRoot = true;

      return NextResponse.redirect(new URL("/login", req.url));
    }
  }}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
