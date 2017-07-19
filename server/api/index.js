const router = require('express').Router();

router.use('/auth', require('./auth'));

console.log('**INITIATES API');
router.use('/request', require('./request'));
module.exports = router;
