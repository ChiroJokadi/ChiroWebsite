/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Schakelt de TypeScript type-checking uit tijdens builds op Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Schakelt de ESLint-controles uit tijdens builds op Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
