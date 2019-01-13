import Index from '../pages/Index'
import Portfolio from '../pages/Portfolio'
import NotFound from '../pages/NotFound'

export default [
  {
    key: 'Index',
    path: '/',
    exact: true,
    component: Index
  },

  {
    key: 'Portfolio',
    path: '/portfolio',
    component: Portfolio
  },

  {
    key: 'NotFound',
    component: NotFound
  }
]
