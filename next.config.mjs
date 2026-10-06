/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/bank-management-system",
        destination: "/projects/credence-core",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Resume.pdf",
      },
    ];
  },
};

export default nextConfig;
