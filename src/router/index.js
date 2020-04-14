import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parentAndChild',
    name: 'ParentAndChild',
    component: () => import('../views/Communication/ParentAndChild/ParentAndChild.vue')
  },
  {
    path: '/intergenerational',
    name: 'Intergenerational',
    component: () => import('../views/Communication/Intergenerational/Intergenerational.vue')
  },
  {
    path: '/brothers',
    name: 'Brothers',
    component: () => import('../views/Communication/Brothers/Brothers.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router