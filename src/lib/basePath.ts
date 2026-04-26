/**
 * Must match `basePath` in `next.config.ts` (used by middleware redirects).
 * - Vercel: empty so the deployment is served at the project root (e.g. `*.vercel.app/`).
 * - Local: `/minimaxi-demo` to mirror subpath deploys. Override with `NEXT_PUBLIC_BASE_PATH`.
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.VERCEL
      ? ""
      : "/minimaxi-demo";
