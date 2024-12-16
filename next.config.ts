/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true, // Permanent redirect (301) or temporary (307)
      },
    ];
  },
  
};

export default nextConfig;
