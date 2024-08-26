import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MenuView from "../views/MenuView.vue";
import ListaPedidoComponent from "@/components/ListaPedidoComponent.vue";
import ConfiguracaoPedidoView from "@/views/ConfiguracaoPedidoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: AboutView,
  },
  {
    path: "/config-pedido",
    name: "config-pedido",
    component: ConfiguracaoPedidoView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: ListaPedidoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
