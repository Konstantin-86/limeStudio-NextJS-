/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sun9-**.userapi.com",
      },
    ],
  },
};

export default nextConfig;
