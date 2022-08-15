var requestToApi = require('../utility/requestToApi')
var config = require('../config')

var video = {
    get:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.video}/get`;
        requestToApi.get(req,res,path);
    },
    post:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `${config.api.video}/post`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },

    getAllVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/getAllVideo`;
        requestToApi.get(req,res,path);
    },

    createVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/createVideo`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },

    updateVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/updateVideo`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },

    deleteVideo:(req,res,next) => {
        let query = req.query;
        let queryStr = '';
        let path = `/${config.api.video}/deleteVideo`;
        let data = req.body;
        requestToApi.post(req,res,path,data);
    },

}

module.exports = video;