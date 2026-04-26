import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  ...(BASE_PATH ? { basePath: BASE_PATH } : {}),
  async redirects() {
    if (!BASE_PATH) return [];
    // Map domain root to the app root; middleware then sends `/minimaxi-demo/` → `/minimaxi-demo/zh/`
    return [
      {
        source: "/",
        destination: `${BASE_PATH}/`,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
