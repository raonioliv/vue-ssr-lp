/* eslint-disable */

import express from "express"
import fs from "fs"
import morgan from "morgan"
import path from "path"
import { createServer } from "vite"

const __dirname = path.resolve()
async function initServer() {
  const app = express()

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom"
  })

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares)
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  )
  app.use("*", async (req, res) => {
    // 1. Read index.html
    let template = fs.readFileSync(
      path.resolve(__dirname, "index.html"),
      "utf-8"
    )

    // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
    //    and also applies HTML transforms from Vite plugins, e.g. global
    //    preambles from @vitejs/plugin-react
    template = await vite.transformIndexHtml(req.originalUrl, template)

    // 3. Load the server entry. ssrLoadModule automatically transforms
    //    ESM source code to be usable in Node.js! There is no bundling
    //    required, and provides efficient invalidation similar to HMR.
    const { render } = await vite.ssrLoadModule("/src/entry-server.js")

    // 4. render the app HTML. This assumes entry-server.js's exported
    //     `render` function calls appropriate framework SSR APIs,
    //    e.g. ReactDOMServer.renderToString()
    // 5. Inject the app-rendered HTML into the template.

    try {
      const { html: appHtml } = await render(req.originalUrl)

      const html = template.replace("<!--app-html-->", appHtml)
      // 6. Send the rendered HTML back.
      res.set({ "Content-Type": "text/html" }).end(html)
    } catch (error) {
      vite.ssrFixStacktrace(error)
      console.error("SSR Error:", error)
      res.status(500).end("Internal Server Error: \n" + error)
    }
  })

  return { app, vite }
}

initServer().then(({ app }) =>
  app.listen(8569, () => {
    console.log("Server started on: http://localhost:8569")
  })
)
