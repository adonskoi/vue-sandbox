import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about'
    }
  ],
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})
