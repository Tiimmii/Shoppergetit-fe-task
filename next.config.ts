import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public', // Directory for the service worker and related files
  register: true, // Automatically register the service worker
  skipWaiting: true, // Activate service worker immediately after installation
  disable: false,
});

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPWA(nextConfig);
