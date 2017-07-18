const router = require('express').Router();
console.log('**INITIATES API');

router.use('/auth', require('./auth'));

router.use('/request', require('./request'));
module.exports = router;
