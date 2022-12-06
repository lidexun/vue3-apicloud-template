const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = defineConfig({
  outputDir: 'widget',
  publicPath: './',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: (loaderContext) => {
          return {
            plugins: [
              ['autoprefixer'],
              {
                'postcss-pxtorem': {
                  rootValue: 100, // 1rem的大小
                  propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                  selectorBlackList: [/^html$/]
                }
              }
            ]
          }
        }
      }
    }
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
