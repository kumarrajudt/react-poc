import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App.jsx';
import htmlTemplate from './mainViewTemplate';
const app = express();
app.use('/static', express.static("dist/public"));

app.get('/app', (req, res) => {
  const state = { use: 'reduxState' };

  const component = ReactDOMServer.renderToString(<App />);

  const html = htmlTemplate(component, state);

  res.send(html);
});

app.listen(3000, () => {
  console.log('Application listening port: ' + 3000);
});