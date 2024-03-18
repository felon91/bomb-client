const withSvgr = require('@newhighsco/next-plugin-svgr');
/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '45.89.27.69',
        port: '8080',
        pathname: '/category/**',
      },
    ],
  },
});

module.exports = nextConfig;
