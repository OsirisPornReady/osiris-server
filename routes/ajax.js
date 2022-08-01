var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs')

/* AJAX GET */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

function getControllerFunc() {
  var controllers = {},
      rootPath = path.resolve(__dirname,'..'); //cd到当前目录，cd到上一级

  var traverseController = function (rootPath,filePath) {
    var files = fs.readdirSync(rootPath + filePath);
    for (let i = 0; i < files.length; i++) { //深度优先遍历所有的controller
      var stat = fs.statSync(rootPath + filePath + '/' + files[i])
      if (stat.isDirectory()) {
        traverseController(rootPath,filePath + '/' + files[i]);
      } else {
        let extname = path.extname(files[i]) //返回文件的扩展名
        let moduleName = files[i].replace(extname,''); //替换掉扩展名后就获得了包名，包要写成和文件名一样
        controllers[moduleName] = require(rootPath + filePath + '/' + moduleName) //递归函数traverseController访问闭包getControllerFunc中的变量
      }
    }
  }
  traverseController(rootPath,'/controllers')
  return controllers
}

var controllers = getControllerFunc();


router.get('/:ctrl/:func',(req,res,next) => {  //冒号表示将ctrl作为参数，controller是保留字段不能用
  if (controllers[req.params.ctrl] && typeof controllers[req.params.ctrl][req.params.func] == 'function') { //如果有对应的路由controller就调用
    controllers[req.params.ctrl][req.params.func](req,res,next);
  } else {
    res.status(404);
    res.end();
  }
})

router.post('/:ctrl/:func',(req,res,next) => {  //冒号表示将ctrl作为参数，controller是保留字段不能用
  if (controllers[req.params.ctrl] && typeof controllers[req.params.ctrl][req.params.func] == 'function') { //如果有对应的路由controller就调用
    controllers[req.params.ctrl][req.params.func](req,res,next);
  } else {
    res.status(404);
    res.end();
  }
})

//Restful只是一个组织API的风格，put和delete实现得并不久，也不安全，最好只用get/post
router.put('/:ctrl/:func',(req,res,next) => {  //冒号表示将ctrl作为参数，controller是保留字段不能用
  if (controllers[req.params.ctrl] && typeof controllers[req.params.ctrl][req.params.func] == 'function') { //如果有对应的路由controller就调用
    controllers[req.params.ctrl][req.params.func](req,res,next);
  } else {
    res.status(404);
    res.end();
  }
})

//Restful只是一个组织API的风格，put和delete实现得并不久，也不安全，最好只用get/post
router.delete('/:ctrl/:func',(req,res,next) => {  //冒号表示将ctrl作为参数，controller是保留字段不能用
  if (controllers[req.params.ctrl] && typeof controllers[req.params.ctrl][req.params.func] == 'function') { //如果有对应的路由controller就调用
    controllers[req.params.ctrl][req.params.func](req,res,next);
  } else {
    res.status(404);
    res.end();
  }
})

module.exports = router;