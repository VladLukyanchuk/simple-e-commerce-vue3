import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Login from "@/assets/pages/LoginPage";
import Home from "@/assets/pages/HomePage";
import Product from "@/assets/pages/TheProductAlias";
import Cart from "@/assets/pages/CartPage";

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
