module.exports = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://mariamkhmahran.github.io/conten-market-square'
      : '',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};
