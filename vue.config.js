const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  outputDir: 'widget',
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
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
