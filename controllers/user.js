var requestToApi = require('../utility/requestToApi')
var config = require('../config')
var auth = require('../middlewares/auth')

var user = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/get`;
        let headers = req.headers;
        requestToApi.get(req,res,path,headers);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/post`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },
    // put:(req,res,next) => {
    //     requestToApi.put(res);
    // },
    // delete:(req,res,next) => {
    //     requestToApi.delete(res);
    // },
    login:(req,res,next) => {
        auth.authUser();
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.user}/login`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },
    setLastUser:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/login`;
        let headers = req.headers;
        let data = req.body;
        config.lastUser = data; //express应用了json解析器，不需要parse
        res.end();
    },
    getLastUser:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.user}/login`;
        let headers = req.headers;
        res.send(config.lastUser);
    },
}

module.exports = user;