var express = require('express');
var path = require('path')
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.json({page:'index'});
// });

router.get('*', function(req, res, next) {
  res.render('index'); //view的名字就是html文件的名字,比如public下有个叫home.html那就res.render('home')
});

module.exports = router;
