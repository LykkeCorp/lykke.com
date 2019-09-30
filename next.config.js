const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    await copyFile(join(dir, 'static/sitemap/sitemap.xml'), join(outDir, 'sitemap.xml'));
    await copyFile(join(dir, 'static/sitemap/ror.xml'), join(outDir, 'ror.xml'));
    await copyFile(join(dir, 'static/sitemap/sitemap.xml.gz'), join(outDir, 'sitemap.xml.gz'));
    await copyFile(join(dir, 'static/sitemap/sitemap.html'), join(outDir, 'sitemap.html'));
    await copyFile(join(dir, 'static/sitemap/urllist.txt'), join(outDir, 'urllist.txt'));
    return defaultPathMap;
  },
  publicRuntimeConfig: {
      SELF_URL: process.env.SELF_URL || 'http://localhost:3000',
      BASE_API_URL: process.env.BASE_API_URL || 'https://apiv2-dev.lykkex.net/api',
      WALLET_URL: process.env.WALLET_URL || 'https://wallet.lykke.com',
      TERMINAL_URL: process.env.TERMINAL_URL || 'https://trade.lykke.com',
      LYCI_ASSET_INDEX: process.env.LYCI_ASSET_INDEX || 'TLYCI',
      P_LYCI_ASSET_INDEX: process.env.P_LYCI_ASSET_INDEX || '36eb1c74-11f0-4f1c-904f-d1ab42f69582',
      SC_LYCI_ASSET_INDEX: process.env.SC_LYCI_ASSET_INDEX || '02c6ce1e-e946-4c9a-a5ab-51b9314ba4ef',
      LYCIUSD_ASSET_PAIR: process.env.LYCIUSD_ASSET_PAIR || 'TLYCIUSD',
      AUTH_REDIRECT_URL: process.env.AUTH_REDIRECT_URL,
      AUTH_SERVER_URL: process.env.AUTH_SERVER_URL
  }
}
