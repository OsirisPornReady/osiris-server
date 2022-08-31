var requestToApi = require('../utility/requestToApi')
var config = require('../config')
var devConfig = require('../devConfig')

var globalConfig = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.globalConfig}/get`;
        requestToApi.get(req,res,path);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.globalConfig}/post`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },
    getDevConfig:(req,res,next) => {
        res.send(devConfig);
    },

}

module.exports = globalConfig;