const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { createConfig, IP } = require('./build/index.js')
createConfig()
process.env.VUE_APP_PATH = 'http://' + IP() + '/#'
module.exports = defineConfig({
  outputDir: 'apicloud/widget',
  publicPath: './',
  assetsDir:'./',
  transpileDependencies: true,
  devServer: {
    // 项目启动端口之后会变成3000
      port: 9527
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin(),
      // 按需导入vant组件
      ComponentsPlugin({
        resolvers: [VantResolver()]
      }),
      // 自动导入Vue3函数
      AutoImport({
        imports: ['vue', 'vue-router']
      })
    ]
  }
})
