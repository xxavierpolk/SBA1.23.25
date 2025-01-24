const express = require('express');
const router = express.Router();
const trainers = require('../Data/trainers');


router.get('/', (req, res) => {
    res.send(trainers);
});

// router.get('/:name', (req, res) => {
//     res.send(`The trainer is ${req.params.name}`);
// });

router.get('/:name', (req, res) => {
    const links = [
        {
          href: `trainers/:name`,
          rel: ":name",
          type: "GET",
        },
      ];
  
      res.json({ trainers, links });
});

router.post('/', (req, res) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const newTrainer = {
        id: trainers.length + 1,
        name: req.body.name,
        age: req.body.age,
        hometown: req.body.hometown,
      };

      posts.push(newTrainer);
      res.status(201).json(newTrainer);
    } else next(error(400, "Insufficient Data"));
  });


module.exports = router;