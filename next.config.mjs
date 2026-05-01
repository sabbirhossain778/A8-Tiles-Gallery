/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'tilemuse.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'rmsmarble.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'www.designtiles.com.au',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
         port: ''
      },
       {
        protocol: 'https',
        hostname: 'eq7nyutfcsd.exactdn.com',
        pathname: '/**',
         port: ''
      },
    
       {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
         port: ''
      },
    
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
