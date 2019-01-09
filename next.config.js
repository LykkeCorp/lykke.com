module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  publicRuntimeConfig: {
      SELF_URL: process.env.SELF_URL || 'http://localhost:3000',
      BASE_API_URL: process.env.BASE_API_URL || 'https://apiv2.lykke.com/api',
      WALLET_URL: process.env.WALLET_URL || 'https://wallet.lykke.com',
      TERMINAL_URL: process.env.TERMINAL_URL || 'https://trade.lykke.com'
  }
}
