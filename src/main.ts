import { createSSRApp } from "vue"
import App from "./App.vue"
import createRouter from "./router"
import { createVuetify } from "vuetify"

const vuetify = createVuetify({ ssr: true })
export const createApp = () => {
  /**
   * use createSSRApp to render the Vue App on the server
   * and send it to the user to do the hydration process
   */
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(vuetify)
  return {
    app,
    router,
    vuetify
  }
}
