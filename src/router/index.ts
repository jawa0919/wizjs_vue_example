import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/Base",
    name: "Base",
    component: () => import("../views/core/Base.vue")
  },
  {
    path: "/Route",
    name: "Route",
    component: () => import("../views/core/Route.vue")
  },
  {
    path: "/Navigate",
    name: "Navigate",
    component: () => import("../views/core/Navigate.vue")
  },
  {
    path: "/Share",
    name: "Share",
    component: () => import("../views/core/Share.vue")
  },
  {
    path: "/Ui",
    name: "Ui",
    component: () => import("../views/core/Ui.vue")
  },
  {
    path: "/Network",
    name: "Network",
    component: () => import("../views/core/Network.vue")
  },
  {
    path: "/Storage",
    name: "Storage",
    component: () => import("../views/core/Storage.vue")
  },
  {
    path: "/Media",
    name: "Media",
    component: () => import("../views/core/Media.vue")
  },
  {
    path: "/Location",
    name: "Location",
    component: () => import("../views/core/Location.vue")
  },
  {
    path: "/File",
    name: "File",
    component: () => import("../views/core/File.vue")
  },
  {
    path: "/OpenApi",
    name: "OpenApi",
    component: () => import("../views/core/OpenApi.vue")
  },
  {
    path: "/Device",
    name: "Device",
    component: () => import("../views/core/Device.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
