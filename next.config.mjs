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
        hostname: 'images.pixabay.com',
      },
        {
        protocol: 'https',
        hostname: '	media.istockphoto.com',
      },
    ]
  }
};

export default nextConfig;
