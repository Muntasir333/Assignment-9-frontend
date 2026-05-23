/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
        {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
    ]
  }
};

export default nextConfig;
