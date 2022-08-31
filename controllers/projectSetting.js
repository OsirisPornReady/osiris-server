var requestToApi = require('../utility/requestToApi')
var config = require('../config')
var globalConfig = require('../globalConfig')

var projectSetting = {
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
    getGlobalConfig:(req,res,next) => {
        res.send(globalConfig);
    },

}

module.exports = projectSetting;