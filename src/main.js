'use strict'

import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './components/app.vue'

Vue.use(Vuetify)

new Vue({ // eslint-disable-line no-new
  el: '#ds',
  render: h => h(App)
})
