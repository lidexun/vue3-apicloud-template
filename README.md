# @Vue/cli5 + Vue3 + APICloud(hybird app)

### 简介
APIcloud是一款国内混合APP框架，有着丰富原生插件商城和不错的兼容性。但是开发模式比较老旧还是使用html同步导入模式并且需要重载，与现代前端开发脱轨对前端开发人员并不太友好，因此本项目基于@vue/cli5上开发APIcloud项目混合APP项目，在这可以使用Vue3全家桶，ES6和各种NPM插件，拥抱生态，敏捷开发，事半功倍。
### 特性
- 基于 Vue-cli5
- 最新Vue全家桶, Vue3 + Vue-router6 + Vant UI
- 配置 Vue3 自动导入 composition api
- 配置 Vue-router 根据文件系统生成路由地址
- 移动端适配方案(vw)
- Less 预处理
- Axios 封装与配置
- 热更新
- ...

### 预览图
![image](https://i.hd-r.cn/8802d98a0b7391dc26e892532b6cb60f.png)
### 准备
- 获取项目代码
```sh
git clone git@github.com:lidexun/vue3-apicloud.git
```
- 安装依赖(先别启动vue项目)
```sh
cd vue3-apicloud
pnpm install
```
- 迁移APICloud代码到Vue项目的public文件夹
  - ![image](https://i.hd-r.cn/935dd8ce1f5363021f3ddebb04900555.jpg)
- 启动服务
```sh
pnpm serve
```
- 启动服务后就APICloud Studio 3 编辑器中 WIFI同步【全量】
    - ![image](https://i.hd-r.cn/283c5f64702895d191b1c06ac3c9698e.jpg)
- 效果
    - ![image](https://i.hd-r.cn/1ee3097ddc0419ca84418f28d570ff31.jpg)

### 代码打包
- 切换代码管理
  - ![image](https://i.hd-r.cn/d92751e51252a77dc620dc56627dae93.png)
- 使用git
    - ![image](https://i.hd-r.cn/e82941f1baf7a478d20a091e9c4e1fcb.png)
- 打包生成静态文件
```sh
pnpm build:dev
### or
pnpm build:prod
# 进入生成的文件夹
cd apicloud
# 提交git
git init
git add -A
git commit -m 'widget'
# git地址
git push -f git@github.com:lidexun/vue3-apicloud.git master:apicloud
# 构建APP APICloud会获取git上的静态文件打包APP
```
### 最后
接下来你就可以开发的app啦，如果你觉得这个项目对你有帮助，可以给一个 star 支持下👍

