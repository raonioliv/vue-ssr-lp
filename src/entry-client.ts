import { createApp } from "./main.js"

/**
 * initiate the Vue App for a client-side application
 */
const { app, router } = createApp()

router.isReady().then(() => {
  app.mount("#app")
})
