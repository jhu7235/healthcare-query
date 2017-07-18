const morgan = require('morgan');
const router = require('express').Router();
console.log('**INITIATES LOGGING');

router.use(morgan);
module.exports = router;
