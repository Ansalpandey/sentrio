/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['sentrio.ansalprojects.dpdns.org', 'sentrio-app.ansalprojects.dpdns.org'],
  reactStrictMode: true,
};

export default nextConfig;
