import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MenuView from '../views/MenuView.vue'

import PedidoComponent from '../components/PedidoComponent.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView
  },
  {
    path: '/config-pedido',
    name: 'config-pedido',
    component: PedidoComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
