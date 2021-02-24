let http = require("http");

// let fs = require("fs");
let unzip = require("unzipper");

http.createServer((req, res) => {
    console.log(req.headers);

    // let outFile = fs.createWriteStream("../server/public/temp.zip");
    req.pipe(unzip.Extract({ path: "../server/public" }));

    // req.on("data", chunk => {
    //     // console.log(chunk.toString());
    //     outFile.write(chunk);
    // });
    req.on("end", () => {
        res.end("Success");
    });
}).listen(8082);
