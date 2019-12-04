import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import WaitingSeat from '../views/WaitingSeat.vue'
import Member from '../views/Member.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
    // children: [
    //   {
    //     path: 'result',
    //     components: {
    //       search: Result
    //     }
    //   },
    //   {
    //     path: 'ticket',
    //     components: {
    //       search: Ticket
    //     }
    //   }
    // ]
  },
  {
    path: '/history',
    name: 'history',
    component: History
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/waiting',
    name: 'waiting',
    component: WaitingSeat
  }
]

const router = new VueRouter({
  routes
})

export default router
