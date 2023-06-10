# Next module federation test

This repo tests webpack module federation options with Next.js

## Conlusiona

- [module federation library](https://github.com/module-federation/universe/tree/main/packages/nextjs-mf) is not widely used
- it does not support app folder in next.js
- I was not able to get it running. The following error occurs when importing components

```bash
SyntaxError: Unexpected token '<'
    at new Script (node:vm:100:7)
    at createScript (node:vm:265:10)
    at Object.runInNewContext (node:vm:306:10)
    at /home/dusan/dev/dv4all/next-mod-fed/home-app/.next/server/webpack-runtime.js:367:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  message: 'Loading script failed.\n' +
    "(Unexpected token '<': http://localhost:3004/_next/static/ssr/remoteEntry.js)",
  name: 'ScriptExternalLoadError'
}
faking ./card module on rsd-components

```

## Modules

Each repo contains one module.

## Inplementation

we use module federation from webpack for next

1. install module federation

```bash
# install module federation and webpack
npm install @module-federation/nextjs-mf webpack
```

2. Update next.config.js in each module project. Define remotes to connect to and which components this module exposes.

```Javascript
// home module definitions
/** @type {import('next').NextConfig} */

const {NextFederationPlugin} = require('@module-federation/nextjs-mf')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    const { isServer } = options
    const nextFolder = isServer ? "ssr" : "chunks"
    config.experiments = {
      topLevelAwait: true
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
```

```Javascript
// components module definitions
/** @type {import('next').NextConfig} */

const {NextFederationPlugin} = require('@module-federation/nextjs-mf')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    const {isServer} = options
    const nextFolder = isServer ? 'ssr' : 'chunks'
    config.experiments = {
      topLevelAwait: true
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

```
