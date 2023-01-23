import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Login from "@/assets/pages/log-in_pop-up";
import Home from "@/assets/pages/home_page"
import Product from "@/assets/pages/_productAlias";
import Cart from "@/assets/pages/cart_component";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/cart_component",
      name: "cart-component",
      component: Cart,
    },
    {
      path: "/:productAlias",
      name: "productAlias",
      component: Product,
    }
  ],
});

export default routers;
