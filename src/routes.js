const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
