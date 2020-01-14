import { Router } from 'express';

const routes = new Router();

routes.get('/news', (req, res) => res.json({ ok: 'true' }));

export default routes;
