/**
 * Must match `basePath` in `next.config.ts` (used by middleware redirects).
 * Production and local use the same subpath: `/minimaxi-demo/...` (e.g. `/minimaxi-demo/zh/`).
 * Set `NEXT_PUBLIC_BASE_PATH` to override (e.g. `""` to serve at domain root).
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "/minimaxi-demo";
