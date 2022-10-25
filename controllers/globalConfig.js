var requestToApi = require('../utility/requestToApi')
var config = require('../config')
var devConfig = require('../devConfig')

var globalConfig = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.globalConfig}/get`;
        let headers = req.headers;
        requestToApi.get(req,res,path,headers);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.globalConfig}/post`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },
    getDevConfig:(req,res,next) => {
        res.send(devConfig);
    },

}

module.exports = globalConfig;