'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import App from './components/app.vue'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({ // eslint-disable-line no-new
  el: '#ds',
  router: new VueRouter({
    routes: routes,
    mode: 'history'
  }),
  render: h => h(App)
})
