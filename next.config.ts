import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable the disk-heavy filesystem cache for dev
    turbopackFileSystemCacheForDev: false,
  },
  /* config options here */
};

export default nextConfig;
