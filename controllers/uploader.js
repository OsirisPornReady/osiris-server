var requestToApi = require('../utility/requestToApi')
var config = require('../config')

var uploader = {
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
    uploadImage:(req,res,next) => {
        res.send(JSON.stringify({
            state: 'upload success'
        }));
    },
    uploadImageList:(req,res,next) => {

    },
}

module.exports = uploader;