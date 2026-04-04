import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogrowth.co",
      },
      {
        protocol: "https",
        hostname: "gogrowth.in",
      },
      {
        protocol: "https",
        hostname: "b6g.394.myftpupload.com",
      },
    ],
  },
};

export default nextConfig;
