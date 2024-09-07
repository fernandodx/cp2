import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const routes = [
  {
    path: '/',
    name: 'paginaInicio',
    component: MenuView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('../views/PedidosView.vue')
  },
  {
    path: '/config-pedido',
    name: 'config-pedido',
    component: () => import('../views/ConfiguracaoPedidoView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
