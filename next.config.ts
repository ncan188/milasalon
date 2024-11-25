import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'demo.ghost.io',
      pathname: '**',
      
    },
    {
      protocol: 'https',
      hostname: 'static.ghost.org',
      pathname: '**',
      
    },
    {
      protocol: 'http',
      hostname: 'online.gov.vn',
      pathname: '**',
      
    },
    {
      protocol: 'http',
      hostname: 'images.dmca.com',
      pathname: '**',
      
    },
  ]
  }
};

export default nextConfig;
