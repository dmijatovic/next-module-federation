/** @type {import('next').NextConfig} */

const {NextFederationPlugin} = require('@module-federation/nextjs-mf')

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  webpack: (config, options) => {
    const {isServer} = options
    const nextFolder = isServer ? 'ssr' : 'chunks'
    config.experiments = {
      topLevelAwait: true,
      layers: true
    }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'rsd-home',
        remotes: {
          'rsd-components':`rsd-components@http://localhost:3004/_next/static/${nextFolder}/remoteEntry.js`
        },
        filename:'static/chunks/primaryEntry.js'
      })
    )
    return config
  }
}

module.exports = nextConfig
