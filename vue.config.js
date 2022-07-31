module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apis.juhe.cn', // 聚合接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      // 360接口
      '/foo': { 
        target: 'https://bang.360.cn', // 360接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': ''
        }
      },
    }
  }
}
