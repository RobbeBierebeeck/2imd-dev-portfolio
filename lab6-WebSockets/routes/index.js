var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard/index', {});
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard/dashboard', {});
});
module.exports = router;
