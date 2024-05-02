import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"
import PageTeste from "../components/PageTeste.vue"
import HomePage from "../components/HomePage.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/helloworld",
    component: HelloWorld,
    name: "helloworld"
  },
  {
    path: "/teste",
    component: PageTeste,
    name: "teste"
  }
]

export default function () {
  return createRouter({
    routes: routes,
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory()
  })
}
