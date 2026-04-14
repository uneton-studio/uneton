import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES, ROUTES } from "@/app.constants";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: ROUTES.HOME,
      name: ROUTE_NAMES.HOME,
      component: HomeView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

export default router;
