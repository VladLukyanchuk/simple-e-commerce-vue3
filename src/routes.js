import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Login from "@/assets/components/log-in_pop-up";
import Home from "@/assets/pages/home_page"
import Product from "@/assets/pages/_productAlias";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/:productAlias",
      name: "productAlias",
      component: Product,
    }
  ],
});

export default routers;
