var express = require('express');
var router = express.Router();
var path = require('path');

var rootPath = path.join(__dirname, '..', '..');
var clientPath = path.join(rootPath, 'client');
var buildPath = path.join(rootPath, 'build');
var nodeModulesPath = path.join(rootPath, 'node_modules');

router.use(express.static(rootPath));
router.use(express.static(clientPath));
router.use(express.static(buildPath));
router.use(express.static(nodeModulesPath));

module.exports = router;
