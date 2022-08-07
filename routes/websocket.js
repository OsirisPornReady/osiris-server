var express = require('express');
var router = express.Router();
var expressWs = require('express-ws')
const path = require("path");
const fs = require("fs");

expressWs(router)


function getControllerFunc() {
    var controllers = {},
        rootPath = path.resolve(__dirname,'..'); //cd到当前目录，cd到上一级

    var traverseController = function (rootPath,filePath) {
        // console.log(rootPath + filePath)
        //其实可以先用个 const nowPath = rootPath + filePath来保存一下，这样看着太费劲了
        var files = fs.readdirSync(rootPath + filePath); //读取文件夹中的所有文件列表，readdir方法只读一层
        for (let i = 0; i < files.length; i++) { //深度优先遍历所有的controller
            var stat = fs.statSync(rootPath + filePath + '/' + files[i]) //显示文件系统的一般详细信息。
            if (stat.isDirectory()) { //如果是文件夹则继续遍历
                traverseController(rootPath,filePath + '/' + files[i]);
            } else {
                let extname = path.extname(files[i]) //返回文件的扩展名
                let moduleName = files[i].replace(extname,''); //替换掉扩展名后就获得了包名，包要写成和文件名一样
                controllers[moduleName] = require(rootPath + filePath + '/' + moduleName) //递归函数traverseController访问闭包getControllerFunc中的变量
            }
        }
    }
    traverseController(rootPath,'/controllers_websocket')
    return controllers
}

var controllers_websocket = getControllerFunc();



router.ws('/:ctrl/:func',function (ws,req) {
    if (controllers_websocket[req.params.ctrl] && typeof controllers_websocket[req.params.ctrl][req.params.func] == 'function') { //如果有对应的路由controller就调用
        controllers_websocket[req.params.ctrl][req.params.func](ws,req);
    } else {
        ws.send(
            JSON.stringify(
                {
                    state:404
                }
            )
        )
        ws.close()
    }
})

// router.ws('/loginMessage',function (ws,req) {
//     console.log('login界面成功连接')
//     setTimeout(() => {
//         ws.send(
//             JSON.stringify(
//                 {
//                     title:'登录界面Tips',
//                     content:'输入用户名和密码就能登录哦',
//                 }
//             )
//         )
//     },5000)
//     ws.on('message', function (msg) {
//         msg = JSON.parse(msg);
//         if (msg.action === 'forgot-password') {
//             ws.send(
//                 JSON.stringify(
//                     {
//                         title:'忘记了密码?',
//                         content:'这功能还没做，等等吧',
//                     }
//                 )
//             )
//         } else if (msg.action === 'register') {
//             ws.send(
//                 JSON.stringify(
//                     {
//                         title:'要注册账号?',
//                         content:'直接在数据库里面加吧',
//                     }
//                 )
//             )
//         }
//     })
// })


module.exports = router;