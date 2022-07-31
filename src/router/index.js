import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import SelectCity from '../views/SelectCity/SelectCity.vue'
const Hesuan = () => import('../views/Hesuan/index.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select-city',
    name: 'SelectCity',
    component: SelectCity
  },
  {
    path: '/hesuan',
    name: 'Hesuan',
    component: Hesuan
  },
  {
    path: '/fangyigoods',
    name: 'FangYiGoods',
    component: () => import('../views/FangYiGoods')
  },
  {
    path: '/area',
    name: 'Area',
    component: () => import('../views/Area')
  },
  {
    path: '/prevention',
    name: 'Prevention',
    component: () => import('../views/Prevention')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel/Travel.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
