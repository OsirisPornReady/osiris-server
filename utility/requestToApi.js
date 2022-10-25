var request = require('request') //据说已经deprecated，为了保险不再使用
var http = require('http') //原生库
var https = require('https') //原生库
var axios = require('axios') //比较流行的新库，现在用这个
const baseUrl = 'http://localhost:5000/'
var config = require('../config')

//axios.create()函数 创建一个新的 Axios实例。当你require('axios')时，你会得到一个默认的 Axios 实例。创建实例的原因是为您的应用程序设置自定义默认值。

axios.defaults.baseURL = config.api.bus.host + ':' + config.api.bus.port;
axios.defaults.timeout = 2500; //2.5 seconds
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// 1.发送非序列化数据
// 需要注意的是，Axios 默认使用 JSON 进行数据发布，这意味着我们传入 Axios 的任何对象都会自动将对象序列化为 JSON
// 并将Content-Type标头设置为application/json
// 2.发送序列化 JSON 字符串
// Axios 会自动序列化我们发送的任何数据，但在这种情况下，我们将发送一个序列化的 JSON 字符串作为axios.post()方法的data参数
// Axios 将简单地将这些数据视为表单编码的请求正文，而不是将 content-type 标头设置为application/json
// 要解决此问题，我们需要将Content-Type标头显式设置为application/json


var requestToApi = {
    get: (req,res,path,headers,params=null,responseType='json') => { //查
        axios.request({ //等同于axios(),也可以直接get方法
            url: path,
            method: 'get',
            headers: headers,
            params: params,
            responseType: responseType,
        }).then((response) => {
            res.send(response.data);
        }).catch((error) => {
            // res.send(null);
            res.status(500).send(error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    },
    post: (req,res,path,headers,data,params=null,responseType='json') => { //增
        axios.request({ //等同于axios(),也可以直接post方法
            url: path,
            method: 'post',
            headers: headers,
            data: data,
            params: params,
            responseType: responseType,
        }).then((response) => {
            res.send(response.data);
        }).catch((error) => {
            // res.send(null); //最好不要直接返回空,空可能有其他含义,应该给一个错误状态码
            res.status(500).send(error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                console.log('数据库连接失败!')
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                // console.log(error.request);
                console.log('数据库连接失败!')
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    },

    // request(
    //     {
    //         uri:baseUrl + path,
    //         method:'GET',
    //     },
    //     (error,response,body) => {
    //         if (!error & response.statusCode == 200) {
    //             // res.json(body);
    //             res.send(JSON.parse(body));
    //         }
    //     },
    // )

    // request(
    //     {
    //         uri:baseUrl + path,
    //         method:'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data), //express.json()会将json转换为object,此处要转回来
    //     },
    //     (error,response,body) => {
    //         if (!error & response.statusCode == 200) {
    //             // res.json(body);
    //             res.send(JSON.parse(body));
    //         }
    //     },
    // )

    // put: () => { //改
    //
    // },
    // delete: () => { //删
    //
    // },
}

module.exports = requestToApi;