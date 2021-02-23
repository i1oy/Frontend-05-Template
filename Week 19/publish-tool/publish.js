let http = require("http");
let fs = require("fs");

let request = http.request(
    {
        hostname: "localhost",
        port: 8082,
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream"
        }
    },
    response => {
        console.log(response);
    }
);

// 结束发送请求
// request.end();

let file = fs.createReadStream("./package.json");

file.on("data", chunk => {
    // console.log(chunk.toString());
    request.write(chunk);
});

file.on("close", chunk => {
    console.log("read finished");
    request.end(chunk);
});
