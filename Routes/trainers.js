const express = require('express');
const router = express.Router();
const trainers = require('../Data/trainers');


router.get('/', (req, res) => {
    res.send(trainers);
});



router.get('/:name', (req, res) => {
      res.json(trainers);
});

router.post('/', (req, res) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const newTrainer = {
        id: trainers.length + 1,
        name: req.body.name,
        age: req.body.age,
        hometown: req.body.hometown,
      };

      trainers.push(newTrainer);
      res.status(201).json(newTrainer);
    } else next(error(400, "Insufficient Data"));
  });

  router.patch('/:id',(req, res) => {
    const trainers = trainers.find((p, i) => {
      if (p.id == req.params.id) {
        trainer.name = req.body.name;
        trainer.age = req.body.age;
        trainer.hometown = req.body.hometown;
        
      }
    });
      trainers.push(newTrainer);
      res.status(201).json(newTrainer);
  });


  router.delete('/:id', (req, res, next) => {
    const trainers = trainers.find((p, i) => {
      if (p.id == req.params.id) {
        trainers.splice(i, 1);
        return ('Trainer Released')
      } else {
        res.status(201).json('Trainer not found');
        return ('Trainer not found')
        
      }
    });
  });


module.exports = router;