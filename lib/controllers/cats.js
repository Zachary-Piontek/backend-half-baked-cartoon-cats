

const { Router } = require('express');

const { cats } = require('../../data/cats.js');

const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param:', req.params.id);
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    console.log(cats);
    const catNameId = cats.map((cat) => ({ id:cat.id, name:cat.name }));
    res.json(catNameId);
  });

module.exports = router;
