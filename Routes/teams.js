const express = require('express');
const router = express.Router();
const teams = require('../Data/teams');

router.get('/', (req, res) => {
    res.send(teams);
});

router.patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })

module.exports = router;