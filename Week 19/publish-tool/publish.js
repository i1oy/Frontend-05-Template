let http = require("http");
let fs = require("fs");

let request = http.request(
    {
        hostname: "localhost",
        port: 8082,
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream"
            // 添加Content-Length
            // "Content-Length": stats.size
        }
    },
    response => {
        console.log(response);
    }
);

let archiver = require("archiver");
const archive = archiver("zip", {
    zlib: { level: 9 }
});

archive.directory("./static/", false);

archive.finalize();

archive.pipe(request);

// archive.pipe(fs.createWriteStream("./tmpo.zip"));

// fs.stat("./sample.html", (err, stats) => {
//     let request = http.request(
//         {
//             hostname: "localhost",
//             port: 8082,
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/octet-stream",
//                 // 添加Content-Length
//                 "Content-Length": stats.size
//             }
//         },
//         response => {
//             console.log(response);
//         }
//     );

//     // 结束发送请求
//     // request.end();

//     let file = fs.createReadStream("./sample.html");

//     file.pipe(request);

//     file.on("end", () => request.end());
// });

// file.on("data", chunk => {
//     // console.log(chunk.toString());
//     request.write(chunk);
// });

// file.on("close", chunk => {
//     console.log("read finished");
//     request.end(chunk);
// });
