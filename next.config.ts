import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // เปิดใช้ Strict Mode ของ React
  reactStrictMode: true,

  // ตั้งค่า Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.easykost.com',
      },
    ],
  },

};

export default nextConfig;
