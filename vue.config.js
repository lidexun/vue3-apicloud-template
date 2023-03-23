const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { createConfig } = require('./build/index.js')
createConfig()
module.exports = defineConfig({
  outputDir: 'widget',
  publicPath: './',
  transpileDependencies: true,
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
