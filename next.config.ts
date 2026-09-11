import type { NextConfig } from 'next';

const isPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig: NextConfig = {
  output: 'export',
  basePath: isPages ? '/sag-for-cash' : '',
  trailingSlash: true,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
