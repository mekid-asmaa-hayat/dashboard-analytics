import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mode React Strict activé pour détecter les problèmes potentiels
  reactStrictMode: true,

  // Configuration des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },

  // Optimisation du build
  
  
  // Variables d'environnement exposées côté client//
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || '',
  },
};

export default nextConfig;