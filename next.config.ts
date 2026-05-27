import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath:
    process.env.NODE_ENV === "production" ? "/drawing-idea-generator-v2" : "",
  images: { unoptimized: true },
};

export default nextConfig;
