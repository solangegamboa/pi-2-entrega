/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: '/pi-2-entrega/',
  basePath: '/pi-2-entrega'
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   output: 'export',
//   distDir: 'dist'
// }

// module.exports = nextConfig
