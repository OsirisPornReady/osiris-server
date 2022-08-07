//取controller的时候是直接将文件名作为承接require的变量名，所以文件名不要用破折号
var config = require('../config')

var userSocket = {
    loginMessage: (ws,req) => {
        console.log('login界面成功连接')
        setTimeout(() => {
            ws.send(
                JSON.stringify(
                    {
                        title:'登录界面Tips',
                        content:'输入用户名和密码就能登录哦',
                    }
                )
            )
        },5000)
        ws.on('message', function (msg) {
            msg = JSON.parse(msg);
            if (msg.action === 'forgot-password') {
                ws.send(
                    JSON.stringify(
                        {
                            title:'忘记了密码?',
                            content:'这功能还没做，等等吧',
                        }
                    )
                )
            } else if (msg.action === 'register') {
                ws.send(
                    JSON.stringify(
                        {
                            title:'要注册账号?',
                            content:'直接在数据库里面加吧',
                        }
                    )
                )
            }
        })
    }
}

module.exports = userSocket;