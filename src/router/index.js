import Vue from 'vue'
import Router from 'vue-router'

import cart from '../components/cart'
import data from '../components/data'
import me from '../components/me'
import index from '../components/index'
import newsinfo from '../components/newsinfo'
import photolist from '../components/photo/photo'
import photoinfo from '../components/photo/photoinfo'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: index
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/data',
      component: data
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/data/newsinfo/:id',
      component: newsinfo
    },
    {
      path: '/home/photolist',
      component: photolist
    },
    {
      path: '/home/photoinfo/:id',
      component: photoinfo
    },
  ],
  linkActiveClass:'mui-active'
})
