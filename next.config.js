/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: ['rb.gy']
  images: {
   domains: ['rb.gy','static-exp1.licdn.com','avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
