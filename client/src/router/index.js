import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'Welcome' }
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
