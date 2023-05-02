const isGitHubDeploy = process.env.GITHUB_DEPLOY

let assetPrefix = ''
let basePath = '/'

if (isGitHubDeploy) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  distDir: 'dist',
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
