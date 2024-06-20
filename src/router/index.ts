import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from "vue-router"

import HomePage from "../views/HomePage.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
]

export default function () {
  return createRouter({
    routes: routes,
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory()
  })
}
