

const { Router } = require('express');

const { cats } = require('../../data/cats.js');

const router = Router();

router
  .get('/:id', (req, res) => {
    const catNameId = cats.find((cat) => ({ id:cat.id, name:cat.name }));
    res.json(catNameId);
  })
  .get('/', (req, res) => {
    const catNameId = cats.map((cat) => ({ id:cat.id, name:cat.name }));
    res.json(catNameId);
  });

module.exports = router;
