import { Router } from 'express';

const routes = new Router();

routes.get('/news', (req, res) => {
  return res.send('Hello World')
} )
export default routes;