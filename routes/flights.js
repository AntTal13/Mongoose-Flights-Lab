var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /
router.get('/', flightsCtrl.index);
// GET /new
router.get('/new', flightsCtrl.new);
// GET /:id
router.get('/:id', flightsCtrl.show)
// POST /posts
router.post('/', flightsCtrl.create);


module.exports = router;
