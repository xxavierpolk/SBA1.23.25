const express = require('express');
const router = express.Router();
const regions = require('../Data/regions');


router.get('/', (req, res) => {
    res.send(regions);
});

router.get('/:id', (req, res) => {
;
    res.send(`The region is ${req.params.id}`);
});



module.exports = router;