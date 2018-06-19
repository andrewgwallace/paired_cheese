var express = require('express');
var router = express.Router();
const cheeseController = require('../controllers/cheeses');

/* GET users listing. */
router.get('/', cheeseController.index);
router.get('/:cheese_id', cheeseController.show);
module.exports = router;
