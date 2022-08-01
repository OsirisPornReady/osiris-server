var requestToApi = require('../utility/requestToApi')
var config = require('../config')

var user = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/get`;
        requestToApi.get(req,res,path);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/post`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },
    // put:(req,res,next) => {
    //     requestToApi.put(res);
    // },
    // delete:(req,res,next) => {
    //     requestToApi.delete(res);
    // },
    login:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/login`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },
}

module.exports = user;