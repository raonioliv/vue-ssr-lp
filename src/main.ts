import { createSSRApp } from "vue"
import App from "./App.vue"
import createRouter from "./router"

export const createApp = () => {
  /**
   * use createSSRApp to render the Vue App on the server
   * and send it to the user to do the hydration process
   */
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return {
    app,
    router
  }
}
