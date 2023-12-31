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
      {
        protocol: "https",
        hostname: "qr-official.line.me",
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
