import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";
import { BASE_PATH } from "@/lib/basePath";

function withTrailingSlash(path: string): string {
  if (path.includes("?") || path.includes("#")) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/** Strip every `basePath` prefix (fixes accidental `/minimaxi-demo/minimaxi-demo/...`). */
function stripBasePath(pathname: string): string {
  let p = pathname;
  while (true) {
    if (p === BASE_PATH || p === `${BASE_PATH}/`) return "/";
    if (p.startsWith(`${BASE_PATH}/`)) {
      p = p.slice(BASE_PATH.length);
      if (!p.startsWith("/")) p = `/${p}`;
      continue;
    }
    break;
  }
  return p;
}

function hasLocalePrefix(pathname: string): boolean {
  return locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname === `/${locale}/` ||
      pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const fullPathname = new URL(request.url).pathname;
  const pathname = stripBasePath(fullPathname);

  const lastSegment = pathname.split("/").filter(Boolean).pop() ?? "";
  const looksLikeFile =
    lastSegment.includes(".") && /\.[a-z0-9]{1,12}$/i.test(lastSegment);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/images") ||
    looksLikeFile
  ) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname)) {
    if (!fullPathname.startsWith(BASE_PATH)) {
      const url = request.nextUrl.clone();
      // NextURL adds `basePath` in Location — set path *without* basePath
      url.pathname = withTrailingSlash(pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  const rest = pathname === "/" ? "" : pathname;
  const localized =
    rest === "" || rest === "/"
      ? `/${defaultLocale}/`
      : `/${defaultLocale}${rest.startsWith("/") ? rest : `/${rest}`}`;

  const url = request.nextUrl.clone();
  url.pathname = withTrailingSlash(localized);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|fonts|images|favicon.ico).*)", "/"],
};
