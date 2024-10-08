import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
import { ROUTER_PATH } from "./path.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME.path,
      name: ROUTER_PATH.HOME.name,
      component: Home,
    },
    {
      path: ROUTER_PATH.PORTFOLIO.path,
      name: ROUTER_PATH.PORTFOLIO.name,
      component: Portfolio,
    },
    {
      path: ROUTER_PATH.CONTACTS.path,
      name: ROUTER_PATH.CONTACTS.name,
      component: Contact,
    },
  ],
});

export default router;
