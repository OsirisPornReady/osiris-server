var express = require('express');
var path = require('path')
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.json({page:'index'});
// });

router.get('*', function(req, res, next) {
  res.render('index');
});

module.exports = router;
