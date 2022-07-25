

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
    res.json(cats);
  });

module.exports = router;
