import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "it", "ar", "fr"],

  // Used when no locale matches
  defaultLocale: "it",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(it|en|ar|fr)/:path*"],
};
