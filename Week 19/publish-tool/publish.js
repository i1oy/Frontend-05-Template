let http = require("http");
const { response } = require("../server/app");

let request = http.request(
    {
        hostname: "localhost",
        port: 8082
    },
    response => {
        console.log(response);
    }
);

// 请求真正的发送出去
request.end();
