import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/v1", destination: "/v1/index.html" },
    ];
  },
};

export default nextConfig;
