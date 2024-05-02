import { renderToString } from "vue/server-renderer"
import { createApp } from "./main"

/**
 * initiate the Vue App for a server-side application,
 * we use renderToString to render the app to HTML
 */

// export const render = async () => {
//   const { app } = createApp()
//   const html = await renderToString(app)

//   return {
//     html
//   }
export const render = async (url) => {
  try {
    const { app, router } = createApp()
    await router.push(url)
    await router.isReady()
    const ctx = {}
    const html = await renderToString(app, ctx)

    return {
      html
    }
  } catch (error) {
    console.log(error)
  }
}
