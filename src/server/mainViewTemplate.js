module.exports = (component, state = {}) => {
    return `
    <!doctype html>
      <html>
      <title>Hello App</title>
      <head>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
        <script>window.__INITIAL__DATA__ = ${JSON.stringify(state)}</script>
      </head>
      <body>
      <div id="root">${component}</div>
      <script src="/static/app.bundle.js"></script>
    </body>
    </html>`
}