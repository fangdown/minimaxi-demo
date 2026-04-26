import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  ...(BASE_PATH ? { basePath: BASE_PATH } : {}),
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/minimaxi-demo",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
