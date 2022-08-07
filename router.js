var ajax = require('./routes/ajax')
var index = require('./routes/index')
var websocket = require('./routes/websocket')

var router = function (app) {
    app.use('/ajax', ajax); //将ajax中间件作为http://localhost:port/ajax的回调函数
    app.use('/websocket', websocket);
    app.use('/', index);
  }
module.exports = router;