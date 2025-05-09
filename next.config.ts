import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.devdojo.com',
        port: '',
        pathname: '/images/june2021/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
