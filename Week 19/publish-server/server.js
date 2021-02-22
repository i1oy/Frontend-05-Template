let http = require("http");

http.createServer((req, res) => {
    console.log(req);
    res.end("<p>Hello World</p>");
}).listen(8082);
