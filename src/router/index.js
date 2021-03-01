import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Cart from '../views/Cart.vue'
import SuccessCheckout from '../views/SuccessCheckout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart  
  },
  {
    path: '/success-order',
    name: 'SuccessCheckout',
    component: SuccessCheckout  
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
