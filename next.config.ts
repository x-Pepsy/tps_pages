import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tps_pages',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
