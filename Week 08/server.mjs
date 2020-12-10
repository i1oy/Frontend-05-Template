import { createServer } from "http";

createServer((req, res) => {
    let body = [];
    req.on("error", err => console.log("ERR:", err))
        .on("data", chunk => body.push(chunk))
        .on("end", () => {
            body = Buffer.concat(body).toString();
            console.log("body: ", body);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<div>Hello, World<div>");
        });
}).listen(8088);

console.log("server started.");
