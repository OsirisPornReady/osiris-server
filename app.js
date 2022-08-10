var express = require('express');
var WebRouter = require('./router')
var config = require('./config')
var expressWs = require('express-ws')
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, 'public'))); //设置静态资源文件路径
app.use(express.json()) //内置的json解析,不再需要安装body-parser
expressWs(app);
WebRouter(app)


// app.ws('/socketTest', function (ws, req) {
//     console.log('收到消息')
//     ws.send(JSON.stringify('你连接成功了'))
//     ws.on('message', function (msg) {
//         console.log('收到message')
//         ws.send(JSON.stringify('这是第二次发送信息'))
//     })
// })
//
// app.ws('/loginMessage', function (ws, req) {
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

app.listen(config.port,() => {
  
})

module.exports = app;
