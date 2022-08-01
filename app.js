var express = require('express');
var WebRouter = require('./router')
var config = require('./config')

var app = express();

app.use(express.json()) //内置的json解析,不再需要安装body-parser
WebRouter(app)

app.listen(config.port,() => {
  
})

module.exports = app;
