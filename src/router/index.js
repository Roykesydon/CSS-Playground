import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/glitch",
    name: "glitch",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/GlitchView.vue"),
  },
  {
    path: "/scan-text",
    name: "scan-text",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ScanTextView.vue"),
  },
  {
    path: "/spark",
    name: "spark",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SparkView.vue"),
  },
  {
    path: "/flip-card",
    name: "flip-card",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/FlipCardView.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
