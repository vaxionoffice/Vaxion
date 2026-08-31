import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Arena exposes the dev server through an *.e2b.app origin. Allowing it
  // keeps Next's internal HMR assets available in the live preview.
  allowedDevOrigins: ["*.e2b.app"],
};

export default nextConfig;
