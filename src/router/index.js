import Vue from 'vue'
import Router from 'vue-router'

const dashboard = resolve => require(['../components/dashboard/dashboard.vue'], resolve)
const heroes = resolve => require(['../components/heroes/heroes.vue'], resolve)
const heroDetail = resolve => require(['../components/heroDetail/heroDetail.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: dashboard
    },
    {
      path: '/dashboard',
      component: dashboard
    },
    {
      path: '/heroes',
      component: heroes
    },
    {
      path: '/heroDetail/:id',
      component: heroDetail
    }
  ]
})
