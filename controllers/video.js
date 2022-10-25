var requestToApi = require('../utility/requestToApi')
var config = require('../config')

var video = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.video}/get`;
        let headers = req.headers;
        requestToApi.get(req,res,path,headers);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.video}/post`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },

    getAllVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/getAllVideo`;
        let headers = req.headers;
        requestToApi.get(req,res,path,headers);
    },

    createVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/createVideo`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },

    updateVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/updateVideo`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },

    deleteVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/deleteVideo`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },

    swapVideoOrder:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/swapVideoOrder`;
        let headers = req.headers;
        let data = req.body;
        requestToApi.post(req,res,path,headers,data);
    },

}

module.exports = video;