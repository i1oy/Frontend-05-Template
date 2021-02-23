let http = require("http");

http.createServer((req, res) => {
    console.log(req.headers);
    req.on("data", chunk => {
        console.log(chunk.toString());
    });
    req.on("end", chunk => {
        res.end("<p>Success</p>");
    });
}).listen(8082);
