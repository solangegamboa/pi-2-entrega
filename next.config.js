const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = 'pi-2-entrega'

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  experimental: {
    appDir: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}