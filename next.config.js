const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
};

module.exports = {
    nextConfig: nextConfig,
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        loader: 'imgix',
        path: 'the "domain" of your Imigix source',
    }
  }