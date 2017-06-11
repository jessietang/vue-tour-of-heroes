# vue-tour-of-heroes

#用vue来实现angular2官方教程英雄指南任务

#主要功能：<br/>
1.导航切换<br/>
2.新增英雄<br/>
3.编辑英雄<br/>
4.删除英雄<br/>
5.过滤搜索展示<br/>

#用到的主要技术：<br/>
1.vue<br/>
2.vuex<br/>
3.router<br/>
  3.1.router导航配置<br/>
  3.2.路由信息对象的属性（$route.path, $route.params）<br/>
  $route.params: 用来从英雄列表到英雄详情的导航,这个是关键；<br/>
  $route.path： router-link添加active样式<br/>
 


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
