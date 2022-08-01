var request = require('request')
const baseUrl = 'http://localhost:5000/'

var requestToApi = {
    get: (req,res,path) => { //查
        request(
            {
                uri:baseUrl + path,
                method:'GET',
            },
            (error,response,body) => {
                if (!error & response.statusCode == 200) {
                    // res.json(body);
                    res.send(JSON.parse(body));
                }
            },
        )
    },
    post: (req,res,path,data) => { //增
        request(
            {
                uri:baseUrl + path,
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), //express.json()会将json转换为object,此处要转回来
            },
            (error,response,body) => {
                if (!error & response.statusCode == 200) {
                    // res.json(body);
                    res.send(JSON.parse(body));
                }
            },
        )
    },
    // put: () => { //改
    //
    // },
    // delete: () => { //删
    //
    // },
}

module.exports = requestToApi