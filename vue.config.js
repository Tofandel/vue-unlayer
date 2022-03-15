module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name),
        'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version),
      })
      return definitions
    })
  }
};
