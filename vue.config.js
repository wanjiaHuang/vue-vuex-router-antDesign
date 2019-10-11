module.exports = {
  publicPath: './', // 部署在一个域名的根路径上
  outputDir: './dist', // 生成的生产环境构建文件的目录(打包后放在哪个目录)
  assetsDir: './public', // 静态资源存放目录
  // productionSourceMap: false,
  css: {
    modules: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true// 这里如若不设置会报Inline JavaScript is not enabled
      }
    }
  },
  // 这里的设置是因为不禁用会导致路由懒加载功能失效
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }

}
