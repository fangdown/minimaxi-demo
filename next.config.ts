import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  trailingSlash: true,
};

export default nextConfig;
