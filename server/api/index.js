const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/request', require('./request'));
console.log('**INITIATES API');
module.exports = router;
