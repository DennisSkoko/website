'use strict'

import About from './components/about.vue'
import Projects from './components/projects.vue'
import Contact from './components/contact.vue'
import NotFound from './components/not-found.vue'

export default [
  { path: '/', name: 'about', component: About },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', name: 'not-found', component: NotFound }
]
