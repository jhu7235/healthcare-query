const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

console.log('**INITIATES BODYPARSER');
module.exports = router;
