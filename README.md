# vue-tour-of-heroes

用vue来实现angular2官方教程英雄指南任务

主要功能：
1.导航切换
2.新增英雄
3.编辑英雄
4.删除英雄
5.过滤搜索展示

用到的主要技术：
1.vue
2.vuex
3.router
  3.1.router导航配置
  3.2.路由信息对象的属性（$route.path, $route.params）
  $route.params: 用来从英雄列表到英雄详情的导航,这个是关键
  $route.path： router-link添加active样式


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
