import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App.jsx';

const app = express();
app.use('/static', express.static("dist/public"));

app.get('/app', (req, res) => {
  const name = 'Marvelous Wololo';

  const component = ReactDOMServer.renderToString(<App/>);

  const html = `
  <!doctype html>
    <html>
    <title>Hello App</title>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
    <script src="/static/app.bundle.js"></script>
  </body>
  </html>`

  res.send(html);
});

app.listen(3000, () => {
  console.log('Application listening port: ' + 3000);
});