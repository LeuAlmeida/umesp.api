import { Router } from 'express';

const Feed = require('rss-to-json');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const routes = new Router();

routes.get('/news', (req, res) => Feed.load('https://metodista.br/rss.xml', (err, rss) => res.json(rss)));

export default routes;
