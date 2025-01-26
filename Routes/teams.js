const express = require('express');
const router = express.Router();
const teams = require('../Data/teams');

router.get('/', (req, res) => {
    res.send(teams);
});



module.exports = router;