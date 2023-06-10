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
      layers:true
    }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'rsd-components',
        filename: 'static/chunks/primaryEntry.js',
        exposes: {
          './card': './components/card',
          './utils/goBack':'./utils/goBack'
        }
      })
    )
    return config
  }
}

module.exports = nextConfig
