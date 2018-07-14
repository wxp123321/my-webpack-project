import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Todos from '@/pages/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/todos',
      name: 'todos',
      component: Todos
    }
  ]
})
