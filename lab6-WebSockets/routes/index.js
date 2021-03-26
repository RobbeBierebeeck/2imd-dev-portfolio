var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/updatestats', function(req, res, next) {
  res.render('dashboard/index', {});
});
router.get('/', function(req, res, next) {
  res.render('dashboard/dashboard', {});
});
module.exports = router;
