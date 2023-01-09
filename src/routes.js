import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Login from "@/assets/components/log-in_pop-up";
import Home from "@/assets/pages/home_page"
import Product from "@/assets/pages/_productAlias";
import ShopBag from "@/assets/components/shop_bag";

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
      path: "/shop-bag",
      name: "shop-bag",
      component: ShopBag,
    },
    {
      path: "/:productAlias",
      name: "productAlias",
      component: Product,
    }
  ],
});

export default routers;
