const passport = require('passport');
const router = require('express').Router();

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;
