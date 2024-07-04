import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("authorization")?.value;
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (cookie) return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.next();
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login/:path*", "/register/:path*", "/"],
};
