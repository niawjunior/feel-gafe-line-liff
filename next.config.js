/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    LIFF_ID: process.env.LIFF_ID,
  },
}

module.exports = nextConfig
