let http = require("http");

const querystring = require("querystring");
let archiver = require("archiver");

let child_proc = require("child_process");

const client_id = "Iv1.f7ff347e40501587";

// 1. 打开 https://github.com/login/oauth/authorize
child_proc.exec(
    `open -a "Google Chrome" https://github.com/login/oauth/authorize?client_id=${client_id}`
    // `open https://github.com/login/oauth/authorize?client_id=${client_id}`
);

// 3. 创建 server，接受 token，后点击发布
http.createServer((req, res) => {
    let matchRes = req.url.match(/^\/\?([\s\S]+)$/);
    if (matchRes && matchRes.length > 1) {
        let query = querystring.parse(matchRes[1]);
        pulish(query.token, req, res);
    }

    // res.end();
}).listen(8083);

const pulish = (token, request, response) => {
    let req = http.request(
        {
            hostname: "localhost",
            port: 8082,
            method: "POST",
            connection: "keep-alive",
            path: `/publish?token=${token}`,
            headers: {
                "Conten-Type": "application/octet-stream"
            }
        },
        res => {
            let bodyStr = "";
            res.on("data", chunk => {
                bodyStr += chunk.toString();
            });
            res.on("end", () => {
                response.end("SUCCESS!" + bodyStr);
            });
        }
    );

    req.on("error", err => {
        console.log(err.message);
    });

    req.on("pipe", () => {
        console.log("Pipe");
    });

    req.on("close", () => {
        console.log("CLOSE");
    });

    req.on("drain", () => {
        console.log("DRAIN");
    });

    req.on("finish", () => {
        console.log("FINISH");
    });

    const archive = archiver("zip", {
        zlib: { level: 9 }
    });

    archive.directory("./static/", false);

    archive.finalize();

    console.log("PIPE~");
    archive.pipe(req);
};
