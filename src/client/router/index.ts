import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


export default router;
