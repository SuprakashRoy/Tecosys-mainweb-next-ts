/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MONGODB_URL: process.env.MONGODB_URL,
      JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    },
    experimental: {
      forceSwcTransforms: true,
    },
    images: {
      domains: ['static.vecteezy.com','avatars.githubusercontent.com','lh3.googleusercontent.com'],
    },  
}
  export default nextConfig;