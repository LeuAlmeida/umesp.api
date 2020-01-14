import { Router } from 'express';

const Feed = require('rss-to-json');

const routes = new Router();

routes.get('/news', (req, res) => Feed.load('https://metodista.br/rss.xml', (err, rss) => res.json(rss)));

export default routes;
