const net = require("net");

class Request {
    constructor(options) {
        this.method = options.method || "GET";
    }
}

void (async function () {
    let request = new Request({
        method: "POST", // HTTP
        host: "127.0.0.1", // IP层
        port: "8088", // TCP层
        path: "/", // HTTP
        headers: {
            // HTTP
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "winter"
        }
    });

    let response = await request.isReloadNavigation();
    console.log(response);
})();
