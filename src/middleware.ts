import { betterFetch } from "@better-fetch/fetch";
import { NextRequest, NextResponse } from "next/server";
import { Session } from "./server/auth/auth";
import { normalizePath } from "./server/lib/helper";

const routeGroups = {
  auth: new Set(["/login", "/register"]),
  //   user: new Set(["/registration-form", "/registration-status"]),
  //   admin: new Set(["/dashboard"]),
  public: new Set(["/"]),
};

export async function middleware(request: NextRequest) {
  const normalizedPath = normalizePath(request.nextUrl.pathname);

  if (routeGroups.public.has(normalizedPath)) {
    return NextResponse.next();
  }

  let session: Session | null;
  try {
    const { data } = await betterFetch<Session>("/api/auth/get-session", {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });
    session = data;
  } catch {
    session = null;
  }

  // Not logged in
  if (!session) {
    // If the route is part of the auth group, allow access
    // if (
    //   routeGroups.user.has(normalizedPath) ||
    //   routeGroups.admin.has(normalizedPath)
    // ) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }

    return NextResponse.next();
  }

  // Validate route access based on session here if needed
  // For example, if user already logged in and accessing login or register page
  if (routeGroups.auth.has(normalizedPath)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)",
  ],
};
