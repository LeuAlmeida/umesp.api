import { Router } from 'express';

const routes = new Router();

routes.get('/news', (req, res) => {
  return res.json({ ok: 'true' });
});

export default routes;
