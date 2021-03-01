let http = require("http");
const https = require("https");

// let fs = require("fs");
let unzip = require("unzipper");

let querystring = require("querystring");

// 2. auth 路由：接受code，使用 code+client_id+client_secret 换 token
const client_secret = require("./client_secret").client_secret;
const client_id = "Iv1.f7ff347e40501587";

function getToken(code, callback) {
    const queryObj = {
        client_id,
        client_secret,
        code
    };
    const params = querystring.stringify(queryObj);
    console.log(queryObj);
    console.log(params);
    const request = https.request(
        {
            hostname: "github.com",
            path: `/login/oauth/access_token?${params}`,
            port: 443,
            methid: "POST"
        },
        response => {
            let bodyStr = "";
            response.on("data", chunk => {
                bodyStr += chunk.toString();
            });
            response.on("end", () => {
                const body = querystring.parse(bodyStr);
                callback(body);
            });
        }
    );

    request.on("error", err => {
        console.log(err.message);
        console.log(err);
    });
    request.end();
}

function auth(req, res) {
    let query = querystring.parse(req.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(query.code, info => {
        console.log(info);
        res.write(
            `<a href="http://localhost:8083/?token=${info.access_token}">Publish</a>`
        );
        res.end();
    });
}

// 4. publish 路由：使用 token 获取用户信息，验证权限，接受发布

function publish(request, response) {
    console.log("hello");
    const query = querystring.parse(
        request.url.match(/^\/publish\?([\s\S]+)$/)[1]
    );

    getUser(query.token, info => {
        console.log("INFO", info);
        if (info.login === "i1oy") {
            request.pipe(
                unzip.Extract({
                    path: "../server/public/"
                })
            );

            request.on("end", function () {
                response.end("Success!");
            });
        } else {
            request.on("end", () => {
                response.end("No Publish Permission");
            });
        }
    });
}

function getUser(token, callback) {
    // curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com/user
    let req = https.request(
        {
            hostname: "api.github.com",
            path: `/user`,
            port: 443,
            method: "GET",
            headers: {
                Authorization: `token ${token}`,
                "User-Agent": "WebPublishTool"
            }
        },
        function (res) {
            let bodyStr = "";
            res.on("data", chunk => {
                bodyStr += chunk.toString();
            });
            res.on("end", () => {
                console.log("GET USER INFO:");
                console.log(bodyStr);
                callback(JSON.parse(bodyStr));
            });
        }
    );

    req.on("error", err => {
        console.log(err.message);
    });

    req.end();
}

http.createServer((req, res) => {
    if (req.url.match(/^\/auth\?/)) return auth(req, res);
    if (req.url.match(/^\/publish\?/)) return publish(req, res);
}).listen(8082);
